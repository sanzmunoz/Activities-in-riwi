print()
print("*" *20, "|| Condicionales ||","*"*20)
print()

print()
print("*" *10, "|| Verifica tu edad ||","*"*10)
print()

age=int(input("Ingrese su edad => ")) #solicita al usuario un dato de edad
if age>=18:
    print("Usted es mayor de edad")
else:
    print("Usted es menor de edad")

print()
print("*" *10, "|| Verificación de dato númerico ||","*"*10)
print()

num1=float(input("Ingrese un número cualquiera => "))
if num1>0:
    print("El número que ingresaste es positivo.")
elif num1<0:
    print("El número que ingresaste es negativo.")
else:
    print("Ingresaste un cero.")

print()
print("*" *10, "|| Verificación de número par o impar ||","*"*10)
print()

if num1 == 0 :
    print("Ingresaste un cero.")
elif (num1%2) == 0:
        print("El número ingresado anteriormente es par.")
else:
    print("El número ingresado anteriormente es impar.")

print()
print("*" *10, "|| Calculadora ||","*"*10)
print()
num2=float(input("Ingrese otro número cualquiera => "))
operator=input("¿Que operación desea realizar?(+ - * /) Ingresa el simbolo")
if operator == "+":
    print(f"La suma de {num1} y {num2} es => {num1+num2}")
elif operator == "-":
    print(f"La resta de {num1} y {num2} es => {num1-num2}")
elif operator =="*":
    print(f"La multiplicación de {num1} y {num2} es => {num1*num2}")
elif operator =="/":
    print(f"La división de {num1} y {num2} es => {num1/num2}")
else:
    print("Ingresaste un simbolo equivocado, adios.")

print()
print("*" *10, "|| Nota final ||","*"*10)
print()
calificate=float(input("Ingrese la nota final de 0 a 100 => "))
if calificate >= 0 and calificate <70:
    print("Reprobado")
elif calificate >= 70 and calificate <90:
    print("Aprobado")
else:
    print("*"*5,"Excelente","*"*5)

print()
print("*" *10, "|| Comparador de tres números: mayor y menor ||","*"*10)
print()

print("Con los datos ingresados anteriormente revisaremos cual es mayor y menor => ")

if num1 > num2:
    print(f"El {num1} es mayor que {num2}")
else:
    print(f"El {num2} es mayor que {num1}")