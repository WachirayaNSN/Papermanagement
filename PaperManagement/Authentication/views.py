from django.shortcuts import render
from django.http import JsonResponse,HttpResponseRedirect
from django.template import loader
from django.contrib.auth.models import User
from django.urls import reverse
from django.contrib.auth import authenticate,login,logout
from Authentication.models import User_Profile

# Create your views here.

# Login Done
def user_login(request):
    context = {}
    if request.method == "POST":
        user_name = request.POST['username']
        user_password = request.POST['password']
        if user_name == '' and user_password == '' :
            context['error']="None_input"
            return render(request,'login.html',context)
        elif user_name == '' :
            context['error']="None_username"
            return render(request,'login.html',context)
        elif user_password == '' :
            context['error']="None_password"
            return render(request,'login.html',context)
        else :
            # Check name and password in database
            user = authenticate(request,username = user_name,password = user_password)
            if user:
                return HttpResponseRedirect(reverse("home_user"))
            else :
                context['error']="invalid"
                return render(request,'login.html',context)
    else :
        return render(request,'login.html',context)

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
            return render(request,'Pin.html',context)
        elif user_name == '' :
            context['error']="None_input"
            return render(request,'Pin.html',context)
        elif user_password == '' :
            context['error']="None_password"
            return render(request,'Pin.html',context)
        else :
            #user = authenticate(request,username = user_name,password = user_password)
            #if user:
            #    return HttpResponseRedirect(reverse("home_user"))
            #else :
            #    context['error']="invalid"
            return render(request,'login.html',context)
    else :
        return render(request,'Pin.html',context)

# Check role and switch to home :  ---> Not done yet<---
#   role -----------> student , stakeholder (teacher,approver,officer) , admin 
#
#
def acess_success(request):
    context={}
    return render(request,'Home_User.html',context)
    
# Logout : done
def user_logout(request):
    if request.method == "POST":
        logout(request)
    return HttpResponseRedirect(reverse('user_login'))