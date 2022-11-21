from fastapi import Response, APIRouter, status

user_router = APIRouter()

@user_router.get('/default', status_code=status.HTTP_200_OK)
def user_default():
    return { "user": "router" }

