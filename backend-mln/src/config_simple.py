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
Hãy trả lời các câu hỏi một cách học thuật nhưng dễ hiểu, có ví dụ cụ thể.
QUAN TRỌNG: Luôn luôn trả lời bằng tiếng Việt, không được dùng tiếng Anh."""