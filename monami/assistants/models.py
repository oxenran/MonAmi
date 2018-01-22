from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
# from .validators import validate_user
# #validations
# def validate_user(value):
#     assistant_list = Assistant.objects.filter(user = value)
#     print('stripes')
#     if len(assistant_list) != 0:
#         raise ValidationError(
#             _('%(value)s is an assistant.  Assistants can not make appointments.'),
#             params={'value': value},
#         )
#

class Assistant(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    user = models.OneToOneField('auth.User', related_name='assistant', on_delete=models.CASCADE)
    last_name = models.CharField(blank=False, max_length=100)
    first_name = models.CharField(blank=False, max_length=100)
    household = models.BooleanField(default=False)
    driver = models.BooleanField(default=False)
    companion = models.BooleanField(default=False)
    bio = models.TextField(blank=True, null=True)
    image_url = models.CharField(max_length=500, default= "https://i.imgur.com/yILM61G.jpg")
    # owner = models.ForeignKey('auth.User', related_name='assistants', on_delete=models.CASCADE)
    # highlighted = models.TextField()

    class Meta:
        ordering = ('created',)


class Profile(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    owner = models.OneToOneField( 'auth.User',                     related_name='profile', on_delete=models.CASCADE)
    last_name = models.CharField(blank=False, max_length=100)
    first_name = models.CharField(blank=False, max_length=100)
    image_url = models.CharField(max_length=500, blank=True, null=True)
    address = models.TextField(blank=True, null=True)
    bio = models.TextField(blank=True, null=True)

    class Meta:
        ordering = ('created',)

class Appointment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    date = models.DateTimeField(auto_now=False, auto_now_add=False, blank=False)
    owner = models.ForeignKey( 'auth.User',                     related_name='appointments', on_delete=models.CASCADE)
    assistant = models.ForeignKey(Assistant, related_name='appointments', on_delete=models.CASCADE)
    # assistant = models.ForeignKey('models.Assistant',                        related_name='assistants', on_delete=models.CASCADE)
    details = models.TextField(blank=True, null=True, default=0)

    class Meta:
        ordering = ('date',)


@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
