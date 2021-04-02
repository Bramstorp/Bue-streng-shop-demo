from django.urls import path

from .views import StringListView

urlpatterns = [
    path("", StringListView.as_view())
]
