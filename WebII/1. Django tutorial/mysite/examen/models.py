from django.db import models
from django.utils import timezone

class Localidad(models.Model):
    name = models.CharField(max_length=100, default="Lirio, mi perro igual")
    estatus = models.BooleanField(default=True)


class Producto(models.Model):
    name = models.CharField(max_length=200, default='Nutella, mi perro')
    precio = models.FloatField(default=0.0)
    localidad_id = models.ForeignKey(Localidad, on_delete=models.CASCADE, default=1)
    create_at = models.DateTimeField(default=timezone.now)


class Evento(models.Model):
    name = models.CharField(max_length=300, default="Morita, mi perrita")
    fecha_inicio = models.DateTimeField(default=timezone.now)
    fecha_fin = models.DateTimeField(default=timezone.now)
    localidad_id = models.ForeignKey(Localidad, on_delete=models.CASCADE, default=1)


class Boleto(models.Model):
    precio = models.FloatField(default=0.0)
    tipo_boleto_id = models.IntegerField(default=1)
    evento_id = models.ForeignKey(Evento, on_delete=models.CASCADE, default=1)
    fecha = models.DateTimeField(default=timezone.now)