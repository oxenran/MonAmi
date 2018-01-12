from rest_framework import serializers
from assistants.models import Assistant
from assistants.models import Appointment
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

class AssistantSerializer(serializers.ModelSerializer):

    class Meta:
        appointments = serializers.PrimaryKeyRelatedField(many=True, queryset=Appointment.objects.all())
        model = Assistant
        fields = ('id', 'first_name', 'last_name', 'email', 'household', 'driver', 'companion', 'image_url', 'appointments')
        read_only_fields = ['id', 'appointments']

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        appointments = serializers.PrimaryKeyRelatedField(many=True, queryset=Appointment.objects.all())
        model = User
        fields = ( 'id', 'username', 'email', 'password', 'appointments')
        read_only_fields = ['id', 'appointments']
    def create(self, validated_data):
        user = User.objects.create(
       email=validated_data['email'],
       username=validated_data['username'],
       )
        password = make_password(validated_data['password'])
        user.set_password(password)
        user.save()
        return user

class AppointmentSerializer(serializers.ModelSerializer):

    owner = serializers.ReadOnlyField(source='owner.username')
    # assistant = serializers.ReadOnlyField(source='assistant.id')
    # queryset = Appointment.objects.filter(owner=request.user)
    class Meta:
        model = Appointment
        fields = ('id', 'date', 'details', 'assistant', 'owner')
