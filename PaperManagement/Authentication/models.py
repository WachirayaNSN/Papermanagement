from django.db import models
from django.contrib.auth.models import User , Group

# Create your models here.


# ----------------- Model User ----------------------------------
# --- Database  : Done
# --- Merhod    : XXXX
class Department (models.Model):
    department_name = models.CharField(max_length=50)


class Faculty (models.Model):
    faculty_name = models.CharField(max_length=50)


class Level_study (models.Model):
    level_name = models.CharField(max_length=50)

class OfficerPosition (models.Model):
    position_name = models.CharField(max_length=50)


class User_Profile (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,primary_key=True) 
    user_pin = models.CharField(max_length=128, null=True, blank=True)
    user_tel = models.CharField(max_length=10, null=True, blank=True)
    user_Department = models.ForeignKey(Department,on_delete=models.CASCADE, null=True, blank=True)
    user_stID = models.CharField(max_length=15, null=True, blank=True)
    user_stYear = models.IntegerField(null=True, blank=True)
    user_stFaculty = models.ForeignKey(Faculty,on_delete=models.CASCADE, null=True, blank=True)
    user_stLevel = models.ForeignKey(Level_study,on_delete=models.CASCADE, null=True, blank=True)
    user_stYear = models.IntegerField(null=True, blank=True)
    user_officerPosition = models.ForeignKey(OfficerPosition,on_delete=models.CASCADE, null=True, blank=True)
    user_role = models.ForeignKey(Group,on_delete=models.CASCADE)

#----------------------------------------------------------------------

# Form Models
class Place (models.Model):
    place_name = models.CharField(max_length=30)
    remind = models.TextField(null=True, blank=True)


#class FormType (models.Model):
#    form_typeName = models.CharField(max_length=128)
    

class Bookplace_form (models.Model):
#   form_type = models.ForeignKey(FormType,on_delete=models.CASCADE)
    requestor = models.ForeignKey(User,on_delete=models.CASCADE, related_name='student')
    advisor = models.ForeignKey(User,on_delete=models.CASCADE, related_name='teacher')
    request_tel = models.CharField(max_length=10, null=True, blank=True)
    place = models.ForeignKey(Place,on_delete=models.CASCADE)
    detail = models.TextField()
    book_datetime_being =models.CharField(max_length=10, null=True, blank=True)
    book_datetime_end =models.CharField(max_length=10, null=True, blank=True)
