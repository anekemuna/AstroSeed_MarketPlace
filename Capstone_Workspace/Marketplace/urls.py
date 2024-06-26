# Marketplace/urls.py

from django.urls import include, path
from . import views

from .views import product_page, add_product


urlpatterns = [
    
    #buyer homepage
    path('homepage/', views.product_page, name='buyer_home_page'),
    
    #seller homepage
    path('seller/', views.seller_page, name='seller_home_page'),
    
    #cart / checkout
    path('cart/', views.cartPayment_page, name='cart'),  # Define URL pattern for the cart
    
    #orders
    path('orders/', views.orders_page, name ='orders'),
    
    #notifications
    path('notifications/', views.notifications_page, name='notifications'),
    
    #Analytics
    path('analytics/', views.analytics_page, name = 'analytics'),
    
    #customer list
    path('customerlist/', views.customerlist_page, name = 'customerlist'),
    
    #reviews buyers page
    path('reviews/', views.reviews_page, name = 'reviews'),
    
    #OrderMangement
    path('OrderManagement/', views.ordermanagement_page, name = 'ordermanagementPage'),

    #support page for sellers
    path('support/', views.support_page, name = 'support'),


    #Alfaisal
    path('add_product/', views.add_product, name='add_product'),
]

