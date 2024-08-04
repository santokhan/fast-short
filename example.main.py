from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import Optional
import hashlib

app = FastAPI()

# In-memory storage for the URL mappings
url_mapping = {}


class URLData(BaseModel):
    url: str


@app.post("/shorten/")
def shorten_url(data: URLData):
    original_url = data.url
    # Create a unique short key based on the hash of the URL
    short_key = hashlib.md5(original_url.encode()).hexdigest()[:6]
    url_mapping[short_key] = original_url
    return {"short_url": f"http://localhost:8000/{short_key}"}


@app.get("/{short_key}")
def redirect(short_key: str):
    original_url = url_mapping.get(short_key)
    if original_url is None:
        raise HTTPException(status_code=404, detail="URL not found")
    return {"original_url": original_url}


@app.get("/stats/")
def stats():
    return {"url_count": len(url_mapping)}
