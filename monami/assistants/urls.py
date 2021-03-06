from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from assistants import views
from rest_framework.authtoken import views as framework_views

urlpatterns = [
    url(r'^$', views.api_root),
    url(r'^assistants/$', views.AssistantList.as_view()),
    url(r'^assistants/(?P<pk>[0-9]+)/$',
    views.AssistantDetail.as_view(),  name='assistant-detail'),
    url(r'^users/$', views.UserList.as_view()),
    url(r'^users/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
    url(r'^appointments/$', views.AppointmentList.as_view()),
    url(r'^appointments/(?P<pk>[0-9]+)/$', views.AppointmentDetail.as_view()),
    url(r'^api-token-auth/', framework_views.obtain_auth_token),
]

urlpatterns = format_suffix_patterns(urlpatterns)
