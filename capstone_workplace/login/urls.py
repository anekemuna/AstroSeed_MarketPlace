# login/urls.py

from django.urls import path
from . import views
#from django.contrib.auth import views as auth_views

urlpatterns = [
    #path('login', views.role_selection, name='role_selection'),
    path('', views.role_selection, name='role_selection'),
]
