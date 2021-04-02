from django.urls import path

from .views import ArrowListView

urlpatterns = [
    path("", ArrowListView.as_view())
]
