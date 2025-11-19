# def ingreso_producto (name):
#     while True:
#         try: 
#             cost=float(input("Cual es el precio del producto => ")) #Solicita ingreso de la cantiadad del producto
#             break            
#         except ValueError:
#             print("Dato erroneo, ingrese de nuevo => ")
#     while True:
#         try:
#             cant=int(input("Ingrese La cantidad del producto => "))
#             break
#         except ValueError:
#             print("Dato erroneo, ingrese de nuevo => ")
#     return cost, cant
    

# producto=input("ingres product: ")
# ingreso_producto(producto)
# print(producto,cost,cant)




# coders=[]
# print(coders)
# amount=int(input("Cuantos coder va a ingresar? "))

# while amount!=0:
#     name = input("Ingrese el nombre: ")
#     lastName=input("Ingrese el apellido: ")
#     age=input("Ingrese su edad: ")
#     email=input("ingrese el Email: ")

#     coder={
#         "nombre":name,
#         "apellido": lastName,
#         "edad":age,
#         "email":email
#     }

#     coders.append(coder)
#     amount -= 1

# print(coders)

# #           TUPLAS
# ciudades=("Medellin", "Cali", "Barranquilla") 
# print(ciudades[2]) #barranquilla

# #           DICCIONARIOS
# datos= {
#     "Nombre:" = "Pedro",
#     "Ciudad" = "La mancha",
#     "Apellido" = "Páramo"
# }

# claves = list(datos.keys())
# print(claves) # imprime solo las claves y las claves almacenadas

# item=list(datos.items())
# print(item[2]) # imprime: ("Apellido"="Páramo")
# print(item[2][1]) # imprime solo el dato dentro de la segunda posicion

# valores=list(datos.values()) #Devuelve los valores de un dic
# print(valores[0]) # imprime Pedro

# nombre=datos.get("Nombre", "No dispnible")
# print(nombre) #Imprime pedro

# def creacion_producto(name, cost, qw):
#     #name=input("Nombre de producto => ") #pide al usuario el nombre del producto
#     name=produ #funcion para recibir el nombre del producto
#         # produ=input("Nombre de producto => ") #pide al usuario el nombre del producto
#     while True: #dos bucles while-true: para recibir y ciclar el precio y producto
#         try: 
#             cost=float(costo) #Solicita ingreso de la cantiadad del producto
#             break            
#         except ValueError: #recibe el error en caso que se ingrese erroneamente
#             print("Dato erroneo, ingrese de nuevo => ")
#             costo=input("ingrese el costo ")

#     while True:
#         try:
#             qw=int(cant)
#             break
#         except ValueError:
#             print("Dato erroneo, ingrese de nuevo => ")
#     return name, cost, cant

# produ=input("ingrese el nombre del producto ")
# costo=input("ingrese el costo ")
# cant=input("Cantidad ")
# creacion_producto(produ,costo,cant)
# print(f"Producto: {produ}||Valor unitario: ${costo}||Cantidad: {cant}und||Costo total: ${costo*cant}")

#Escribir en un archivo
# datos= ["ana", "luis", "José"]
# with open("nombres.txt","w") as archivo:
#     for nombre in datos:
#         archivo.write(nombre + "\n")

# #leer el archivo
# with open("nombres.txt", "r") as archivo:
#     contenido= archivo.read()
#     print(contenido)

# with open ("nombres.txt", "r") as archivo:
#     for linea in archivo:
#         print("linea:",linea.strip())

# import json
# ARCHIVO= "estudiantes.json"
# def inicializar():
#     try:
#         with open(ARCHIVO, "r") as f:
#             return json.load(f)
#     except FileNotFoundError:
#         return {}
    
# def guardar(data):
#     with open(ARCHIVO, "w") as f:
#         json.dump(data,f,ident=4)

# def crear(codigo,nombre,edad):
#     data=inicializar()
#     data[codigo]={"nombre":nombre,"edad": edad}
#     guardar(data)
#     print("Estudiante creado.")

# def leer():
#     data = inicializar()
#     for cod, info in data.items():
#         print(cod, info)

# def actualiazar(codigo, nombre=None, edad=None):
#     data=inicializar()
#     if codigo in data:
#         if nombre:
#             data[codigo]["nombre"]=nombre
#         if edad:
#             data[codigo][codigo]["edad"]=edad
#         guardar(data)
#         print("Estudiante actualizado.")
#     else:
#         print("Estudiante no encontrado.")

# def eliminar(codigo):
#     data=inicializar()
#     if codigo in data:
#         del data[codigo]
#         guardar(data)
#         print("Estudiante eliminado")
#     else:
#         print("Estudiante no encontrado")

# #Pruebas
# crear("A001","Ana",21)
# crear("A002","luis",20)
# leer()
# actualiazar ("A001", edad=22)
# eliminar("A002")
# leer()

tupla = ("red", "yellow", "green")
print(tupla[1])#muestra el valor en posicion 1 de la tupla
print(tupla[2])

# tupla.append("blue") # AttributeError
t = (1, 2, 3)
tupla_to_list = list(t) #converite tupla a lista
print(tupla_to_list)
tupla_to_list.append(4)
print(tupla_to_list)
tupla_to_list.append([1,2,3])
list_to_tuple=tuple(tupla_to_list) #convierte lista a tupla
print(list_to_tuple)
list_to_tuple.append()