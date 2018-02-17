from django.conf.urls import url, include
from rest_framework.urlpatterns import format_suffix_patterns
from .views import UserRetrieval
from api import views
urlpatterns = {
	url(r'^$',UserRetrieval.as_view(), name="create1"),
  	url(r'^userslist/$', UserRetrieval.as_view(), name="create"),

}

urlpatterns = format_suffix_patterns(urlpatterns)
