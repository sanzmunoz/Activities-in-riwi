import requests

go = "ingress"
while go != "Salir":
    try: 
        city = input("Ingrese la ciudad: ").capitalize()
    except TypeError:
        print("Escribiste algo erroneo")
    url = f"https://api.openweathermap.org/data/2.5/weather?q={city}&appid=7a79dd3d5f62d67d5b7748d255209a2a&units=metric&lang=es"

    response = requests.get(url)
    data = response.json()

    print(f"El temperatura en {city} es: {data["main"]["temp"]}°C" )
    print(f"La humedad es: {data["main"]["humidity"]}%")
    print(f"El clima es: {data["weather"][0]["description"]}")
    print(f"El país es: {data["sys"]["country"]}")

    go = input("Escriba salir para terminar, si no cualquier cosa : ").capitalize()