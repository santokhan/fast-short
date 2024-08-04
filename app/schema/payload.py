from pydantic import BaseModel
from typing import Optional


class UpdateUrlModel(BaseModel):
    author: Optional[str] = None
    hash: Optional[str] = None
    alias: Optional[str] = None
