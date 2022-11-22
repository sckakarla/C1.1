from fastapi import Response, APIRouter, status
from typing import List

from schema.bookings import Booking

bookings_router = APIRouter()

sample_bookings: List[Booking] = [
    Booking(user_net_id="sck36", timing=8.30),
    Booking(user_net_id="sck36", timing=8.30),
    Booking(user_net_id="jwt45", timing=8.30),
    Booking(user_net_id="jwt45", timing=8.30),
    Booking(user_net_id="ty9", timing=8.30),
    Booking(user_net_id="ty9", timing=8.30),
]

@bookings_router.get('/default', status_code=status.HTTP_200_OK)
def bookings_default():
    return { "bookings": "router" }

@bookings_router.get('/{user_net_id}', status_code=status.HTTP_200_OK)
def get_user_bookings(user_net_id: str):
    user_bookings: List[Booking] = []
    for booking in sample_bookings:
        if booking.user_net_id == user_net_id:
            user_bookings.append(booking)
    
    return { "user_bookings": user_bookings }
    

