from rest_framework import serializers
from assistants.models import Assistant # LANGUAGE_CHOICES, STYLE_CHOICES


class AssistantSerializer(serializers.Serializer):
    class Meta:
        model = Assistant
        fields = ('id', 'first_name', 'last_name', 'email', 'household', 'driver', 'companion')

    #
    # def create(self, validated_data):
    #     """
    #     Create and return a new `Assistant` instance, given the validated data.
    #     """
    #     return Assistant.objects.create(**validated_data)
    #
    # def update(self, instance, validated_data):
    #     """
    #     Update and return an existing `Assistant` instance, given the validated data.
    #     """
    #     instance.email = validated_data.get('email', instance.email)
    #     instance.first_name = validated_data.get('first_name', instance.First)
    #     instance.last_name = validated_data.get('last_name', instance.last_name)
    #     instance.household = validated_data.get('household', instance.household)
    #     instance.driver = validated_data.get('driver', instance.driver)
    #     instance.companion = validated_data.get('companion', instance.companion)
    #     instance.save()
    #     return instance
