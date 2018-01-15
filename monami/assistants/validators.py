
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


#validations
def validate_user(value):
    assistant_list = Assistant.objects.filter(user = value)
    print('stripes')
    if len(assistant_list) != 0:
        raise ValidationError(
            _('%(value)s is an assistant.  Assistants can not make appointments.'),
            params={'value': value},
        )
