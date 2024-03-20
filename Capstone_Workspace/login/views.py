# login/views.py
from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from datetime import datetime
from django.contrib.auth import authenticate, login as auth_login

#after login the user gets to choose to be either buyer or seller
def role_selection(request):
    return render(request, 'login/role_selection.html')
    

#This checks if the user credentials are valid
def login_view(request):
    if request.method == "POST":
        login = request.POST.get('login')  # The form input name, no conflict here
        password = request.POST.get('password')
        
        user = authenticate(request, username=login, password=password)  # Your custom backend should handle this
        if user is not None:
            auth_login(request, user)  # use the renamed import here
            return redirect('role_selection')
        else:
            return render(request, 'login/login.html', {'error_message': 'Invalid login'})
    else:
        return render(request, 'login/login.html')

#this function helps a user create an account and store in the db.sqlite3 file
def signup_view(request):
    if request.method == 'POST':
        # Get the form data
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')

        # Check if the username or email already exists
        if User.objects.filter(username=username).exists():
            return render(request, 'login/signup.html', {'error_message': 'Username already taken.'})
        if User.objects.filter(email=email).exists():
            return render(request, 'login/signup.html', {'error_message': 'Email already taken.'})

        # Create the user and set additional fields
        user = User.objects.create_user(username, email, password)
        user.first_name = first_name
        user.last_name = last_name
        user.save()

        user.backend = 'django.contrib.auth.backends.ModelBackend'
        # Log the user in and redirect them
        login(request, user)
        return redirect('role_selection')
    else:
        # If it's a GET request, just show the signup form
        return render(request, 'login/signup.html')