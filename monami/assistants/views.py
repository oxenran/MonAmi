from assistants.models import Assistant, Appointment
from django.contrib.auth.models import User
from assistants.serializers import AssistantSerializer, AppointmentSerializer, UserSerializer
from django.http import Http404
from rest_framework import permissions, mixins, generics, renderers
from rest_framework.views import APIView
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.reverse import reverse
from django.views.decorators.csrf import ensure_csrf_cookie
from assistants.permissions import IsOwnerOrReadOnly,  IsAssistant
from django.contrib.auth.hashers import make_password
# import django_filters.rest_framework

class AssistantList(generics.ListCreateAPIView):
    queryset = Assistant.objects.all()
    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
    serializer_class = AssistantSerializer
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('last_name', 'first_name', 'household', 'companion', 'driver')

class AssistantDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Assistant.objects.all()
    serializer_class = AssistantSerializer

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    # filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
    filter_backends = (DjangoFilterBackend,)
    # filter_fields = ('username')

class UserDetail(generics.RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = (DjangoFilterBackend,)


class AppointmentList(generics.ListCreateAPIView):
    permission_classes = (permissions.IsAuthenticated, IsOwnerOrReadOnly, IsAssistant,)

    def perform_create(self, serializer):
        permission_classes = (IsAssistant,)
        serializer.save(owner=self.request.user)
    # assistant= self.request.assistant
    # queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

    def get_queryset(self):
        """
        This view should return a list of all the appointments
        for the currently authenticated user.
        """
        permission_classes = (IsOwnerOrReadOnly,)
        users = self.request.user
        assistants =  Assistant.objects.filter(user=users.id)
        # print('assistants')
        if len(assistants) == 0:
            return users.appointments
        else:
            assistantUser = assistants.first()
            return assistantUser.appointments

    # filter_backends = (django_filters.rest_framework.DjangoFilterBackend,)
    filter_backends = (DjangoFilterBackend,)
    filter_fields = ('date', 'owner', 'assistant')

class AppointmentDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer
    permission_classes = (IsOwnerOrReadOnly,)

@api_view(['GET'])
@ensure_csrf_cookie

# @authentication_classes((SessionAuthentication, BasicAuthentication))
# @permission_classes((IsAuthenticated,))
@ensure_csrf_cookie
def api_root(request, format=None):
    authentication_classes = (SessionAuthentication, BasicAuthentication)
    permission_classes = (IsAuthenticated,)

    return Response({
        # 'users': reverse('user-list', request=request, format=format),
        # 'assistants': reverse('assistant-list', request=request, format=format),
        # 'appointments': reverse('appointment-list', request=request, format=format),
        # 'user': unicode(request.user),  # `django.contrib.auth.User` instance.
        # 'auth': unicode(request.auth),  # None
    })
