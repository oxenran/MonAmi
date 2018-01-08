from django.db import models
# from pygments.lexers import get_lexer_by_name
# from pygments.formatters.html import HtmlFormatter
# from pygments import highlight

# LEXERS = [item for item in get_all_lexers() if item[1]]
# LANGUAGE_CHOICES = sorted([(item[1][0], item[0]) for item in LEXERS])
# STYLE_CHOICES = sorted((item, item) for item in get_all_styles())


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
    date = models.DateTimeField(blank=False)
    owner = models.ForeignKey('auth.User', related_name='assistants', on_delete=models.CASCADE)
    details = models.TextField()

    class Meta:
        ordering = ('created',)
