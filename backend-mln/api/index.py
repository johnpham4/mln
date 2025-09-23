from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, JSONResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
import sys
import os

# Add src directory to path
current_dir = os.path.dirname(os.path.abspath(__file__))
parent_dir = os.path.dirname(current_dir)
src_dir = os.path.join(parent_dir, 'src')
sys.path.insert(0, src_dir)

# Import after adding path
from service_simple import chat_service, chat_service_streaming
from dto import ChatRequest
import uvicorn
from pathlib import Path
import json

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
@app.get("/api/")
def serve_index():
    try:
        html_path = Path(__file__).parent / "index.html"
        if html_path.exists():
            return html_path.read_text(encoding="utf-8")
        else:
            return HTMLResponse(content="<h1>MLN Backend API</h1><p>API is running successfully!</p>")
    except Exception as e:
        return HTMLResponse(content=f"<h1>MLN Backend API</h1><p>API is running! Error: {str(e)}</p>")

@app.get("/health")
@app.get("/api/health")
def health_check():
    return {"status": "healthy", "message": "FastAPI on Vercel working!"}

@app.post("/chat")
@app.post("/api/chat")
async def chat_endpoint(request: Request):
    data = await request.json()
    user_input = data.get("message", "")
    result = chat_service(user_input)
    return JSONResponse(content=result)

@app.post("/chat/stream")
@app.post("/api/chat/stream")
async def chat_stream_endpoint(request: ChatRequest):
    return StreamingResponse(
        chat_service_streaming(request.message),
        media_type="text/event-stream"
    )
if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

