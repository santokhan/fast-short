from pydantic import BaseModel
from typing import Optional


class URLData(BaseModel):
    url: str
    domain: str
    author: Optional[str] = None
    alias: Optional[str] = None


# # Create instances and test
# data1 = URLData(url="https://example.com")
# print(data1)
# # Output should include visited=True by default

# data2 = URLData(url="https://example.com", visited=False)
# print(data2)
# # Output should include visited=False
