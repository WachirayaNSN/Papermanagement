from django.db import models
from django.contrib.auth.models import User
#from django.contrib.auth.models import AbstractBaseUser
# Create your models here.
class User_Profile (models.Model):
    
    #user_password = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    user_tel = models.CharField(max_length=30)
    #new_field = models.CharField(max_length=140, default='SOME STRING')
    #user_emal =models.CharField(max_length=255)

    #def access_web (self):


