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