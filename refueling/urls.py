from django.urls import path
from . import views

urlpatterns = [
    path('refuels/', views.getRefuels)
]