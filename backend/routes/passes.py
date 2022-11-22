from fastapi import APIRouter, Response, status

passes_router = APIRouter()

@passes_router.get('/default', status_code=status.HTTP_200_OK)
def passes_default():
    return { "passes": "default" }
