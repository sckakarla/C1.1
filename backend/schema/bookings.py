from pydantic import BaseModel
from enum import Enum
from typing import List

class StopPointEnum(int, Enum):
    east = 1
    stop_two = 2
    stop_three = 3
    stop_four = 4
    stop_five = 5
    stop_six = 6
    stop_seven = 7
    stop_eight = 8
    stop_nine = 9
    stop_ten = 10
    stop_eleven = 11
    stop_twelve = 12
    stop_thirteen = 13
    west = 14
    
class AccomodationsEnum(str, Enum):
    wheelchair = 'wheelchair'
    mental_problems = 'mental_problems'
    anxiety = 'anxiety'

class Booking(BaseModel):
    user_net_id: str
    timing: float
    # default is direct East-West
    pickup_point: StopPointEnum = StopPointEnum.east
    dropoff_point: StopPointEnum = StopPointEnum.west
    # TODO: need num of buses
    bus_number: float = 1.00
    accomodations: List[AccomodationsEnum] = []