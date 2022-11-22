from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.bookings import bookings_router
from routes.auth import auth_router
from routes.map import map_router
from routes.timings import timings_router
from routes.passes import passes_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/auth", tags=["Duke OAuth"])
app.include_router(bookings_router, prefix="/bookings", tags=["Bookings"])
app.include_router(map_router, prefix="/map", tags=["Map"])
app.include_router(timings_router, prefix="/timings", tags=["Timings"])
app.include_router(passes_router, prefix="/passes", tags=["Passes"])

@app.get("/")
def read_root():
    return {"Hello": "World"}