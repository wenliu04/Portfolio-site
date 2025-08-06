# views.py
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .qa_engine import retriever_qa
from huggingface_hub import InferenceClient
from .local_llm import generate_with_local_model
import os



def generate_with_deepseek(prompt: str) -> str:
    from dotenv import load_dotenv
    load_dotenv()

    client = InferenceClient(
        model="tiiuae/falcon-7b-instruct",
        token=os.getenv("HUGGINGFACEHUB_API_TOKEN")
    )

    response = client.text_generation(
        prompt=prompt,
        max_new_tokens=300,
        temperature=0.7,
        stop_sequences=["</s>"]
    )

    return response.strip()

@api_view(["POST"])
def chat_from_pdf(request):
    query = request.data.get("query")
    file = request.FILES.get("file")

    if not file or not query:
        return Response({"error": "Missing file or query"}, status=400)

    file_path = f"/tmp/{file.name}"
    with open(file_path, "wb+") as dest:
        for chunk in file.chunks():
            dest.write(chunk)

    try:
       
        prompt = retriever_qa(file_path, query)
        result = generate_with_local_model(prompt)
        return Response({"response": result})
    except Exception as e:
        import traceback
        return Response({"error": traceback.format_exc()}, status=500)
