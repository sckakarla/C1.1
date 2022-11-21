from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.bookings import bookings_router
from routes.user import user_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router, prefix="/users", tags=["Users"])
app.include_router(bookings_router, prefix="/bookings", tags=["Bookings"])

@app.get("/")
def read_root():
    return {"Hello": "World"}