
def agregar_producto(): #Funcion para agregar productos
    produ=input("Nombre de producto => ") #pide al usuario el nombre del producto
    print(f"El producto ingresado es: {produ}")
    while True: #bucles while-true: para recibir y ciclar el precio y producto
        try: #Se implemento try-except para capturar error de tipado
            cost=float(input("Cual es el precio del producto => ")) #Solicita ingreso de la cantidad del producto
            break #usado para terminar el bucle 
        except ValueError: #recibe el error en caso que se ingrese erroneamente
            print("Dato erroneo, ingrese de nuevo => ")
    while True: #bucles while-true: para recibir y ciclar el precio y producto
        try: #Se implemento try-except para capturar error de tipado
            cant=int(input("Ingrese La cantidad del producto => "))
            break #usado para terminar el bucle 
        except ValueError: #Captura el error
            print("Dato erroneo, ingrese de nuevo => ")
    
    producto={ #Creacion de diccionario para almacenar productos ingresados
        "Nombre":produ,
        "Precio":cost,
        "Cantidad":cant
    }
    inventarios.append(producto) #Se agregan a una lista para utilizar despues
    

def muestra_inventarios(): #Funcion para agregar inventarios
    if not inventarios:  #verifica si el inventario esta vacio y muestra mensaje
            print("inventario vacio")
            
    for inventario in inventarios: #Muestra los productos almacenados
            print(f"Producto: {inventario["Nombre"]}|Precio: {inventario["Precio"]}|Cantidad: {inventario["Cantidad"]}")

def muestra_estadisticas(): #Funcion para mostrar estadisticas basicas de los productos ingresados3

    suma=0 #creacion de variable para mostrar total de operacion
    regist=0 #variable para iterar en n productos
    for inventario in inventarios: #bucle para iterar en los productos existentes
        suma = (inventario["Precio"]*inventario["Cantidad"])+suma
        regist += 1
    print(f"El valor total del inventario es => ${suma} Pesos")
    print(f"La cantidad de productos registrados es: {regist}\n")

print("+"*10,"Welcome","+"*10,"\n") #Mensaje de bienvenida

inventarios=[] #Creacion de lista para inventario
opcion=0 #variable de validacion para ingresar al menu

while opcion!=4: #ingreso al bucle del menu con validación
    print("1 => Agregar un producto") #los siguientes print muestran las opciones para el usr
    print("2 => Mostrar Inventario")
    print("3 => Calcular Estadísticas")
    print("4 => Salir \n")

    try: #Try-except para validar que se ingrese una opcion numerica y entero para el menu
        opcion=int(input("Ingrese la opción => \n"))
    except ValueError:
        print("XX Dato erroneo XX")
        print("Ingrese la opción => ")

    if opcion == 1 : #if que recibe la opcion 1 del menu
        agregar_producto() #funcion para recibir el producto

    elif opcion == 2: #opcion para inventarios de productos
        muestra_inventarios()

    elif opcion == 3: #Estadísticas
        muestra_estadisticas()

    elif opcion == 4: #Salir del programa
        print("-"*5,"Chao con adiós","-"*5)

#El objetivo de la semana fue aprender la implementacion de funciones, el manejo de listas y diccionarios
# para implementrlos en un programa que los pudiera utilizar