from rest_framework import viewsets, permissions
from rest_framework import generics
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateAPIView,
    RetrieveDestroyAPIView,
    RetrieveAPIView,
    ListAPIView,
)

from .models import ArrowModel
from .serrializers import ArrowSerializer


class ArrowListView(ListCreateAPIView):
    permissions_classes = (permissions.AllowAny,)
    serializer_class = ArrowSerializer
    queryset = ArrowModel.objects.all()
