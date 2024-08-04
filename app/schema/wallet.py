from pydantic import BaseModel


class WalletModel(BaseModel):
    author: str
    urlArray: list[str]
