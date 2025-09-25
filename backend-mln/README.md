# FastAPI Backend for MLN

Backend API cho ứng dụng học triết học Marxist với tính năng chat streaming.

## Cấu trúc project

```
backend-mln/
├── src/
│   ├── main.py          # FastAPI app chính
│   ├── config.py        # Cấu hình API keys
│   ├── llm_chain.py     # Logic LLM
│   ├── service_logic.py # Business logic
│   └── dto.py           # Data Transfer Objects
├── api/
│   └── index.py         # Entry point cho Vercel
├── requirements.txt     # Dependencies
├── vercel.json         # Cấu hình Vercel
└── .env.example        # Template environment variables
```

## Cách deploy lên Vercel

### 1. Chuẩn bị repository
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### 2. Deploy lên Vercel
1. Truy cập [vercel.com](https://vercel.com)
2. Login và chọn "New Project"
3. Import repository từ GitHub
4. Chọn thư mục `backend-mln` làm root directory
5. Thêm environment variables:
   - `API_KEY`: OpenRouter API key
   - `MODEL_NAME`: Model name (ví dụ: `deepseek/deepseek-chat`)
   - `BASE_URL`: `https://openrouter.ai/api/v1`

### 3. Environment Variables cần thiết
```
API_KEY=your_openrouter_api_key
MODEL_NAME=deepseek/deepseek-chat
BASE_URL=https://openrouter.ai/api/v1
MEMORY_TYPE=window
MEMORY_WINDOW=5
TEMPERATURE=0.7
MAX_TOKENS=512
```

## Endpoints

- `GET /`: Trang chủ HTML
- `POST /chat`: Chat không streaming
- `POST /chat/stream`: Chat với streaming

## Local Development

```bash
# Cài đặt dependencies
pip install -r requirements.txt

# Chạy server
python src/main.py
```

Server sẽ chạy tại `http://localhost:8000`

cd d:\mln\backend-mln && curl -X POST -H "Content-Type: application/json" -d "@test.json" "https://backend5-five.vercel.app/api/chat/stream"