# #impuestos
# def impuesto(precio, iva=.19):
#     return precio+(precio*iva)

# valor_producto=float(input("valor unitario del producto: $ "))
# print(impuesto(valor_producto))

# promedio seguro
# def promedio(lista):
#     sum=0
#     for i in lista:
#         div=len(lista)
#         sum=sum+i
#     return sum/div

# numeros=[]
# ingreso=1
# while ingreso !=0:
#     num=float(int(input("ingrese un numero a la lista => ")))
#     numeros.append(num)
#     print("Escriba 0 para salir o un número para continuar")
#     ingreso=int(input("=>"))


# print(f"La lista es {numeros}")
# print(f"El promedio de la lista es: {promedio(numeros)}")
###############################
#Contar vocales
#contar las bocales que tiene un texto

def contador_vocales(lista):
    vocales={"a":0,"e":0,"i":0,"o":0,"u":0}
    for letra in lista:
        if letra in vocales.keys():
            vocales[letra]+=1
    return vocales

# lista="En la esquina de un cuarto, se encontraba aquella silla..."
# print(contador_vocales(lista))
# ###############################################
# def presentar (nombre, edad):
#     print(f"my name is {nombre} and i am {edad} years old")

# presentar(nombre="ana", edad=52)

# def listar_compras(*items, **extras):
#     print("Items",items)# el *args empaqueta posicionales en una tupla
#     print("extras",extras) # **kwargs enpaqueta nombrados en un diccionario

# listar_compras("leche","pan", tienda="Del barrio", metodo_pago="biyuyo")

# def min_max(numeros):
#     return min(numeros), max(numeros)

# mi,ma=min_max([3.2,4.5,4.0,2.9])
# print("min", mi,"max",ma)

# def potencia(n): #Se define la funcion potencia que se le pasa un parametro n
#     def elevar(x): #defino otra funcion anidada elevar que se le asigna x
#         return x ** n #regreso el resultado de x elevado a un numero
#     return elevar # regreso el valor en elevar

# cuadrado = potencia(2) #creo una variable y le asigno la fn potencia con el parametro 2
# cubo=potencia(3) #creo otra variable y le aasigno la fn potencia con parametro 3
# print(cuadrado(5),cubo(2))
# #con la asignacion de potencia 2 asigno la n y cuando le asigno 5 a la variable cuadrado

# doblar = lambda x: x * 2
# print(doblar(4))  # 8

# # Útil para ordenar
# nombres = ["ana", "Pedro", "luis"]
# print(sorted(nombres, key=lambda s: s.lower()))#ordena la lista alfabeticamente

# #Hacer una funcion que reciba dos argumentos nombre y apellido
# #si recibe una señal en alto que los devulva en mayus
# #por defecto tiene un bajo entonces los devuelve con la inicial en mayus

# def nombre_completo(nombre, apellido, mayus=False):
#     completo = f"{nombre.strip()} {apellido.strip()}"#.strip() para eliminar espacios
#     return completo.upper() if mayus else completo.title()#.upper para mayus

# print(nombre_completo("  ana ", " pérez  "))          # Ana Pérez
# print(nombre_completo("pedro", "garcía", mayus=True)) # PEDRO GARCÍA

# # x = 10

# # def valor():
# #     x=20
# #     print(x)

# # valor()
# # print(x)

# nums=[12,0,45,6]
# animals=["cat","dog","elephant","snake"]

# def FirstAndLast(cosas):
#     first=cosas[0]
#     last=cosas[-1]
#     return first,last

# animal1,animal2=FirstAndLast(animals)
# print(animal1,animal2)

# def doblarFunc(num):
#     result=num*2
#     return result

# res=doblarFunc(40)
# print("funcion normal",res)

# doblar = lambda num: num*2 #lambda utiliza menos memoria y resume la escritura de una funcion

# res=doblar(33)
# print("Funion nueva: ", res)

#Palindromo funcion que ignore espacios y tildes simples
#Debe recorrer un str y eliminar todas las tildes y los textos.

#Dada una lista de numeros crea 3 nuevas listas con numeros negativos positivos y ceros
def organize_list(list):
    zero = []
    positive = []
    negative = []

    for num in list:
        try:
            if num == 0:
                zero.append(num)
            elif num < 0 :
                negative.append(num)
            elif num > 0:
                positive.append(num)
            else:
                print(f"{num} --> No es un numero")
        except TypeError:
            print(f"{num} No es un numero")
    print(zero,"\n",positive,"\n",negative)