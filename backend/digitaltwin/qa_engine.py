# qa_engine.py
from dotenv import load_dotenv
import os

# 加载 .env 文件中定义的环境变量
load_dotenv()

# 这一步不是必须的，LangChain 会自动读取 HUGGINGFACEHUB_API_TOKEN 环境变量
huggingface_token = os.getenv("HUGGINGFACEHUB_API_TOKEN")

from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.llms import HuggingFaceHub
from langchain.chains import RetrievalQA
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_community.vectorstores import Chroma
from langchain_community.document_loaders import PyPDFLoader



import openai
import os


## LLM
def get_llm():
     return HuggingFaceHub(
        repo_id="deepseek-ai/deepseek-coder-6.7b-instruct",
        model_kwargs={"temperature": 0.7, "max_new_tokens": 512}
    )

## Document loader
def document_loader(file_path):
    loader = PyPDFLoader(file_path)
    loaded_docs = loader.load()
    return loaded_docs

## Text splitter
def text_splitter(data):
    splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=50,length_function=len)
    # Split the documents into chunks
    chunks = splitter.split_documents(data)
    return chunks

## Vector db
def get_vectorstore(chunks):
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
    vectordb = Chroma.from_documents(chunks, embedding=embeddings)
    return vectordb

def retriever_qa(file_path, query):
    docs = document_loader(file_path)
    chunks = text_splitter(docs)
    vectordb = get_vectorstore(chunks)
    retriever = vectordb.as_retriever()
    related_docs = retriever.invoke(query)
    
    context = "\n\n".join([doc.page_content for doc in related_docs])

    prompt = f"""You are Wen's Digital Twin.

Speak in Wen's voice, using first-person language ("I", "my", "me"). When someone asks a question about Wen’s background, experience, or perspective, respond as if you are Wen herself — thoughtful, friendly, and confident. Base your answers on the uploaded resume and any context provided. Be concise but informative, and feel free to add personal touches or reflections when appropriate.

Avoid saying things like “Wen has…” or “Wen is…” — instead, say “I have…” or “I am…”. You are not an assistant or narrator. You are Wen’s intelligent digital representative.

If you're not sure how to respond, say so in a natural way, or suggest how the user can clarify their question.
Use the following context to answer the question.\n\nContext:\n{context}\n\nQuestion: {query}\nAnswer:"""

    return prompt

