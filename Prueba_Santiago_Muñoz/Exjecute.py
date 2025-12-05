from function import book_new, book_search, book_change, book_del, show_books, sale_book, sold_top, author_sold, income_shop

stock=[{"Título":"Pedro paramo","Autor":"Juan Rulfo","Categoría":"Novela","Precio":50000,"Cantidad":20,"Vendidos":0},
    {"Título":"Cien años de soledad","Autor":"Garcia Marquez","Categoría":"novela","Precio":90000,"Cantidad":40,"Vendidos":0},
    {"Título":"La cuadra","Autor":"Gilmer Mesa","Categoría":"Novela Historica","Precio":60000,"Cantidad":45,"Vendidos":0},
    {"Título":"Vida contemplativa","Autor":"Chul Hann","Categoría":"Filosofia","Precio":55000,"Cantidad":10,"Vendidos":0},
    {"Título":"Cosmos","Autor":"Carl Sagan","Categoría":"Ciencia","Precio":40000,"Cantidad":76,"Vendidos":0} ]
total_sold=[]

print("-"*5,"Libreria Nacional Bienvenido","-"*5)

#creation of menu where I add the functions to what is chosen by the user, 
# also there is menu within menu

while True:
    print("--->Menu<---:\n"
    "1 - Registrar un Libro\n"
    "2 - Consultar libro\n"
    "3 - Actualizar un libro\n"
    "4 - Eliminar un libro\n"
    "5 - Estadisticas de Venta\n"
    "6 - Vender libro\n"
    "7 - Ver libros vendidos\n"
    "8 - SALIR\n")

    user=input("Ingrese la opción => \n")

    if user == "1":
        New_list=book_new()
        stock.extend(New_list)

    elif user == "2":
        seek=input("¿Que libro desea buscar? \n ").capitalize()
        find=book_search(stock, seek)
        print(find)

    elif user == "3":
        show_books(stock)
        upda=input("¿Que libro desea actualizar? => ").capitalize()
        book_change(stock, upda)

    elif user == "4":
        print("\nVas a eliminar un libro")
        delbook=input("Ingresa el nombre del libro => ").capitalize()
        book_del(stock, delbook)

    elif user == "5":
        print("Menú para Estadísticas\n"
            "A - Top 3 de productos más vendidos\n"
            "B - Reporte de ventas totales agrupado por autor\n"
            "C - Calculo de ingreso neto y bruto (con y sin descuento)\n")
        look=input("Ingrese la opción =>\n").capitalize()
        if look == "A":
            print("---> Top 3 libros mas vendidos <---\n")
            sold_top(stock)
        elif look == "B":
            print("Autores mas vendidos => ")
            author_sold(stock)
        elif look == "C":
            print("---> Ingresos neto y bruto con y sin descuento <---")
            income_shop()
        else:
            ("Ingresaste una opción inválida")

    elif user == "6":
        new_sold=sale_book(stock)
        total_sold.append(new_sold)

    elif user == "7":
        print(total_sold)

    elif user == "8":
        print("Saliendo...")
        break
    else:
        print("Opcion incorrecta")