from fastapi.security import OAuth2PasswordRequestForm
from pydantic import BaseModel
from typing import Optional
from fastapi import APIRouter, Depends, HTTPException
from datetime import datetime, timedelta
import jwt
import os

# Definindo o roteador e variáveis de configuração
router = APIRouter(prefix="/auth", tags=["auth"])
SECRET_KEY = os.getenv(
    "SECRET_KEY", "0b3638b6177c3346e53eebfd1b6fb01e598360f49895a466affaf73b8eef73e0"
)
ALGORITHM = "HS256"


class User(BaseModel):
    username: str
    password: str


def create_jwt_token(data: dict) -> str:
    expiration = datetime.utcnow() + timedelta(
        hours=1
    )  # Use UTC para evitar problemas de fuso horário
    to_encode = data.copy()
    to_encode.update({"exp": expiration})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


def verify_jwt_token(token: str) -> dict:
    try:
        decoded_jwt = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return decoded_jwt
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid token")


@router.post("/token")
async def login(form_data: OAuth2PasswordRequestForm = Depends()):
    # Simulação de validação de credenciais
    # Aqui você deve verificar o usuário e a senha no banco de dados
    if (
        form_data.username == "user" and form_data.password == "password"
    ):  # Exemplo fictício
        token_data = {"sub": form_data.username}
        access_token = create_jwt_token(token_data)
        return {"access_token": access_token, "token_type": "bearer"}
    else:
        raise HTTPException(status_code=401, detail="Invalid credentials")


# @router.get("/users/me")
# async def read_users_me(token: str = Depends(oauth2_scheme)):
#     # Verifica e decodifica o token JWT
#     decoded_jwt = verify_jwt_token(token)
#     return {"user": decoded_jwt["sub"]}
