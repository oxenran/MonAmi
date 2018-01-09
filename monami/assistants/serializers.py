from rest_framework import serializers
from assistants.models import Assistant
from assistants.models import Appointment
from django.contrib.auth.models import User
# LANGUAGE_CHOICES, STYLE_CHOICES


class AssistantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assistant
        fields = ('id', 'first_name', 'last_name', 'email', 'household', 'driver', 'companion', 'image_url')



class UserSerializer(serializers.ModelSerializer):

    #this is how you add a primary key
    # assistants = serializers.PrimaryKeyRelatedField(many=True, queryset=Assistant.objects.all())
    #after this you'd add 'assistants' to the field below

    class Meta:
        model = User
        fields = ('id', 'first_name', 'last_name', 'email')

class AppointmentSerializer(serializers.ModelSerializer):
    appointments = serializers.PrimaryKeyRelatedField(many=True, queryset=Appointment.objects.all())

    class Meta:
        model = Appointment
        fields = ('date', 'details', 'assistants')
