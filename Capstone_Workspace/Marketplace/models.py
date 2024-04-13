from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    type = models.CharField(max_length=255)
    quantity = models.IntegerField()
    description = models.TextField()
    image = models.ImageField(upload_to='media/')  # Make sure to set up MEDIA_URL and MEDIA_ROOT

    def __str__(self):
        return self.name
