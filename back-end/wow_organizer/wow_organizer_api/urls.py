from django.urls import path
from . import views

urlpatterns = [
  path('', views.CharactersView.as_view(), name='character_list'),
  path('<int:pk>', views.CharactersView.as_view(), name="character_detail")
]