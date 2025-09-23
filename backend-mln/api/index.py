import sys
import os

# Add src directory to path
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'src'))

try:
    from main import app
except ImportError as e:
    print(f"Import error: {e}")
    # Fallback minimal app
    from fastapi import FastAPI
    app = FastAPI()

    @app.get("/")
    def read_root():
        return {"message": "Backend API is running"}

# Export for Vercel
handler = app