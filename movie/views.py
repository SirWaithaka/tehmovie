from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
class HomeView(TemplateView):
   template_name = 'days.html'

   # def get(self, request, *args, **kwargs):
   #    pass
   
   def post(self, request, *args, **kwargs):
      search_query = request.POST
      return HttpResponse('Received')

