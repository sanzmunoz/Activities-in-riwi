while True:
    print("Opciones =>")
    print("1. Agregar producto =>")
    print("2. Ver productos =>")
    print("3. Salir =>")

    opcion=input("Ingrese la opcion=> ")
    if opcion =="1":
        name=input("Nombre de producto => ")
        while True:
            try:
                cost=float(input("Costo del producto => "))
                break
            except ValueError:
                print("Dato erroneo, ingrese de nuevo => ")
            qw=int(input("Cual es la cantidad de ese producto => "))
            
        

# elif opcion == 2:
#     products=["alguno"]

# else:
#     print("aio.")
#     break



# costo_total=cost*qw

# #imprime los datos que ingreso el usuario
# print(f"producto: {name}| Precio unitario: {cost}| cantiadad: {qw}| Costo total calculado: {costo_total}")

