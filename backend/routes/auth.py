from fastapi import Response, APIRouter, status

auth_router = APIRouter()

@auth_router.get('/default', status_code=status.HTTP_200_OK)
def auth_default():
    return { "auth": "router" }

