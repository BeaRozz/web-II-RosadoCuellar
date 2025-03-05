from django.urls import path

from . import views

urlpatterns = [
    path("eventos/", views.eventos, name="eventos"),
    path("boletos/", views.boletos, name="boletos"),
    path("productos/", views.productos, name="productos"),
    path("boletos/<int:id>", views.boletos_evento, name="boletos_evento"),
    path("create-evento/", views.create_evento, name="create_evento"),
    path("create-producto/", views.create_producto, name="create_producto"),
    path("createEvento/", views.createEventoByFetch, name="createEventoByFetch"),
    path("deleteEvento/", views.deleteEventoByFetch, name="deleteEventoByFetch"),
    path("deleteProducto/", views.deleteProductByFetch, name="deleteProductByFetch"),
    path("createProducto/", views.createProductoByFetch, name="createProductoByFetch")
]