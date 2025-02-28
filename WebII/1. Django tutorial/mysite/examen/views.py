from django.shortcuts import render
from django.http import HttpResponse
from .models import Localidad, Producto, Evento, Boleto

def eventos(request):
    eventos = Evento.objects.all()
    eventos_localidades = []
    for evento in eventos:
        eventos_localidades.append({
            'evento': evento,
            'localidad': evento.localidad_id 
        })
    return render(request, "examen/eventos.html", {'eventos_localidades': eventos_localidades})

def boletos(request):
    boletos = Boleto.objects.all()
    boleto_completo = []
    for boleto in boletos:
        boleto_completo.append({
            'boleto': boleto,
            'evento': boleto.evento_id,
            'localidad': boleto.evento_id.localidad_id
        })
    return render(request, "examen/boletos.html", {'boleto_completo': boleto_completo})

def productos(request):
    return HttpResponse("Los productos")