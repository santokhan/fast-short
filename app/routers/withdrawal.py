from datetime import datetime
from json import dumps
from fastapi import APIRouter, HTTPException, Query
from app.mongodb import config
from app.schema.withdrawal import WithdrawalModel
from app.mongodb.client import db
from app.utils.from_mongo import bson_to_json
from bson import ObjectId

router = APIRouter()
collection_wallet = db[config.collection_wallet]
collection = db[config.collection_witthdrawal]


@router.post("/withdrawal/", tags=["withdrawal"])
async def cash_withdrawal(data: WithdrawalModel):
    try:
        if data.author:
            docs = collection_wallet.find({"author": data.author})
            if docs is None:
                raise HTTPException(status_code=404, detail="No wallet found")
            else:
                docs_list = [bson_to_json(doc) async for doc in docs]
                doc = docs_list[0]
                id = doc["id"]
                if data.author["urlArray"] == []:
                    # For empty array on wallet
                    raise HTTPException(status_code=404, detail="No wallet found")
                cleared_wallet = await collection_wallet.update_one(
                    {"_id": ObjectId(id)},
                    {"$set": {"urlArray": [], "updatedAt": datetime.now()}},
                )
                if cleared_wallet is None:
                    raise HTTPException(status_code=404, detail="No wallet found")
                else:
                    print("Cleared")
                    wallet_data_for_withdrawal = {
                        "author": doc["author"],
                        "urlArray": doc["urlArray"],
                        "createdAt": datetime.now(),
                        "updatedAt": datetime.now(),
                    }
                    inserted_doc = await collection.insert_one(
                        wallet_data_for_withdrawal
                    )
                    if inserted_doc is None:
                        raise HTTPException(status_code=404, detail="No wallet found")
                    else:
                        print("Inserted")
                        return {"id": str(inserted_doc.inserted_id)}
        else:
            raise HTTPException(status_code=404, detail="Bad API getway")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/withdrawals/", tags=["withdrawal"])
async def get_withdrawals():
    try:
        cursor = collection.find({})
        withdrawals = [bson_to_json(document) async for document in cursor]
        return withdrawals
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.get("/withdrawals/{author}/", tags=["withdrawal"])
async def get_withdrawal(author: str):
    try:
        docs = collection.find({"author": author})
        if docs is None:
            raise HTTPException(status_code=404, detail="No withdrawal found")
        # Convert BSON document to JSON string
        return [bson_to_json(doc) async for doc in docs]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@router.delete("/withdrawal/{id}/", tags=["withdrawal"])
async def remove_withdraw_history(id: str):
    try:
        # Asynchronously delete the document
        deleted_doc = await collection.delete_one({"_id": ObjectId(id)})

        # Check if document was deleted successfully
        if deleted_doc.deleted_count == 0:
            raise HTTPException(status_code=404, detail="No withdrawal found")
        else:
            return {"message": f"Deleted history for id: {id}"}

    except Exception as e:
        # Handle any unexpected exceptions
        raise HTTPException(status_code=500, detail=str(e))
