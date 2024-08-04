from typing import Optional
from motor.motor_asyncio import AsyncIOMotorCollection


async def get_stats(
    collection: AsyncIOMotorCollection, filters: Optional[dict] = None
) -> dict:
    # filters = filter_dictionary(filters)
    count = await collection.count_documents(filters)
    return {"stats": count}
