inventarios = []

def agregar_producto(inventarios, produ, cost, cant): #Funcion para agregar productos
    #inventarios = []

    while True:
        try:
            produ=input("Nombre de producto => ") #pide al usuario el nombre del producto
            cost=float(input("Cual es el precio del producto => ")) #Solicita ingreso de la cantidad del producto
            cant=int(input("Ingrese La cantidad del producto => "))
            break #usado para terminar el bucle 
        except ValueError: #Captura el error
            print("Datos erroneos, ingrese de nuevo => ")

    producto={"nombre":produ, "precio":cost, "cantidad":cant}
    inventarios.append(producto)
    return inventarios #Se agregan a una lista para utilizar despues

def muestra_inventarios(): #Funcion para agregar inventarios
    if not inventarios:  #verifica si el inventario esta vacio y muestra mensaje
            print("inventario vacio")
    
    for inventario in inventarios: #Muestra los productos almacenados
            print(f"Producto: {inventario["Nombre"]}|Precio: {inventario["Precio"]}|Cantidad: {inventario["Cantidad"]}")

def buscar_producto():
    busqueda=input("¿Que producto desea buscar? \n ")
    for item in inventarios:
        if busqueda == item:
            print("El producto existe")

def actualizar_producto():
    print("Vas a actualizar un producto")
    

def eliminar_producto():
    print("Vas a liminar un producto") 

def inventario_estadisticas(): #Funcion para mostrar estadisticas basicas de los productos ingresados3
    suma=0 #creacion de variable para mostrar total de operacion
    regist=0 #variable para iterar en n productos
    for inventario in inventarios: #bucle para iterar en los productos existentes
        suma = (inventario["Precio"]*inventario["Cantidad"])+suma
        regist += 1
    print(f"El valor total del inventario es => ${suma} Pesos")
    print(f"La cantidad de productos registrados es: {regist}\n")