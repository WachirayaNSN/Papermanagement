from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from django.template import loader
from django.contrib.auth.models import User
from django.urls import reverse
from django.contrib.auth import authenticate,login,logout
#from Authentication.models import Profile

# Create your views here.

def user_login(request):
    #template = loader.get_template('login.html')
    #return HttpResponse(template.render())
    context = {}
    if request.method == "POST":
        user_name = request.POST['username']
        user_password = request.POST['password']
        user = authenticate(request,username = user_name,password = user_password)
        if user:
            return HttpResponseRedirect(reverse("home_user"))
        else :
            context["error"]="invalid"
            return render(request,'login.html',context)
    else :
        return render(request,'login.html',context)

def acess_success(request):
    context={}
    return render(request,'Home_User.html',context)
    

def user_logout(request):
    if request.method == "POST":
        logout(request)
    return HttpResponseRedirect(reverse('user_login'))