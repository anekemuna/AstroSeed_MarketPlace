# ProductsHomePage/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('homepage/', views.product_page, name='products_homepage'),
]
