name=input("Nombre de producto => ") #pide al usuario el nombre del producto
while True: #Ciclo para que el usuario ingrese adecuadamente el costo
        try: #Estructura para manejo de errores
            cost=float(input("Costo del producto => ")) #Solicita al usuario el costo del producto
            break #si el costo esta bien sale dl ciclo while
        except ValueError: #captura el erro en caso de que ingrese un valor no numerico
                print("Dato erroneo, ingrese de nuevo => ") #solicita de nuevo el valor
while True: #Segundo ciclo para ingreso de la cantidad
        try: 
            qw=int(input("Cual es la cantidad de ese producto => ")) #Solicita ingreso de la cantiadad del producto
            print() #impresion vacia para dar espacio
            #Se muestran todos los datos  que ingreso el usuario y el costo total
            costo_total = cost*qw #Variable para almacenar la multiplicacion de dos valores
            print(f"Producto: {name}||Valor unitario: ${cost}||Cantidad: {qw}und||Costo total: ${costo_total}")
            print()
            break
        except ValueError:
                print("Dato erroneo, ingrese de nuevo => ")