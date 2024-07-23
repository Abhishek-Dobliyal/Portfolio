from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from router.routes import router

app = FastAPI()
app.include_router(router=router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://abhishek-dobliyal-portfolio.netlify.app"], 
    allow_credentials=True, 
    allow_methods=["GET", "POST"]
)
