from fastapi import APIRouter, Response, status

map_router = APIRouter()

@map_router.get('/default', status_code=status.HTTP_200_OK)
def map_default():
    return { "map": "default" }

