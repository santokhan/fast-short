from pydantic import BaseModel


class WithdrawalModel(BaseModel):
    author: str
