from fastapi import Response, APIRouter, status

bookings_router = APIRouter()

@bookings_router.get('/default', status_code=status.HTTP_200_OK)
def bookings_default():
    return { "bookings": "router" }

