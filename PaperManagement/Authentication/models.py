from django.db import models
from django.contrib.auth.models import User

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

#>>>> Permission
class Roles (models.Model):
    role_name = models.CharField(max_length=30)



class Action (models.Model):
    action_name = models.CharField(max_length=50)

    

class Permission (models.Model):
    role = models.ForeignKey(Roles, on_delete=models.CASCADE)
    action = models.ForeignKey(Action, on_delete=models.CASCADE)


    

class User_Profile (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,primary_key=True) 
    user_pin = models.CharField(max_length=128, null=True, blank=True)
    user_tel = models.CharField(max_length=20, null=True, blank=True)
    user_Department = models.ForeignKey(Department,on_delete=models.CASCADE, null=True, blank=True)
    user_stFaculty = models.ForeignKey(Faculty,on_delete=models.CASCADE, null=True, blank=True)
    user_stLevel = models.ForeignKey(Level_study,on_delete=models.CASCADE, null=True, blank=True)
    user_stYear = models.IntegerField(null=True, blank=True)
    user_officerPosition = models.ForeignKey(OfficerPosition,on_delete=models.CASCADE, null=True, blank=True)
    user_role = models.ForeignKey(Roles,on_delete=models.CASCADE)

#----------------------------------------------------------------------

