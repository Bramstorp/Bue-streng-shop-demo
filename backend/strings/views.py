from rest_framework import viewsets, permissions
from rest_framework.views import APIView
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateAPIView,
    RetrieveDestroyAPIView,
    RetrieveAPIView,
    ListAPIView,
)

from .models import StringModel
from .serrializers import StringSerializer


class StringListView(ListAPIView):
    permissions_classes = (permissions.AllowAny)
    serializer_class = StringSerializer
    queryset = StringModel.objects.all()
