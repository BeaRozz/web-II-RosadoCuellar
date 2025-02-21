from django.urls import path

from . import views

urlpatterns = [
    path("", views.userIndex, name="userIndex"),
    path("create", views.createUserView, name="createUserView"),
    path("createUser", views.createUser, name="createUser"),
    path("createUser-by-fetch", views.createUserByFetch, name="createUserByFetch"),
    path("details/<int:id>", views.userDetail, name="UserDetail"),
    path("update/<int:id>", views.updateUserView, name="updateUserView"),
    path('update_user/<int:id>/', views.updateUser, name='update_user')
]