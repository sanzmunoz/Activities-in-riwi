import requests

URL = https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
DATA = {"title": "Título del ejemplo",
    "body": "Contenido de un nuevo post",
    "userId": 1
}

response = requests.post(URL, json=DATA) #get() trae la informacion de un post simulado por la API

if response.status_code == 200:
    print("post exitoso")
    print("Data:", response.json())
else:
    print("Error en la solicitud, detalles: ",response.text)