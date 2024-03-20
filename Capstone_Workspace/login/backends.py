from django.contrib.auth.models import User
from django.contrib.auth.backends import ModelBackend
from django.db.models import Q

class EmailOrUsernameModelBackend(ModelBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        users = User.objects.filter(
            Q(username__iexact=username) | Q(email__iexact=username) | Q(first_name__iexact=username)
        )
        for user in users:
            if user.check_password(password):
                return user
        return None
