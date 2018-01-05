from django.db import models

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

    class Meta:
        ordering = ('created',)
