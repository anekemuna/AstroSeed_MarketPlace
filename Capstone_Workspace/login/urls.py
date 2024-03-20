# login/urls.py

from django.urls import path
from . import views
#from django.contrib.auth import views as auth_views

urlpatterns = [
    #path('login', views.role_selection, name='role_selection'),
    path('', views.login_view, name='login_view'),
    path('selection/', views.role_selection, name='role_selection'),
    path('signup/', views.signup_view, name='create_user'),
]
