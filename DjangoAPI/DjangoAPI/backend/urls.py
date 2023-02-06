from django.urls import path
from backend import views

urlpatterns=[
    path('<id>', views.parkinglotsAPI),
    path('add/', views.parkinglotsAPI),
    path('list/', views.pullDatabase),
    path('ava/', views.pullAvailability),
]