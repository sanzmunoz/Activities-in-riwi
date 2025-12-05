# while True:
#     try:
#         number=int(input("Escriba un número => "))
#         with open(f"Manejo_archivos/tabla_del_{number}.txt","w") as archivo: #
#             for numero in range(1,11):
#                archivo.write(f"{number}*{numero}= {number*numero} \n")
#         break
#     except ValueError:
#         print("XX Error, ingrese de nuevo XX")

#Guardar frutas
# with open(f"Manejo_archivos/frutas.txt","w") as listado:
#     for fruta in range(5):
#         listado.write(f"Fruta: {input("Escriba la fruta: \n")}\n")

#Lee un archivo de texto y muestra cuántas líneas contiene.
# lineas=0
# with open (f"Manejo_archivos/frutas.txt","r") as listado:
#     for linea in listado:
#         lineas +=1
#     print(f"lineas del archivo: {lineas}")

#Pide una palabra y muestra todas las líneas de un archivo donde aparezca.
# with open(f"Manejo_archivos/frutas.txt","r") as listado:
#     buscar=input("ingrese una palabra para buscar en el listado: ")
#     for linea in listado:
#         if buscar in linea:
#             print(f"la palabra {buscar} se encuentra en la linea: {linea}")

#Un programa que: 1. Pida tareas al usuario. 2. Las agregue al archivo usando modo "a". 3. Muestre todas las tareas al final.

# with open("Manejo_archivos/tareas.txt", "a") as lista_tareas:
#     for tarea in range(3):
#         lista_tareas.write(f"Tarea: {input(f"ingrese sus tareas pendientes: \n")}\n")


# with open("Manejo_archivos/tareas.txt", "r") as lectura:
#     contenido = lectura.read()

# print(contenido)

#Genera los números del 1 al 100 y guarda solo los pares en pares.txt

with open("Manejo_archivos/pares.txt", "w") as numpar:
    for numero in range(1,101):
        if numero % 2 == 0:
            numpar.write(f"{numero}\n")

#Dado un archivo con nombres, crea otro archivo con los mismos nombres en mayúsculas.

with open("Manejo_archivos/nombres.txt", "w") as names:
    
    for name in range(5):
        names.write(f"{input("Escriba el nombre de un compañero: ")}\n")



