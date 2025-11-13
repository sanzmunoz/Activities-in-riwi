#       MENU
print("+"*10,"Welcome","+"*10)
print()

inventarios=[]

while True:
    print("1 => Agregar un producto")
    print("2 => Mostrar Inventario")
    print("3 => Caluclar Estadísticas")
    print("4 => Salir")
    print()
    try: 
        opcion=int(input("Ingrese la opción => "))
    except ValueError:
        print("Dato erroneo")
        print("Ingrese la opción => ")

    if opcion == 1 :
        produ=input("Nombre de producto => ") #pide al usuario el nombre del producto
        while True:
            try: 
                cost=float(input("Cual es el precio del producto => ")) #Solicita ingreso de la cantiadad del producto
                break            
            except ValueError:
                print("Dato erroneo, ingrese de nuevo => ")
        while True:
            try:
                cant=int(input("Ingrese La cantidad del producto => "))
                break
            except ValueError:
                print("Dato erroneo, ingrese de nuevo => ")
        
        producto={
            "Nombre":produ,
            "Precio":cost,
            "Cantidad":cant
        }
        inventarios.append(producto)
    
    elif opcion == 2:
        if not inventarios:
            print("inventario vacio")
            
        for inventario in inventarios:
            print(f"Producto: {inventario["Nombre"]}|Precio: {inventario["Precio"]}|Cantidad: {inventario["Cantidad"]}")
        
    elif opcion == 3: #Estadísticas
        suma=0
        regist=0
        for inventario in inventarios:
            suma = (inventario["Precio"]*inventario["Cantidad"])+suma
            regist += 1
        print(f"El valor total del inventario es => ${suma} Pesos")
        print(f"La cantidad de productos registrados es: {regist}")
        
    elif opcion == 4:        
        print("-"*5,"Chao con adiós","-"*5)
        break

def agregar_producto(produ, cost, cant):
    produ=input("Nombre de producto => ") #pide al usuario el nombre del producto
    while True:
        try: 
            cost=float(input("Cual es el precio del producto => ")) #Solicita ingreso de la cantiadad del producto
            break            
        except ValueError:
            print("Dato erroneo, ingrese de nuevo => ")
    while True:
        try:
            cant=int(input("Ingrese La cantidad del producto => "))
            break
        except ValueError:
            print("Dato erroneo, ingrese de nuevo => ")
    return 