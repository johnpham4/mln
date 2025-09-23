from dto import ChatRequest
import requests, json
from clean_text import clean_and_format, smart_format_text

API_KEY = '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'
API_URL = "https://openrouter.ai/api/v1/chat/completions"
MODEL_NAME = "deepseek/deepseek-chat"

system_prompt = (
    "Bạn là 'Trợ lý triết học' chuyên về Chủ nghĩa duy vật lịch sử (Chương 3: Hình thái kinh tế-xã hội — "
    "biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng). "
    "QUY TẮC: "
    "1) Nếu câu hỏi liên quan Chương 3 -> trả lời ngắn gọn, chính xác. "
    "2) Nếu câu hỏi là greeting / small talk -> trả lời thân thiện. "
    "3) Nếu không liên quan -> trả 'Tôi chỉ chuyên về Chương 3.' "
    "4) Nếu không chắc -> trả 'Không chắc.'"
)

greetings = ["hi", "hello", "chào", "chào bạn", "xin chào"]

def chat_service(request: ChatRequest):
    msg = request.message.strip().lower()
    if msg in greetings:
        return {"answer": "Xin chào! Tôi là trợ lý AI chuyên về Chủ nghĩa duy vật lịch sử. Bạn có câu hỏi gì về Chương 3 không?"}

    payload = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": request.message},
        ],
        "temperature": 0.7,
        "max_tokens": 500,
    }
    headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}
    resp = requests.post(API_URL, headers=headers, json=payload)
    data = resp.json()
    raw_answer = data["choices"][0]["message"]["content"]
    return {"answer": clean_and_format(raw_answer)}

def chat_service_streaming(request: ChatRequest):
    msg = request.message.strip().lower()
    if msg in greetings:
        greeting_msg = "Xin chào! Tôi là trợ lý AI chuyên về Chủ nghĩa duy vật lịch sử."
        yield f"data: {json.dumps({'token': greeting_msg}, ensure_ascii=False)}\n\n"
        yield f"data: {json.dumps({'final': greeting_msg}, ensure_ascii=False)}\n\n"
        return

    buffer = ""
    payload = {
        "model": MODEL_NAME,
        "messages": [
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": request.message},
        ],
        "temperature": 0.7,
        "max_tokens": 500,
        "stream": True
    }
    headers = {"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"}

    try:
        with requests.post(API_URL, headers=headers, json=payload, stream=True) as r:
            for line in r.iter_lines():
                if not line:
                    continue
                line = line.decode('utf-8')
                if not line.startswith("data: "):
                    continue

                data = line[len("data: "):].strip()
                if data == "[DONE]":
                    final_text = smart_format_text(buffer)
                    yield f"data: {json.dumps({'final': final_text}, ensure_ascii=False)}\n\n"
                    break

                try:
                    chunk = json.loads(data)
                    delta = chunk["choices"][0]["delta"].get("content", "")
                    if delta:
                        buffer += delta
                        yield f"data: {json.dumps({'token': delta}, ensure_ascii=False)}\n\n"
                except Exception as e:
                    print("Chunk parse error:", e)
                    continue
    except Exception as e:
        yield f"data: {json.dumps({'final': f'Error: {e}'}, ensure_ascii=False)}\n\n"
