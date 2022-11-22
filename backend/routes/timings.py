from fastapi import APIRouter, Response, status

timings_router = APIRouter()

@timings_router.get('/default', status_code=status.HTTP_200_OK)
def timings_default():
    return { "timings": "default" }
