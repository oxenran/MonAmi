from rest_framework import serializers
from assistants.models import Assistant
from assistants.models import Appointment
from django.contrib.auth.models import User
# LANGUAGE_CHOICES, STYLE_CHOICES


class AssistantSerializer(serializers.ModelSerializer):

    class Meta:
        appointments = serializers.PrimaryKeyRelatedField(many=True, queryset=Appointment.objects.all())
        model = Assistant
        fields = ('id', 'first_name', 'last_name', 'email', 'household', 'driver', 'companion', 'image_url', 'appointments')



class UserSerializer(serializers.ModelSerializer):

    #this is how you add a primary key
    # assistants = serializers.PrimaryKeyRelatedField(many=True, queryset=Assistant.objects.all())
    #after this you'd add 'assistants' to the field below

    class Meta:
        appointments = serializers.PrimaryKeyRelatedField(many=True, queryset=Appointment.objects.all())
        model = User
        #possibly add appointments to fields
        fields = ( 'id', 'username', 'email', 'appointments')

class AppointmentSerializer(serializers.ModelSerializer):

    owner = serializers.ReadOnlyField(source='owner.username')
    assistant = serializers.ReadOnlyField(source='assistant.last_name')

    class Meta:
        model = Appointment
        fields = ('id', 'date', 'details', 'assistant', 'owner')
