from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse
from .models import Localidad, Producto, Evento, Boleto
from django.utils import timezone
from django.http import JsonResponse
import json

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

def boletos_evento(request, id):
    
    evento = get_object_or_404(Evento, id=id)
    boletos = Boleto.objects.filter(evento_id=id)

    boleto_completo = []
    
    for boleto in boletos:
        boleto_completo.append({
            'boleto': boleto,
            'evento': evento,
            'localidad': evento.localidad_id
        })
        
    return render(request, "examen/boletos.html", {'boleto_completo': boleto_completo})

def productos(request):
    productos = Producto.objects.all()
    producto_completo = []
    for producto in productos:
        producto_completo.append({
            'producto': producto,
            'localidad': producto.localidad_id
        })

    return render(request, "examen/productos.html", {'producto_completo': producto_completo})

def create_evento(request):
    localidades = Localidad.objects.all()
    eventos_recientes = Evento.objects.all().order_by('-id')[:3]

    eventos_localidades = []
    for evento in eventos_recientes:
        eventos_localidades.append({
            'evento': evento,
            'localidad': evento.localidad_id 
        })

    data = {
        'localidades': localidades,
        'eventos_recientes': eventos_localidades
    }

    return render(request, "create/evento.html", data)

def create_producto(request):
    localidades = Localidad.objects.all()
    hoy = timezone.now().date()
    productos_recientes = Producto.objects.filter(create_at__date=hoy)

    producto_localidades = []
    for producto in productos_recientes:
        producto_localidades.append({
            'producto': producto,
            'localidad': producto.localidad_id 
        })

    data = {
        'localidades': localidades,
        'productos_recientes': producto_localidades,
        '10_o_mas': productos_recientes.count() >= 10
    }

    return render(request, "create/producto.html", data)

def createEventoByFetch(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    data = {}

    if request.method == "POST":
        try:
            name = body.get("name")
            fecha_inicio = body.get("fecha-inicio")
            fecha_fin = body.get("fecha-fin")
            localidad_nombre = body.get("localidad")
            localidad = Localidad.objects.filter(name__iexact=localidad_nombre).first()

            evento = Evento(name=name, fecha_inicio=fecha_inicio, fecha_fin=fecha_fin, localidad_id=localidad)
            evento.save()
            data["evento"] = evento.id
            data["message"] = "Evento creado"
            data["status"] = "success"

        except Exception as e:
            data["message"] = str(e)
            data["status"] = "error"

    return JsonResponse(data)

def deleteEventoByFetch(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    data = {}

    if request.method == "DELETE":
        try:
            evento_id = body.get("id")
            evento = Evento.objects.filter(id=evento_id).first() 
            evento.delete()

            data["message"] = "Evento eliminado"
            data["status"] = "success"

        except Exception as e:
            data["message"] = str(e)
            data["status"] = "error"

    return JsonResponse(data)

def deleteProductByFetch(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    data = {}

    if request.method == "DELETE":
        try:
            producto_id = body.get("id")
            producto = Producto.objects.filter(id=producto_id).first() 
            producto.delete()

            data["message"] = "Producto eliminado"
            data["status"] = "success"

        except Exception as e:
            data["message"] = str(e)
            data["status"] = "error"

    return JsonResponse(data)

def createProductoByFetch(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    data = {}

    if request.method == "POST":
        try:
            name = body.get("name")
            precio = body.get("precio")
            localidad_nombre = body.get("localidad")
            localidad = Localidad.objects.filter(name__iexact=localidad_nombre).first()

            producto = Producto(name=name, precio=precio, localidad_id=localidad)
            producto.save()
            data["evento"] = producto.id
            data["message"] = "Producto creado"
            data["status"] = "success"

        except Exception as e:
            data["message"] = str(e)
            data["status"] = "error"

    return JsonResponse(data)