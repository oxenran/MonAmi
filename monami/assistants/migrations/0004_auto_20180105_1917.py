# Generated by Django 2.0.1 on 2018-01-05 19:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('assistants', '0003_assistant_image_url'),
    ]

    operations = [
        migrations.AlterField(
            model_name='assistant',
            name='image_url',
            field=models.CharField(default='https://i.imgur.com/yILM61G.jpg', max_length=500),
        ),
    ]