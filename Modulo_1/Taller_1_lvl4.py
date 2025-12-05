# # Objetivo: Crear, recorrer, modificar y eliminar elementos en listas.
# #     - Lista de frutas.
# #     - Agregar y eliminar frutas.
# #     - Buscar un elemento en la lista.
# #     - Lista de números y promedio.
# #     - Números pares: guardar solo los pares.
# #     - Eliminar duplicados.
# import time
# print()
# print("*" *10, "|| Lista de frutas ||","*"*10)
# print()

# fruits=["Fresa", "Sandía", "Papaya", "Melón"] # *Lista* de frutas
# print(fruits)
# print("Agregando una fruta...")
# time.sleep(1.5)
# print()
# nfruit=input("Agregue una fruta=>")
# fruits.append(nfruit) #Con .append se agrega un elemento a la lista
# print(fruits)
# print("Agregando una fruta...")
# time.sleep(1.5)
# print()
# fruits.insert(2, "Mango") #Con .insert se elige en que posición agregar el elemento
# print(fruits)
# print("Eliminando una fruta...")
# time.sleep(0.8)
# fruits.remove("Fresa")
# print(fruits)
# eliminate=fruits.pop()#Elimina el ultimo elemento de la lista o el escogido en el ()
# print(f"Se elimino: {eliminate} y la lista quedo: {fruits} frutas")
# print()
# time.sleep(2)
# print(f"En la lista hay {len(fruits)}")#Muestra cuanta cantidad de elementos en la lista hay
# print(f"El segundo elemento es: {fruits[1]}")#Muestra el segundo elemento de la lista


#print("*" *10, "|| Lista de numeros. ||","*"*10)


nums=[29,12,28,15,20,39,29,28,30,20,36,33,34,36,21,7]
num_list=nums[:]

for i in num_list:
    if i % 2 != 0:
        nums.remove(i)

repeat=nums.count(20)
print(repeat)
print(f"Lista pares: {nums}")
nums.sort()
print(f"Lista ordenada: {nums}")



# nums.sort()
#print(f"Lista sin números repetidos: {list(set(nums))}")
#print(f"Lista sin repetidos: {nums}")