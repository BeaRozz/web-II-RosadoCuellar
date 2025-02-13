from django.shortcuts import render
from django.http import HttpResponse
from .models import User


def userIndex(request):
    data = {
        "titulo": "Lista de clientes",
        "users": User.objects.all()
    }
    
    return render(request, 'clients/index.html', data)

# Create your views here.
