from django.urls import path
from .views import home, about, contact, features, pricing, faq

urlpatterns = [
    path('', home),
    path('about/', about),
    path('contact/', contact),
    path('features/', features),
    path('pricing/', pricing),

    path('faq/', faq),



]