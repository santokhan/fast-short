from fastapi.security import Oauth2PasswordRequestForm
from pydantic import BaseModel
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException
from datetime import datetime, timedelta
import jwt

router = APIRouter(prefix="/auth", tags=["auth"])
oauth2_scheme = Oauth2PasswordRequestForm(tokenUrl="token")
SECRET_KEY = "701f2815168afe7109bc0f082a9a62528481f9cf5d7904d67f11a44b8ee39b22"
ALGORITHM = "HS256"


class User(BaseModel):
    username: str
    passwor: str


def create_jwt_token(data: dict):
    expiration = datetime.now() + timedelta(hours=1)
    to_encode = data.copy()
    to_encode.update({"exp": expiration})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_jwt_token(token: str):
    try:
        decoded_jwt = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return decoded_jwt
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")


@router.post("/token")
async def login(form_data: Oauth2PasswordRequestForm = Depends()):
    # Validate credentials here
    return {"access_token": "my_token", "token_type": "bearer"}


@router.get("/token/verify")
async def read_users_me(token: str = Depends(oauth2_scheme)):
    # Validate token and get user info
    decoded_jwt = verify_jwt_token(token)
    return {"token": token}


@router.get("/users/me")
async def read_users_me(token: str = Depends(oauth2_scheme)):
    # Validate token and get user info
    return {"token": token}
