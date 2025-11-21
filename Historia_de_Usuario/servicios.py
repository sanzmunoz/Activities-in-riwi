def agregar_producto(): 
    lista=[]
    x=1
    print("fincion 1")
    while x!=0:
        produ=input("Nombre de producto => ")
        while True:
            try:
                cost=float(input("Cual es el precio del producto => "))
                if cost < 0:
                    print("Número erroneo")
                else:
                    break
            except ValueError: 
                print("Datos erroneos, ingrese de nuevo => ")

        while True:
            try:
                cant=int(input("Ingrese La cantidad del producto => "))
                if cant <0:
                    print("Número erroneo")
                else:
                    break
            except ValueError:
                print("Datos erroneos, ingrese de nuevo => ")

        producto={"nombre":produ, "precio":cost, "cantidad":cant}
        lista.append(producto)
        x=input("agregar otro producto s/n? ").lower()
        if x == "s":
            continue
        else:
            print("Entro")
            x=0
    return lista #Se agregan a una lista para utilizar despues

def muestra_inventarios(inventarios): #Funcion para agregar inventarios
    if not inventarios:  #verifica si el inventario esta vacio y muestra mensaje
            print("inventario vacio")
    
    for inventario in inventarios: #Muestra los productos almacenados
            print(f"Producto: {inventario["Nombre"]}|Precio: {inventario["Precio"]}|Cantidad: {inventario["Cantidad"]}")

def buscar_producto(inventarios):
    busqueda=input("¿Que producto desea buscar? \n ")
    for item in inventarios:
        if busqueda == item:
            print("El producto existe")

def actualizar_producto(inventarios):
    print("Vas a actualizar un producto")
    

def eliminar_producto(inventarios):
    print("Vas a liminar un producto") 

def inventario_estadisticas(inventarios): #Funcion para mostrar estadisticas basicas de los productos ingresados3
    suma=0 #creacion de variable para mostrar total de operacion
    regist=0 #variable para iterar en n productos
    for inventario in inventarios: #bucle para iterar en los productos existentes
        suma = (inventario["Precio"]*inventario["Cantidad"])+suma
        regist += 1
    print(f"El valor total del inventario es => ${suma} Pesos")
    print(f"La cantidad de productos registrados es: {regist}\n")