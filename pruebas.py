# # x = 10

# # def valor():
# #     x=20
# #     print(x)

# # valor()
# # print(x)

# nums=[12,0,45,6]
# animals=["cat","dog","elephant","snake"]

# def FirstAndLast(cosas):
#     first=cosas[0]
#     last=cosas[-1]
#     return first,last

# animal1,animal2=FirstAndLast(animals)
# print(animal1,animal2)

# def doblarFunc(num):
#     result=num*2
#     return result

# res=doblarFunc(40)
# print("funcion normal",res)

# doblar = lambda num: num*2 #lambda utiliza menos memoria y resume la escritura de una funcion

# res=doblar(33)
# print("Funion nueva: ", res)



def ingreso_producto (name):
    
    

producto=ingreso_producto(input("ingres product: "))




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
