from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from assistants import views

urlpatterns = [
    url(r'^assistants/$', views.AssistantList.as_view()),
    url(r'^assistants/(?P<pk>[0-9]+)/$', views.AssistantDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
