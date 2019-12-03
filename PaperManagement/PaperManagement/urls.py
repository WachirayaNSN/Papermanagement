"""PaperManagement URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from Authentication import views
from django.urls import path

urlpatterns = [
    path('',views.localhost, name ='localhost'),
    path('login/',views.user_login, name ='user_login'),
    path('login/pin/',views.user_login_pin, name='user_pin'),
    path('logout/',views.user_logout, name ='user_logout'),
    path('Home/',views.acess_home, name ='home'),
    path('Home/Developer_team',views.team, name ='team'),
    path('Home/Profile',views.profile, name ='profile'),
    path('Home/form/formtype_01',views.send_request, name ='send_request'),
    path('Home/form/formtype_01/rule',views.type01_rule, name ='rule'),
    path('Home/Request_list/send',views.Approve_User, name ='send_list'),
    path('Home/Request_list/approve',views.approve_request_list, name ='approve_list'),
    
]
