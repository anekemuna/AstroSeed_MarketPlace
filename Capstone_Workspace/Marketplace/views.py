from django.shortcuts import render


# buyer home page
def product_page(request):
    return render(request, 'Marketplace/homepage.html')

# seller home page
def seller_page(request):
    return render(request, 'Marketplace/SellerHomepage.html')