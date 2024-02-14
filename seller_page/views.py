from django.shortcuts import render

# Create your views here.
def sellerPage(request):
    return render(request, 'seller_page/sellerHome.html')
