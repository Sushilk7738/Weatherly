from django.urls import path
from .views import RegisterAPIView, LoginAPIView, WeatherAPIView, SessionCheckAPIView, LogoutAPIView


urlpatterns = [
    path("register/", RegisterAPIView.as_view()),
    path("login/", LoginAPIView.as_view()),   
    path("logout/", LogoutAPIView.as_view()),   
    path("check/", SessionCheckAPIView.as_view()),
    path("weather/", WeatherAPIView.as_view()),
]
