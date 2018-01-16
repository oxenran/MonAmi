from rest_framework import serializers
from assistants.models import Assistant
from assistants.models import Appointment
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework.validators import UniqueTogetherValidator
from django.core.exceptions import ValidationError
from rest_framework.validators import UniqueForDateValidator
from datetime import datetime, timezone
from datetime import timedelta
# from .validators import validate_user
#validators

def time_warp(datetime):
    #checks to see that you have scheduled your appointment at a time greater than two days from now
    if datetime < (datetime.now(timezone.utc) + timedelta(days = 2)):
        raise ValidationError('You need to book this appointment at least two days ahead.')
    return datetime

def validate_user(value):
    assistant_list = Assistant.objects.filter(user = value)
    print('stripes')
    if len(assistant_list) != 0:
        raise ValidationError('You have an assistant account.  Assistants can not make appointments.'
        )
    return value

#serializers
class AssistantSerializer(serializers.ModelSerializer):

    class Meta:
        user = serializers.ReadOnlyField(source='user.id')
        appointments = serializers.PrimaryKeyRelatedField(many=True, queryset=Appointment.objects.all())
        model = Assistant
        fields = ('id', 'first_name', 'last_name', 'email', 'household', 'driver', 'companion', 'image_url', 'appointments', 'user')
        read_only_fields = ['id', 'appointments', 'user']

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        appointments = serializers.PrimaryKeyRelatedField(many=True, queryset=Appointment.objects.all())
        model = User
        fields = ( 'id', 'username', 'email', 'password', 'appointments')
        read_only_fields = ['id', 'appointments']
    def create(self, validated_data):
        user = User.objects.create_user(
       email=validated_data['email'],
       username=validated_data['username'],
       )
       #this part allows the changed password to be encoded
        password =(validated_data['password'])
        user.set_password(password)
        user.save()
        return user

class AppointmentSerializer(serializers.ModelSerializer):

    owner = serializers.ReadOnlyField(validators=[validate_user], source='owner.username')
    date = serializers.DateTimeField(validators=[time_warp])
    # assistant = serializers.ReadOnlyField(source='assistant.id')
    # queryset = Appointment.objects.filter(owner=request.user)
    class Meta:
        model = Appointment
        fields = ('id', 'date', 'details', 'assistant', 'owner')
        validators = [
            UniqueTogetherValidator(
                queryset=Appointment.objects.all(),
                fields=('assistant', 'date')
            ),
            # UniqueForDateValidator(
            #     queryset=Appointment.objects.all(),
            #     field = 'owner',
            #     date_field='date',
            #     message = 'The User already as an appointment at this time'
            # ),

            #validate that date > datetime.now + timedelta(days= 2)
            # UniqueTogetherValidator(
            #     queryset=Appointment.objects.all(),
            #     fields=('owner', 'date')
            # ),
        ]
