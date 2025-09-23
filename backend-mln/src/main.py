from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, StreamingResponse
from fastapi.staticfiles import StaticFiles
from dto import ChatRequest
from service import chat_service, chat_service_streaming
import uvicorn


app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# mount folder static
app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
def index():
    return FileResponse("static/index.html")

@app.post("/chat")
def chat_endpoint(request: ChatRequest):
    return chat_service(request)

@app.post("/chat/stream")
async def chat_stream_endpoint(request: ChatRequest):
    generator = chat_service_streaming(request)
    return StreamingResponse(generator, media_type="text/event-stream; charset=utf-8")

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
