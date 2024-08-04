from fastapi import FastAPI
from app.routers import url, withdrawal, wallet
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(url.router)
app.include_router(wallet.router)
app.include_router(withdrawal.router)
