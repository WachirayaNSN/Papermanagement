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


class User_Profile (models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE,primary_key=True) 
    user_pin = models.CharField(max_length=128)
    user_tel = models.CharField(max_length=20)
    user_DepartmentID = models.ForeignKey(Department,on_delete=models.CASCADE)
    user_stFacultyID = models.ForeignKey(Faculty,on_delete=models.CASCADE)
    user_stLevelID = models.ForeignKey(Level_study,on_delete=models.CASCADE)
    user_stYear = models.IntegerField()
    user_officerPositionID = models.ForeignKey(OfficerPosition,on_delete=models.CASCADE)

#----------------------------------------------------------------------

