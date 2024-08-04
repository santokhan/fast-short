from pymongo import MongoClient
from app.mongodb.config import connection_string, db
from motor.motor_asyncio import AsyncIOMotorClient


# client = MongoClient(connection_string)
client = AsyncIOMotorClient(connection_string)
db = client[db]
