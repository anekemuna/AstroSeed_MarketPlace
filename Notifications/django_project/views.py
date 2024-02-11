# views.py
from django.shortcuts import render


def show_notifications(request):
  # Example data
  notifications = [
      {
          'type': 'message',
          'title': 'John Doe messaged you',
          'message': 'Lorem ipsum...'
      },
      {
          'type': 'order',
          'title': 'Your Order Is Ready!',
          'message': 'Lorem ipsum...'
      },
      # Add more notifications as needed
  ]

  return render(request, "notifications.html",
                {'notifications': notifications})
