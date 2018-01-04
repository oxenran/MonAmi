from django.conf.urls import url
from assistants import views

urlpatterns = [
    url(r'^assistants/$', views.assistant_list),
    url(r'^assistants/(?P<pk>[0-9]+)/$', views.assistant_detail),
]
