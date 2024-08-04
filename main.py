from fastapi import FastAPI
from app.routers import url, withdrawal, wallet

app = FastAPI()

app.include_router(url.router)
app.include_router(wallet.router)
app.include_router(withdrawal.router)
