from llm_chain import get_conversation, system_prompt
from langchain.callbacks.base import BaseCallbackHandler
import json, queue
import threading

conversation = get_conversation()
conversation.memory.chat_memory.add_ai_message(system_prompt)

def chat_service(user_input: str):
    """Xử lý input từ user và trả về câu trả lời"""
    try:
        response = conversation.predict(input=user_input)
        return {"response": response}
    except Exception as e:
        return {"error": str(e)}

def chat_service_streaming(user_input: str):
    q = queue.Queue()

    class StreamCallback(BaseCallbackHandler):
        def on_llm_new_token(self, token: str, **kwargs):
            q.put(json.dumps({"token": token}, ensure_ascii=False))

    def run_chain():
        try:
            streaming_conversation = get_conversation(callbacks=[StreamCallback()])
            result = streaming_conversation.predict(input=user_input)
            q.put(json.dumps({"final": result}, ensure_ascii=False))
        except Exception as e:
            q.put(json.dumps({"final": f"Error: {e}"}, ensure_ascii=False))
        finally:
            q.put(None) 

    # chạy LLM trong thread riêng
    threading.Thread(target=run_chain, daemon=True).start()

    def event_generator():
        while True:
            item = q.get()
            if item is None:
                break
            yield f"data: {item}\n\n"
    return event_generator()