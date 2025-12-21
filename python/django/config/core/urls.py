from django.urls import path
from .views import home, about, contact, features

urlpatterns = [
    path('', home),
    path('about/', about),
    path('contact/', contact),
    path('features/', features),



]