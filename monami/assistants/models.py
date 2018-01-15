from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class Assistant(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    user = models.OneToOneField('auth.User', related_name='assistant', on_delete=models.CASCADE)
    email = models.CharField(blank=False, max_length=100)
    last_name = models.CharField(blank=False, max_length=100)
    first_name = models.CharField(blank=False, max_length=100)
    household = models.BooleanField(default=False)
    driver = models.BooleanField(default=False)
    companion = models.BooleanField(default=False)
    image_url = models.CharField(max_length=500, default= "https://i.imgur.com/yILM61G.jpg")
    # owner = models.ForeignKey('auth.User', related_name='assistants', on_delete=models.CASCADE)
    # highlighted = models.TextField()

    class Meta:
        ordering = ('created',)

class Appointment(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    date = models.DateTimeField(auto_now=False, auto_now_add=False, blank=False)
    owner = models.ForeignKey('auth.User',                        related_name='appointments', on_delete=models.CASCADE)
    assistant = models.ForeignKey(Assistant, related_name='appointments', on_delete=models.CASCADE)
    # assistant = models.ForeignKey('models.Assistant',                        related_name='assistants', on_delete=models.CASCADE)
    details = models.TextField(blank=True, null=True, default=0)

    class Meta:
        ordering = ('created',)

# @receiver(post_save, sender=User)
# def create_user_assistant(sender, instance, created, **kwargs):
#     if created:
#         Assistant.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_assistant(sender, instance, **kwargs):
#     instance.assistant.save()

# for user in User.objects.all():
#     Token.objects.get_or_create(user=user)

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)
