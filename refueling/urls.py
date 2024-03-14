from django.urls import path
from . import views

urlpatterns = [
    path('refuels/', views.getRefuels),
    path('consumption/', views.getConsumption),
    path('new/', views.saveNewRefuel, name="new-refuel")
]