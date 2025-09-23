import os
from dotenv import load_dotenv

load_dotenv()

API_URL = os.getenv("API_URL", "https://openrouter.ai/api/v1/chat/completions")
MODEL_NAME = os.getenv("MODEL_NAME", "deepseek/deepseek-chat")

MEMORY_TYPE = os.getenv("MEMORY_TYPE", "window")   # "buffer" = nhớ tất cả, "window" = chỉ nhớ N gần nhất
MEMORY_WINDOW = int(os.getenv("MEMORY_WINDOW", "5"))  # Số lượt hội thoại nhớ nếu MEMORY_TYPE = "window"
BASE_URL = os.getenv("BASE_URL", "https://openrouter.ai/api/v1")

# LLM Configuration
TEMPERATURE = float(os.getenv("TEMPERATURE", "0.7"))
MAX_TOKENS = int(os.getenv("MAX_TOKENS", "512"))

