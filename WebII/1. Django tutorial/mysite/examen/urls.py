from django.urls import path

from . import views

urlpatterns = [
    path("eventos/", views.eventos, name="eventos"),
    path("boletos/", views.boletos, name="boletos"),
    path("productos/", views.productos, name="productos")
]