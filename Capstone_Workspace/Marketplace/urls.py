# Marketplace/urls.py

from django.urls import include, path

from . import views

urlpatterns = [
    
    #buyer homepage
    path('homepage/', views.product_page, name='buyer_home_page'),
    
    #seller homepage
    path('seller/', views.seller_page, name='seller_home_page'),
]
