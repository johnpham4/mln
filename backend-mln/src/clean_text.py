import re

def clean_text(text: str) -> str:
    if not text:
        return ""
    
    text = re.sub(r"<\|.*?\|>", "", text)
    text = re.sub(r"</?s>", "", text)
    text = re.sub(r"\*+", "", text)
    text = text.replace("▁", " ")
    text = text.replace("\\n", "\n")
    text = re.sub(r"\s+", " ", text)
    return text.strip()


def format_text(text: str) -> str:
    if not text:
        return ""
    
    text = re.sub(r"\s*(\d+)\.\s*", r"\n\1. ", text)
    text = re.sub(r"\.\s+", ".\n", text)
    text = re.sub(r"\n+", "\n", text)
    return text.strip()


def clean_and_format(text: str) -> str:
    """Kết hợp clean và format"""
    cleaned = clean_text(text)
    formatted = format_text(cleaned)
    return formatted

def smart_format_text(text: str) -> str:
    if not text:
        return ""
    
    text = clean_text(text)

    text = re.sub(r"(\d+)\.\s", r"\n\1. ", text)
    text = re.sub(r"\s-\s", r"\n- ", text)
    
    sentences = re.split(r'(?<=[.])\s+', text)
    formatted = ""
    for s in sentences:
        s = s.strip()
        if not s:
            continue
        while len(s) > 60:
            idx = s.rfind(" ", 0, 60)
            if idx == -1:
                idx = 60
            formatted += s[:idx].strip() + "\n"
            s = s[idx:].strip()
        formatted += s + "\n"
    
    return formatted.strip()
