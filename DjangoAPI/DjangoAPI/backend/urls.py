from django.urls import re_path
from backend import views

urlpatterns=[
    re_path(r'parkinglots$', views.parkinglotsAPI),
    re_path(r'parkinglots/(""+)$', views.parkinglotsAPI)
]