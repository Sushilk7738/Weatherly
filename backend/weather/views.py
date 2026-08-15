from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer
from django.contrib.auth import authenticate, login, logout
from rest_framework.permissions import IsAuthenticated
from .services import get_weather
from django.views.decorators.csrf import ensure_csrf_cookie
from django.middleware.csrf import get_token
from django.http import JsonResponse


@ensure_csrf_cookie
def csrf_token(request):
    return JsonResponse({"csrfToken": get_token(request)})


class RegisterAPIView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)

        serializer.save()
        return Response(
            {"message": "Registration successful"},
            status= status.HTTP_201_CREATED
        )


class LoginAPIView(APIView):
    authentication_classes = []
    
    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")

        user = authenticate(
            username = username,
            password = password
        )
        
        if user is None:
            return Response(
                {"error": "Invalid credentials"},
                status=status.HTTP_401_UNAUTHORIZED
            )
        
        login(request, user)
        return Response(
            {"message": "Login Successful"},
            status= status.HTTP_200_OK
        )
        


class SessionCheckAPIView(APIView):
    def get(self, request):
        return Response({
            "authenticated": request.user.is_authenticated,
            "username": request.user.username
        })
        

class LogoutAPIView(APIView):
    def post(self, request):
        logout(request)
        return Response(
            {"message": "Logout successful"},
            status= status.HTTP_200_OK
        )
        
        

        
class WeatherAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        city = request.query_params.get("city", "").strip()

        if not city or city.isdigit():
            return Response(
                {"error": "City is required"},
                status= 400
            )
        
        weather = get_weather(city)
        
        if weather is None:
            return Response(
                {"error": "Unable to fetch weather"},
                status=502
            )

        return Response(weather)