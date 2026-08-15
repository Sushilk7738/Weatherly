import requests
from decouple import config

API_KEY= config("WEATHER_API_KEY")


def get_weather(city):
    url= "https://api.weatherapi.com/v1/current.json"

    params = {"key":API_KEY, "q": city}
    
    try:
        response = requests.get(
            url,
            params=params,
            timeout=10
        )
    except requests.RequestException:
        return None
    
    if response.status_code != 200:
        return None
    
    data = response.json()

    current = data.get("current", {})
    
    temperature = current.get("temp_c")
    feels_like = current.get("feelslike_c")
    humidity = current.get("humidity")
    wind_speed = current.get("wind_kph")
    weather = current.get("condition", {}).get("text")
    
    return {
        "temperature": temperature,
        "feels_like": feels_like,
        "humidity": humidity,
        "wind_speed": wind_speed,
        "condition": weather,
    }