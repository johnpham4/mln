from langchain_openai import ChatOpenAI
from langchain.memory import ConversationBufferWindowMemory, ConversationBufferMemory
from langchain.chains import ConversationChain
import config

def get_memory():
    """Chọn loại memory theo config"""
    if config.MEMORY_TYPE == "window":
        return ConversationBufferWindowMemory(
            k=config.MEMORY_WINDOW,
            return_messages=True
        )
    else:
        return ConversationBufferMemory(
            return_messages=True
        )

memory = get_memory()

def get_llm(callbacks=None):
    """Tạo LLM từ config"""
    return ChatOpenAI(
        model=config.MODEL_NAME,
        api_key=config.API_KEY,
        base_url=config.BASE_URL,
        streaming=True,
        callbacks=callbacks,
        temperature=getattr(config, "TEMPERATURE", 0.7),
        max_tokens=getattr(config, "MAX_TOKENS", 512),
    )

def get_conversation(callbacks=None):
    """ConversationChain với memory"""
    llm = get_llm(callbacks)
    return ConversationChain(
        llm=llm,
        memory=memory,
        verbose=True
    )

system_prompt = (
    "Bạn là 'Trợ lý triết học' chuyên về Chủ nghĩa duy vật lịch sử (Chương 3: "
    "Hình thái kinh tế-xã hội — biện chứng giữa cơ sở hạ tầng và kiến trúc thượng tầng). "
    "QUY TẮC: "
    "1) Nếu câu hỏi liên quan Chương 3 -> trả lời ngắn gọn, chính xác. "
    "2) Nếu câu hỏi là greeting / small talk -> trả lời thân thiện. "
    "3) Nếu không liên quan -> trả 'Tôi chỉ chuyên về Chương 3.' "
    "4) Nếu không chắc -> trả 'Không chắc.'"
)
