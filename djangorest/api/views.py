from __future__ import unicode_literals
from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.http import Http404
from django.http import HttpResponse
from rest_framework import generics
from .models import UserInfo
from .serializers import UserInfoSerializer
import http.client
import json

def home(request):
    return HttpResponse('Success server is working!!!')


class UserRetrieval(APIView):
     def post(self, request, format=None):
        data=request.data['data']
        description=request.data['description']
        pd=UserInfo.objects.create(
            data=data,
            description=description
        );
        return HttpResponse('Success added')
