# seller_page/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.sellerPage),
    #name='seller_homepage'
]
