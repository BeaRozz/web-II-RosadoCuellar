from django.shortcuts import render
from django.http import HttpResponse
from examen.models import Evento, Localidad

#def index(request):
#    return render(request, "main/inex.html")

def index(request):
    eventos = Evento.objects.all()[:3]
    eventos_localidades = []
    for evento in eventos:
        eventos_localidades.append({
            'evento': evento,
            'localidad': evento.localidad_id 
        })

    return render(request, "main/index.html", {'eventos_localidades': eventos_localidades})