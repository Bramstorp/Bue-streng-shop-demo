from rest_framework import serializers

from .models import ArrowModel


class ArrowSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArrowModel
        fields = "__all__"
