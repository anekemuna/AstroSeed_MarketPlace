# urls.py
from django.urls import path
from django_project import views

urlpatterns = [
    path('notifications/', views.show_notifications,
         name='show_notifications'),
]
