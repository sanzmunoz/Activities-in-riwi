from servicios import agregar_producto
print("-"*5,"Menu para inventarios","-"*5)

inventarios = []

while True:
    print("OPCIONES:\n" \
    "1 - Agregar Producto\n" \
    "2 - Mostrar Inventario\n" \
    "3 - Buscar Producto\n" \
    "4 - Actualizar Producto\n" \
    "5 - Eliminar Producto\n" \
    "6 - Calcular Estadisticas\n" \
    "7 - SALIR")

    salida=input("Ingrese la opción => \n")

    if salida == "1":
        New_list=agregar_producto()
        inventarios.extend(New_list)

    # elif salida == "2":
    #     muestra_inventarios(inventarios)
    # elif salida == "3":
    #     buscar_producto(inventarios)
    # elif salida == "4":
    #     actualizar_producto(inventarios)
    # elif salida == "5":
    #     eliminar_producto(inventarios)
    # elif salida == "6":
    #     inventario_estadisticas(inventarios)
    elif salida == "7":
        print("Saliendo...")
        break
    else:
        print("Opcion incorrecta")
