# local_llm.py
from llama_cpp import Llama

# 模型路径，指向 GGUF 文件
MODEL_PATH = "/Users/wenliu/.lmstudio/models/lmstudio-community/DeepSeek-R1-Distill-Qwen-32B-GGUF/DeepSeek-R1-Distill-Qwen-32B-Q4_K_M.gguf"

# 初始化模型（建议设置 n_ctx 足够大以处理长 prompt）
llm = Llama(model_path=MODEL_PATH, n_ctx=2048)

def generate_with_local_model(prompt: str) -> str:
    output = llm(prompt, max_tokens=300, stop=["</s>"])
    text = output["choices"][0]["text"].strip()
    
    # 清洗：遇到 </think> 时直接截断
    if "</think>" in text:
        text = text.split("</think>")[0].strip()
    
    return text

