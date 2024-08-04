from typing import Optional
from fastapi import Body, HTTPException, APIRouter, Query
from app.mongodb.query.stats import get_stats
from app.schema.payload import UpdateUrlModel
from app.schema.url import URLData
from app.services.shorten_url import do_hash, do_unique_hash
from app.mongodb import config
from app.utils.filter_dict import filter_dictionary
from app.utils.from_mongo import bson_to_json
from datetime import datetime, timezone
from app.mongodb.client import db
from bson import ObjectId

router = APIRouter()
collection = db[config.collection_urls]
collection_wallet = db[config.collection_wallet]


async def add_url(data):
    """
    Add new hash to collection
    """
    result = await collection.insert_one(data)
    if result is None:
        raise HTTPException(status_code=500, detail="Failed to shorten URL")
    else:
        return await get_single_url({"_id": result.inserted_id})


async def get_single_url(filter_dict: dict) -> Optional[dict]:
    """
    filter_dict = {hash: "abc123"}
    """
    filters = filter_dictionary(filter_dict)
    doc = await collection.find_one(filters)
    if doc is None:
        raise HTTPException(status_code=404, detail="URL not found")
    else:
        return bson_to_json(doc)


@router.post("/url/", tags=["url"])
async def shorten_url(data: URLData):
    url_to_insert = {
        "URL": data.url,
        "domain": data.domain,
        "created_at": datetime.now(timezone.utc),  # Store the current UTC time
    }
    if data.author:
        url_to_insert["author"] = data.author
        url_to_insert["visited"] = False
    if data.alias:
        isAliasExists = await collection.find_one({"alias": data.alias})
        if not isAliasExists:
            url_to_insert["alias"] = data.alias
        else:
            raise HTTPException(status_code=400, detail="Alias already exists")
    else:
        if data.author:
            url_to_insert["hash"] = do_unique_hash(data.url, data.author)
        else:
            # For public or unauthorized URLs
            url_to_insert["hash"] = do_hash(data.url)

    return await add_url(url_to_insert)


@router.get("/urls/", tags=["url"])
async def get_urls(
    skip: int = Query(0, alias="skip", ge=0),
    limit: int = Query(10, alias="limit", ge=1, le=100),
):
    docs = collection.find().skip(skip).limit(limit)
    if docs is None:
        raise HTTPException(status_code=404, detail="URL not found")
    return [bson_to_json(doc) async for doc in docs]


@router.get("/urls/unauthorized/", tags=["url"])
async def get_urls(
    skip: int = Query(0, alias="skip", ge=0),
    limit: int = Query(10, alias="limit", ge=1, le=100),
):
    filters = {"author": ""}
    docs = collection.find(filters).skip(skip).limit(limit)
    if docs is None:
        raise HTTPException(status_code=404, detail="URL not found")
    else:
        result = [bson_to_json(doc) async for doc in docs]
        count = await get_stats(collection, filters)
        return {"urls": result, **count}


@router.get("/urls/{author}/", tags=["url"])
async def get_urls_by_author(
    author: str,
    skip: int = Query(0, alias="skip", ge=0),
    limit: int = Query(10, alias="limit", ge=1, le=100),
):
    filters = {"author": author}
    docs = collection.find(filters).skip(skip).limit(limit)
    if docs is None:
        raise HTTPException(status_code=404, detail="URL not found")
    else:
        count = await get_stats(collection, filters)
        result = [bson_to_json(doc) async for doc in docs]
        return {"author": author, "urls": result, "count": count}


@router.get("/url/", tags=["url"])
async def get_url(
    hash: Optional[str] = Query(None),
    alias: Optional[str] = Query(None),
    author: Optional[str] = Query(None),
):
    if hash or alias:
        return await get_single_url({"hash": hash, "alias": alias, "author": author})


@router.get("/url/origin/", tags=["url"])
async def get_origin(
    hash: Optional[str] = Query(None),
    alias: Optional[str] = Query(None),
    author: Optional[str] = Query(None),
):
    if hash or alias:
        doc = await get_single_url({"hash": hash, "alias": alias, "author": author})
        if doc is None:
            raise HTTPException(status_code=404, detail="URL not found")
        else:
            return doc["url"]


@router.get("/url/stats/", tags=["url"])
async def stats():
    return await get_stats(collection)


@router.patch("/url/visit/", tags=["url"])
async def visited(body: UpdateUrlModel = Body(...)):
    author = body.author
    hash = body.hash
    alias = body.alias

    filters = filter_dictionary({"hash": hash, "alias": alias, "author": author})
    update_visited = {"$set": {"visited": True}}

    updated_result = await collection.update_one(filters, update_visited)
    if updated_result.modified_count > 0:
        await collection_wallet.insert_one(
            {
                "author": author,
                "urlArray": [hash],
                "createdAt": datetime.now(),
                "updatedAt": datetime.now(),
            }
        )
        return await get_single_url(filters)


@router.delete("/url/{id}/", tags=["url"])
async def remove(id: str):
    result = await collection.delete_one({"_id": ObjectId(id)})
    if result is None:
        raise HTTPException(status_code=404, detail="URL not found")
    else:
        return {"message": "URL deleted", "id": id}
