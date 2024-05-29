import requests

API_KEY = "8566ea1796cbb08a5ded091cd73523fb"

def get_weather(city):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}"
    response = requests.get(url)
    data = response.json()
    return data

def display_weather(data):
    if data["cod"] == 200:
        city = data["name"]
        weather = data["weather"][0]["description"]
        temperature = data["main"]["temp"]
        humidity = data["main"]["humidity"]
        wind_speed = data["wind"]["speed"]

        print(f"Weather in {city}:")
        print(f"Description: {weather}")
        print(f"Temperature: {temperature} K")
        print(f"Humidity: {humidity}%")
        print(f"Wind Speed: {wind_speed} m/s")
    else:
        print("Error fetching weather data.")

city = input("Enter a city: ")
weather_data = get_weather(city)
display_weather(weather_data)