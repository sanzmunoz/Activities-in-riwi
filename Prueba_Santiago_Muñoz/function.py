import datetime
sold_history=[]

#Function to add a new book, cycling with while to avoid typing errors, at the end they are added to a 
#dictionary and then to list, which is returned and added to the main list
def book_new():
    list=[]
    while True:
        book = input("Título de libro => ").strip().capitalize()
        if book:
            print(f"El título del libro es {book}")
            break
        else:
            print("El título no puede estar vacío ni contener solo espacios. Intente de nuevo.\n")

    while True:
        author = input("Autor de libro => ").strip()
        if author:
            print(f"Confirmacion de autor {author}")

            while True:
                category = input("Categoria del libro => ").strip().capitalize()
                if category:
                    print(f"la categoria es {category}")
                    break
                else:
                    print("la categoria no puede estar vacío ni contener solo espacios. Intente de nuevo.\n")
            break
        else:
            print("El nombre del autor no puede estar vacío ni contener solo espacios. Intente de nuevo.\n")

    while True:
        try:
            cost=float(input("Cual es el precio del libro => "))
            if cost < 0:
                print("\nNÚMERO ERRONEO\n")
            else:
                break
        except ValueError: 
            print("Datos erroneos, ingrese de nuevo => ")
    while True:
        try:
            cant=int(input("Cuantos libros va a ingresar => "))
            if cant <0:
                print("Número erroneo")
            else:
                break
        except ValueError:
            print("Datos erroneos, ingrese de nuevo => ")
    complete={"Título":book,"Autor": author,"Categoría": category,"Precio":cost, "Cantidad":cant, "Vendidos": 0}
    list.append(complete)
    return list

#Function that iterates on the book list and returns the requested book
def book_search(books, search):
    for item in books:
        if item["Título"] == search:
            return item

#Function showing all books stored at the requested time
def show_books(books):
    for display in books:
        print(display)

#function that receives several parameters and allows to change or update each of the values of the 
# chosen keys, validated when the entered is correct and returning the change made
def book_change(books, book, new_author=None, new_category=None, new_price=None, new_qua=None):
    for item in books:
        if item["Título"] == book:
            while True:
                new_name=input("Ingresa el cambio del título:  ").strip().capitalize()
                if new_name:
                    print(f"Título es {new_name}")
                    item["Título"]=new_name
                    break
                else:
                    print("No escribiste nada. Intente de nuevo.\n")
            print("\nActualizado")
            chaut=input("\n¿Deseas cambiar el autor? s/n: ").lower()
            if chaut == "s":
                while True:
                    new_author=input("Ingrese el nuevo autor: ").strip()
                    if new_author:
                        print(f"Cambio en autor: {new_author}")
                        item["Autor"]=new_author
                        break
                    else:
                        print("No escribiste nada. Intente de nuevo.\n")
            else:
                print("*** Ok")
            chcat=input("\n¿Deseas cambiar la categoria? s/n: ").lower()
            if chcat =="s":
                while True:
                    new_category=input("Ingrese la categoría: ").strip().capitalize()
                    if new_category:
                        print(f"Cambio en categoría: {new_category}")
                        item["Autor"]=new_category
                        break
                    else:
                        print("No escribiste nada. Intente de nuevo.\n")
                print("\nActualizados")
            rponse=input("\nDeseas cambiar el precio y cantidad? s/n: ").lower()
            if rponse == "s":
                while True:
                    try:
                        new_price=float(input("Ingrese el nuevo precio: "))
                        if new_price < 0:
                            print("\nNÚMERO ERRONEO\n")
                        else:
                            item["Precio"]=new_price
                            break
                    except ValueError: 
                        print("Datos erroneos, ingrese de nuevo => ")
                while True:
                    try:
                        new_qua=int(input("Ingrese la nueva cantidad: "))
                        if new_qua <0:
                            print("\nNÚMERO ERRONEO\n")
                        else:
                            item["Cantidad"]=new_qua
                            break
                    except ValueError:
                        print("Datos erroneos, ingrese de nuevo => ")
                print("\nActualizados")
            else:
                print("Ok")
            return item

#Function to delete a book, this removes the entire dictionary and displays a confirmation message
def book_del(books, book):
    print("----> Si el producto que escribiste no existe en el inventario, volveras al menu anterior")
    for i, item in enumerate(books):
        if item["Título"] == book:
            del books[i]
            print("\n---> Datos eliminados <---\n")

#Function to sell books, which registers the name of the customer, allows a discount on purchase, 
# also checks that there are enough units in stock and adds sales to a dictionary that is added to a list
def sale_book(books):
    client = input("Nombre del comprador: ").title()
    kind = input("Tipo de comprador Normal ó Vip: ").capitalize()
    
    sold_book = input("Libro vendido: ").capitalize()
    fbook = book_search(books, sold_book)

    if not fbook:
        print("Libro no encontrado.")
        return

    quant = int(input("Cantidad vendida: "))

    if quant > fbook["Cantidad"]:
        print(f"No hay suficientes en stock. Disponibles: {fbook["Cantidad"]}")
        return

    if kind == "Vip":
        off = .15
    if kind == "Normal":
        off = 0

    fbook["Cantidad"] -= quant
    fbook["Vendidos"] += quant

    price = quant * fbook["Precio"]
    final_price = price - (price * off)

    sold_finally = { "Cliente": client, "Libro Vendido": fbook["Título"], "Cantidad": quant, 
                    "Fecha": datetime.date.today().isoformat(), "Descuento %": off*100,"Precio":price, "Precio Total": final_price
                    }

    sold_history.append(sold_finally)
    print("¡Venta registrada!")
    return sold_history

#Function that uses sorted to sort and lambda to iterate, ordering from highest to lowest the 
# best-selling books showing only the first 3 that meet
def sold_top(sales):
    ordened = sorted(sales, key=lambda v: v["Vendidos"], reverse=True)
    for result in ordened[:3]:
        print(f"Libro: {result['Título']} <---> Vendidos: {result["Vendidos"]}")

#Function that uses sorted to sort and lambda to iterate, ordering from higher to lower the best-selling 
# books by author showing complete list and dictionary
def author_sold(author):
    ordened = sorted(author, key=lambda b: b["Cantidad"], reverse=True)
    for count in ordened:
        print(f"Autor: {count["Autor"]} <---> Vendidos: {count["cantidad"]}")

#Function that shows the net and gross sales taking the list of what sold and showing on screen 
# the totals for both parameters
def income_shop():
    gross = sum(sold["Precio"] for sold in sold_history)
    net = sum(sold["Precio Total"] for sold in sold_history)
    print(f"Ingreso bruto es: ${gross}")
    print(f"Ingreso neto es: ${net}")