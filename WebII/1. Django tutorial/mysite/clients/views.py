from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import User
from django.utils import timezone
from django.http import JsonResponse
import json


def userIndex(request):
    data = {
        "titulo": "Lista de clientes",
        "users": User.objects.all()
    }
    
    return render(request, 'clients/index.html', data)

def createUserView(request):
    return render(request, "clients/create.html")

def createUser(request):
    data = {}
    try:
        if request.method == "POST":
            name = request.POST.get("name")
            email = request.POST.get("email")
            age = request.POST.get("age")
            rfc = request.POST.get("rfc")
            photo = request.POST.get("photo")
            created_date = timezone.now()
            updated_date = timezone.now()

            user = User(name=name, email=email, age=age, rfc=rfc, photo=photo, created_date=created_date, updated_date=updated_date)
            user.save()
            data["user"] = user
            data["message"] = "User created"
            data["status"] = "success"
    except Exception as e:
        data["message"] = str(e)
        data["status"] = "error"
    
    return render(request, "clients/create.html", data)

def createUserByFetch(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    return JsonResponse({
        "NOMBRE_RECIBIDO": body.get("name")
    })

def userDetail(request, id):
    user = get_object_or_404(User, id=id)
    # user = User.objects.get(id=id) marca error feo y todo, el de arriba tiene coomo un trycatch
    return render(request, "clients/detail.html", {"user": user})