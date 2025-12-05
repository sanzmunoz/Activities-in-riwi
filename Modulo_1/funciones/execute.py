from Funciones import organize_list, contador_vocales

number= [12,-8,0,25,-15,4,-20,0,7,-3,10,-5,1,0,"pasa",18,-2,6,-12,22,-9,3,-1,5,0,"Coca",15,-6,11,-4,9,-7]
organize_list(number)

lista=input("ingrese una frase => ")
result=contador_vocales(lista)
print(result)