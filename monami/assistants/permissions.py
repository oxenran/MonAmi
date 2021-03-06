from rest_framework import permissions
from assistants.models import Assistant

class IsOwnerOrReadOnly(permissions.BasePermission):
    """
    Custom permission to only allow owners of an object to edit it.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in permissions.SAFE_METHODS:
            return True

        # Write permissions are only allowed to the owner of the snippet.
        return obj.owner == request.user

class IsAssistant(permissions.BasePermission):
    """
    Custom permission to only allow non assistants to make an appointment.
    """

    def has_permission(self, request, view):
        #this is probably not the best way to do this
        if request.method == 'POST':

            assistant_list = Assistant.objects.filter(user = request.user)
            if len(assistant_list) > 0:
                 return False
            else:
                return True
        else:
            return True
