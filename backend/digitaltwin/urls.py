from django.urls import path
from .views import chat_from_pdf

urlpatterns = [
    path('chat/', chat_from_pdf, name='chat'),
]
