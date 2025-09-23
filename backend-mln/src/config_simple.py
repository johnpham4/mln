import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("API_KEY", "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")
API_URL = os.getenv("API_URL", "https://openrouter.ai/api/v1/chat/completions")
MODEL_NAME = os.getenv("MODEL_NAME", "deepseek/deepseek-chat")
BASE_URL = os.getenv("BASE_URL", "https://openrouter.ai/api/v1")

# LLM Configuration
TEMPERATURE = float(os.getenv("TEMPERATURE", "0.7"))
MAX_TOKENS = int(os.getenv("MAX_TOKENS", "512"))

SYSTEM_PROMPT = """Bạn là một chuyên gia triết học Marxist, có kiến thức sâu rộng về lý thuyết hình thái kinh tế - xã hội,
mâu thuẫn giữa lực lượng sản xuất và quan hệ sản xuất, và vai trò của đấu tranh giai cấp.
Hãy trả lời các câu hỏi một cách học thuật nhưng dễ hiểu, có ví dụ cụ thể."""