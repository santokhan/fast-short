from fastapi import HTTPException, APIRouter, Query
from app.mongodb.client import db
from app.mongodb import config
from app.utils.from_mongo import bson_to_json

router = APIRouter()
collection = db[config.collection_wallet]


@router.get("/wallets/", tags=["wallet"])
async def get_all_wallet(
    skip: int = Query(0, alias="skip", ge=0),
    limit: int = Query(10, alias="limit", ge=1, le=100),
):
    docs = collection.find().skip(skip).limit(limit)
    if docs is None:
        raise HTTPException(status_code=404, detail="No wallet found")
    else:
        return [bson_to_json(doc) async for doc in docs]


@router.get("/wallet/{author}", tags=["wallet"])
async def get_wallet_by_author(author: str):
    docs = collection.find({"author": author})
    if docs is None:
        raise HTTPException(status_code=404, detail="No wallet found")
    return [bson_to_json(doc) async for doc in docs]
