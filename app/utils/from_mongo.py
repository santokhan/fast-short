from pydantic import BaseModel
from typing import Optional
from app.schema.url import URLData


class URLModel(BaseModel):
    id: str
    URL: str
    domain: Optional[str] = None
    author: Optional[str] = None
    alias: Optional[str] = None
    visited: bool = False

    @classmethod
    def from_mongo(cls, doc):
        # Convert ObjectId to string and create an instance of Item
        doc["id"] = str(doc["_id"])
        del doc["_id"]  # Remove _id field if not needed
        return cls(**doc)


def convert(docs):
    new_docs = []
    for doc in docs:
        id = str(doc["_id"])
        new_doc = {"id": id, **doc}
        del new_doc["_id"]
        new_docs.append(new_doc)
    return new_docs


def bson_to_json(doc):
    """
    Convert BSON document to JSON string
    """
    # Convert ObjectId to string and create an instance of Item
    doc["id"] = str(doc["_id"])
    del doc["_id"]  # Remove _id field if not needed
    return doc
