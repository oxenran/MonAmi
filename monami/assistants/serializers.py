from rest_framework import serializers
from assistants.models import Assistant # LANGUAGE_CHOICES, STYLE_CHOICES


class AssistantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assistant
        fields = ('id', 'first_name', 'last_name', 'email', 'household', 'driver', 'companion')
