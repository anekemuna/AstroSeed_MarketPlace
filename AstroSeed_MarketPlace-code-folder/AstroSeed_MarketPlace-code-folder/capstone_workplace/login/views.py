# login/views.py

from django.shortcuts import render

def role_selection(request):
    return render(request, 'login/role_selection.html')