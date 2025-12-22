from django.shortcuts import render

from django.http import HttpResponse
def home(request):
    return HttpResponse("Hello, World!")

def about(request):
    return HttpResponse("This is the about page.")

def contact(request):
    return HttpResponse("This is the contact page.")

def features(request):
    return HttpResponse("This is the features page.")

def pricing(request):
    return HttpResponse("This is the pricing page.")
