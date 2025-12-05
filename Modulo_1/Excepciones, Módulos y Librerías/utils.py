import math
from datetime import date

def doble(n): return n*2
def es_par(n): return n%2 == 0
def area_circulo(r): return math.pi * r ** 2
def hoy(): return date.today().isoformat #devuelve fecha y hora en formato ISO 8601
def conversion_temp(n):
    try:
        if n==int:
            print("numero valido")
    except:
        print("Lo que escribiste no es un número")
    finally:
        print("this is all, friends")
    return n+273.15
