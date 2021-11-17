from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from uuid import uuid4 as uuid


from config.storage import STORAGE

app = FastAPI()


@app.get("/")
def get_image():
    return {"hello": "world"}


@app.post("/upload_image")
async def create_file(file: bytes = File(...)):

    name_folder = 'upload_images'

    uid = str(uuid())

    # guardar la imagen en el storage
    data_storage = STORAGE.child(name_folder).child(uid).put(file)

    # obtener la url de la imagen
    file = STORAGE.child(name_folder).child(uid).get_url(None)

    return {"data": file}


origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:3000",
    # "https://todoapprobertfrontend.netlify.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
