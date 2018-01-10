from django.db import models
from django.conf import settings
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token



class Assistant(models.Model):
    created = models.DateTimeField(auto_now_add=True)
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
    date = models.DateField(blank=False)
    owner = models.ForeignKey('auth.User',                        related_name='appointments', on_delete=models.CASCADE)
    assistant = models.ForeignKey(Assistant,blank=True, null=True, default=0, on_delete=models.CASCADE)
    # assistant = models.ForeignKey('models.Assistant',                        related_name='assistants', on_delete=models.CASCADE)
    details = models.TextField()

    class Meta:
        ordering = ('created',)

# for user in User.objects.all():
#     Token.objects.get_or_create(user=user)

@receiver(post_save, sender=settings.AUTH_USER_MODEL)
def create_auth_token(sender, instance=None, created=False, **kwargs):
    if created:
        Token.objects.create(user=instance)



    # def save(self, *args, **kwargs):
    #
    # linenos = self.linenos and 'table' or False
    # options = self.title and {'title': self.title} or {}
    # formatter = HtmlFormatter(style=self.style, linenos=linenos,
    #                           full=True, **options))
    # super(Assistant, self).save(*args, **kwargs)
