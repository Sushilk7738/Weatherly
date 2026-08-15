from django.urls import path
from .views import RegisterAPIView, LoginAPIView, WeatherAPIView, SessionCheckAPIView, LogoutAPIView, csrf_token


urlpatterns = [
    path("csrf/", csrf_token),
    path("register/", RegisterAPIView.as_view()),
    path("login/", LoginAPIView.as_view()),   
    path("logout/", LogoutAPIView.as_view()),   
    path("session-check/", SessionCheckAPIView.as_view()),
    path("weather/", WeatherAPIView.as_view()),
]
