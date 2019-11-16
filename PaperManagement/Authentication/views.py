from django.shortcuts import render
from django.http import JsonResponse,HttpResponseRedirect
from django.template import loader
from django.contrib.sessions.models import Session
from django.contrib.auth.models import User
from django.urls import reverse
from django.contrib.auth import authenticate,login,logout
from Authentication.models import *

# Create your views here.

# Login Done
def user_login(request):
    context = {}
    if request.method == "POST":
        user_name = request.POST['username']
        user_password = request.POST['password']
        if user_name == '' and user_password == '' :
            context['error']="None_input"
            return render(request,'login/login.html',context)
        elif user_name == '' :
            context['error']="None_username"
            return render(request,'loginlogin.html',context)
        elif user_password == '' :
            context['error']="None_password"
            return render(request,'login/login.html',context)
        else :
            # Check name and password in database
            user = authenticate(request,username = user_name,password = user_password)
            if user:
                user_obj = User.objects.get(username=user_name)
                userRole = User_Profile.objects.get(user = user_obj).user_role.role_name
                request.session['user_id'] = user_obj.pk
                request.session['user_role'] = userRole
                if userRole != '' :
                    return HttpResponseRedirect(reverse("home"))
                else :
                    context['error']="lost"
                    return render(request,'login/login.html',context)
            else :
                context['error']="invalid"
                return render(request,'login/login.html',context)
    else :
        return render(request,'login/login.html',context)

# Login with card : ---> Not done yet<---
#
#
def user_login_pin(request):
    context = {}
    if request.method == "POST":
        user_name = request.POST['username']
        user_password = request.POST['password']
        if user_name == '' and user_password == '' :
            context['error']="None_input"
            return render(request,'login/Pin.html',context)
        elif user_name == '' :
            context['error']="None_input"
            return render(request,'login/Pin.html',context)
        elif user_password == '' :
            context['error']="None_password"
            return render(request,'login/Pin.html',context)
        else :
            #user = authenticate(request,username = user_name,password = user_password)
            #if user:
            #    return HttpResponseRedirect(reverse("home_user"))
            #else :
            #    context['error']="invalid"
            return render(request,'login/Pin.html',context)
    else :
        return render(request,'login/Pin.html',context)

# Check role and switch to home :  ---> Not done yet<---
#   role -----------> student , stakeholder (teacher,approver,officer) , admin 
#
#
def acess_home(request):
    context={}
    user_obj = User.objects.get(pk=request.session['user_id'])
    context['name'] = user_obj.first_name +"  "+user_obj.last_name
    return render(request,'home/Home_User.html',context)



# Logout : done
def user_logout(request):
    if request.method == "POST":
        try :
            del request.session['user_id'] 
            del request.session['user_role']
        except KeyError:
            pass
        logout(request)
    return HttpResponseRedirect(reverse('user_login'))

# Team : done
def team(request):
    context={}
    return render(request,'Team.html',context)

# Profile : done
# Have to check words in this page
# never have tested with AdminID yet 
def profile(request):
    context={}
    user_profile = User_Profile.objects.get(pk=request.session['user_id'])
    user = User.objects.get(pk=request.session['user_id'])
    context['Name'] = user.first_name +"  "+user.last_name
    context['Tel'] = user_profile.user_tel
    context['Email'] = user.email
    context['Department'] = user_profile.user_Department.department_name
    if request.session['user_role'] == "Student" :
        context['Years'] = user_profile.user_stYear
        context['Level'] = user_profile.user_stLevel.level_name
        context['Major'] = user_profile.user_stFaculty.faculty_name
    elif request.session['user_role'] in ["Approver","Officer","Admin"] :
        context['Position'] = user_profile.user_officerPosition.position_name
    return render(request,'Profile.html',context)