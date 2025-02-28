from django.contrib import admin

from .models import Localidad, Producto, Evento, Boleto

admin.site.register(Localidad)
admin.site.register(Producto)
admin.site.register(Evento)
admin.site.register(Boleto)