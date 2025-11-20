import servicios
print("-"*5,"Menu para inventarios","-"*5)

salida=0
while salida!=7:
    print("OPCIONES:" \
    "1 - Agregar Producto" \
    "2 - Mostrar Inventario" \
    "3 - Buscar Producto" \
    "4 - Atualizar Producto" \
    "5 - Eliminar Producto" \
    "6 - Calcular Estadisticas" \
    "7 - SALIR")

    salida=int(input("Ingrese la opcion => "))
    if salida == 1:
        servicios.agregar_producto()

    elif salida == 2:
        servicios.muestra_inventarios()

    elif salida == 3:
        servicios.buscar_producto()

    elif salida == 4:
        servicios.actualizar_producto()

    elif salida == 5:
        servicios.eliminar_producto()

    elif salida == 6:
        servicios.inventario_estadisticas()

    elif salida == 7:
        print("Saliendo...")
        break
