from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse, JSONResponse, HTMLResponse
from fastapi.middleware.cors import CORSMiddleware
from service_simple import chat_service, chat_service_streaming  # sử dụng service đơn giản
from dto import ChatRequest
import uvicorn
from pathlib import Path

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://*.vercel.app",  # Allow Vercel domains
        "*"  # For development - remove in production
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve index.html
@app.get("/", response_class=HTMLResponse)
def serve_index():
    try:
        html_path = Path(__file__).parent / "index.html"
        if html_path.exists():
            return html_path.read_text(encoding="utf-8")
        else:
            return HTMLResponse(content="<h1>MLN Backend API</h1><p>API is running successfully!</p>")
    except Exception as e:
        return HTMLResponse(content=f"<h1>MLN Backend API</h1><p>API is running! Error: {str(e)}</p>")

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

