from django.urls import path
from .views import home, about, contact, features, pricing

urlpatterns = [
    path('', home),
    path('about/', about),
    path('contact/', contact),
    path('features/', features),
    path('pricing/', pricing),



]