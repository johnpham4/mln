import json
import requests
import config_simple as config

def chat_service(user_input: str):
    """Xử lý input từ user và trả về câu trả lời"""
    try:
        headers = {
            "Authorization": f"Bearer {config.API_KEY}",
            "Content-Type": "application/json"
        }

        data = {
            "model": config.MODEL_NAME,
            "messages": [
                {"role": "system", "content": config.SYSTEM_PROMPT},
                {"role": "user", "content": user_input}
            ],
            "temperature": config.TEMPERATURE,
            "max_tokens": config.MAX_TOKENS
        }

        response = requests.post(config.API_URL, headers=headers, json=data)
        response_data = response.json()

        if response.status_code == 200:
            return {"response": response_data["choices"][0]["message"]["content"]}
        else:
            return {"error": f"API Error: {response_data.get('error', 'Unknown error')}"}

    except Exception as e:
        return {"error": str(e)}

def chat_service_streaming(user_input: str):
    """Streaming response"""
    try:
        headers = {
            "Authorization": f"Bearer {config.API_KEY}",
            "Content-Type": "application/json"
        }

        data = {
            "model": config.MODEL_NAME,
            "messages": [
                {"role": "system", "content": config.SYSTEM_PROMPT},
                {"role": "user", "content": user_input}
            ],
            "temperature": config.TEMPERATURE,
            "max_tokens": config.MAX_TOKENS,
            "stream": True
        }

        response = requests.post(config.API_URL, headers=headers, json=data, stream=True)

        for line in response.iter_lines():
            if line:
                line_str = line.decode('utf-8')
                if line_str.startswith('data: '):
                    data_str = line_str[6:]
                    if data_str.strip() == '[DONE]':
                        break
                    try:
                        data_json = json.loads(data_str)
                        if 'choices' in data_json and len(data_json['choices']) > 0:
                            delta = data_json['choices'][0].get('delta', {})
                            if 'content' in delta:
                                print(delta)
                                yield f"data: {json.dumps({'content': delta['content']})}\n\n"
                    except json.JSONDecodeError:
                        continue

    except Exception as e:
        yield f"data: {json.dumps({'error': str(e)})}\n\n"