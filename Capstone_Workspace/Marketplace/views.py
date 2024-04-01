from django.shortcuts import render

# buyer home page
def product_page(request):
    return render(request, 'Marketplace/homepage.html')

# seller home page
def seller_page(request):
    return render(request, 'Marketplace/SellerHomepage.html')

#cart/checkout page
def cartPayment_page(request):
    return render(request, 'Marketplace/Cart_Payment.html')

def orders_page(request):
    return render(request, 'Marketplace/Orders.html')

def notifications_page(request):
    return render(request, 'Marketplace/Notifications.html')

def analytics_page(request):
    return render(request, 'Marketplace/AnalyticsDashboard.html')

def customerlist_page(request):
    return render(request, 'Marketplace/CustomerList.html')

def ordermanagement_page(request):
    return render(request, 'Marketplace/OrderManagement.html')

def reviews_page(request):
    return render(request, 'Marketplace/Reviews.html')

def support_page(request):
    return render(request, 'Marketplace/support.html')
    