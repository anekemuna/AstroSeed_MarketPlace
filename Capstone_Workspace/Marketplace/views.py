from django.shortcuts import render, redirect

#Alfaisal add
from django.urls import reverse
from .models import Product
from django.contrib import messages

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
    



#Alfaisal add
def add_product(request):
    if request.method == 'POST':
        # Get form values from the request
        name = request.POST['name']
        price = request.POST['price']
        product_type = request.POST['type']
        quantity = request.POST['quantity']
        description = request.POST['description']
        image = request.FILES.get('image')  # Assuming you have an image field in your Product model

        # Create and save the new product
        product = Product.objects.create(
            name=name,
            price=price,
            type=product_type,
            quantity=quantity,
            description=description,
            image=image  # Save the image
        )

        messages.success(request, "Product added successfully!")  # Add a success message

        # Redirect to the buyer view page
        return redirect(reverse('buyer_home_page'))  # Replace 'buyer_view_page' with the name of your buyer view URL
    else:
        # Handle the case where the form is not submitted via POST
        return render(request, 'seller_home_page')
