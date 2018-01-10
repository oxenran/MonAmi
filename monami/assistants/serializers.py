from rest_framework import serializers
from assistants.models import Assistant
from assistants.models import Appointment
from django.contrib.auth.models import User


class AssistantSerializer(serializers.ModelSerializer):

    class Meta:
        appointments = serializers.PrimaryKeyRelatedField(many=True, queryset=Appointment.objects.all())
        model = Assistant
        fields = ('id', 'first_name', 'last_name', 'email', 'household', 'driver', 'companion', 'image_url')

class UserSerializer(serializers.ModelSerializer):

    #this is how you add a primary key
    appointments = serializers.PrimaryKeyRelatedField(many=True, queryset=Appointment.objects.all())

    class Meta:
        appointments = serializers.PrimaryKeyRelatedField(many=True, queryset=Appointment.objects.all())
        model = User
        fields = ( 'id', 'username', 'email')

class AppointmentSerializer(serializers.ModelSerializer):

    owner = serializers.ReadOnlyField(source='owner.username')
    assistant = serializers.ReadOnlyField(source='assistant.id')

    class Meta:
        model = Appointment
        fields = ('id', 'date', 'details', 'assistant', 'owner')
