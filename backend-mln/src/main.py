<<<<<<< HEAD
from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, JSONResponse, HTMLResponse
from service_logic import chat_service, chat_service_streaming  # tách logic riêng
from dto import ChatRequest
import uvicorn
from pathlib import Path

app = FastAPI()

# Serve index.html
@app.get("/", response_class=HTMLResponse)
def serve_index():
    html_path = Path(__file__).parent / "index.html"
    return html_path.read_text(encoding="utf-8")

@app.post("/chat")
async def chat_endpoint(request: Request):
    data = await request.json()
    user_input = data.get("message", "")
    result = chat_service(user_input)
    return JSONResponse(content=result)

# Streaming endpoint
@app.post("/chat/stream")
async def chat_stream_endpoint(request: ChatRequest):
    return StreamingResponse(
        chat_service_streaming(request.message),
        media_type="text/event-stream"
    )

if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

