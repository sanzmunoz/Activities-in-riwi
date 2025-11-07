# print()
# print("*" *20, "|| Bucles y Repetición ||","*"*20)
# print()

# print()
# print("*" *10, "|| Contador ascendente ||","*"*10)
# print()

# for i in range(1,11):
#     print(i)
#     i +=1

# print()
# print("*" *10, "|| Sumatoria de 1 al n digito ||","*"*10)
# print()

n=int(input("Ingrese un número natural => "))
for i in range(n):
    digit=i
    result=digit+(digit+1)
    print(result)
    i+=1
    
# print()
# print("*" *10, "|| Tabla de multiplicar ||","*"*10)
# print()

# ing=float(input("Ingrese un número => "))
# print(f"Tabla del {ing}:")
# for i in range (1,11):
#     mul=ing*i
#     print(f"{ing} * {i} = {mul}")

# print()
# print("*" *10, "|| Contador regresivo con while. ||","*"*10)
# print()

# import time
# number=6
# print("Cuenta Regresiva:")
# while number != 0:
#     print(number)
#     time.sleep(0.8)
#     number -=1
#     if number == 0:
#         print("KaBuN!")

# print()
# print("*" *10, "|| Adivina el número. ||","*"*10)
# print()

# import random
# number=-5
# digit=random.randint(1,10)
# # while number != digit:
# #     number=int(input("Adivina un numero del 1 al 10 => "))
    
# #     if number == digit:
# #         print("Lo lograste")
# #     else:
# #         print("Sigue intentando :c")
    
# print()
# print("*" *10, "|| Suma infinita. ||","*"*10)
# print()

# while number !=0:
#     digit=int(input("ingrese un número: "))
#     result=int(input("ingrese otro número: "))
#     sum=digit+result
#     print(f"la suma es: {sum}")
#     number=int(input("Ingrese un número => "))