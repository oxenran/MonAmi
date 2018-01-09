from assistants.models import Assistant
from django.contrib.auth.models import User
from assistants.models import Appointment
from assistants.serializers import AssistantSerializer
from assistants.serializers import UserSerializer
from assistants.serializers import AppointmentSerializer
from django.http import Http404
# import django_filters.rest_framework
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import mixins
from rest_framework import generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.reverse import reverse
from rest_framework import renderers

class AssistantList(generics.ListCreateAPIView):
    queryset = Assistant.objects.all()
    serializer_class = AssistantSerializer
    # filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('created', 'last_name', 'first_name', 'household', 'companion', 'driver')


class AssistantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Assistant.objects.all()
    serializer_class = AssistantSerializer

class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('username')

class UserDetail(generics.RetrieveAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class AppointmentList(generics.ListCreateAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    # filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('date', 'owner')


class AppointmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer


@api_view(['GET'])
# @authentication_classes((SessionAuthentication, BasicAuthentication))
# @permission_classes((IsAuthenticated,))
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'assistants': reverse('assistant-list', request=request, format=format),
        'appointments': reverse('appointment-list', request=request, format=format),
        'user': unicode(request.user),  # `django.contrib.auth.User` instance.
        'auth': unicode(request.auth),  # None
    })

#
