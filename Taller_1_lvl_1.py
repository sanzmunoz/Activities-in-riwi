#Con lo siguiente el usuario ingresa su nombre y edad
name=input("Ingrese su nombre => ")
age=int(input("Ingrese su edad => "))

print(f"Hola {name}, tienes {age} años.") #Imprime el nombre y edad

#Usuario ingresa datos de dos números
num1=float(input("Ingrese un núnmero => "))
num2=float(input("Ingrese otro núnmero => "))
sum=num1+num2 #Suma de los datos
print(f"La suma de esos numeros es: {sum}") #Muestra la suma de los datos

print()
print("*" *10, "|| Área de un triangulo con los mismos datos anteriores ||","*"*10)
print()

#Se usa la funcion abs() para hacer positivo los datos antes en caso que sean negativos
num1=abs(num1)
num2=abs(num2)
areat=(num1*num2)/2 #Calculo de aŕea del triangulo en una variable
print(f"El área del triangulo con base {num1} y altura {num2} es => {areat}") #Muestra el dato final del area

print()
print("*"*10, "|| Centígrados a Fahrenheit ||", "*"*10)
print()
print(f"Si {num1} es un valor en grados Centígrados => {num1}°C") #Muestra el valor que se va a convertir a fahrenheit 
change= (1.8*num1)+32 #formula de equivalencia de temperaturas
print(f"Este valor en grados Fahrenheit es => {change}°F") #impresion de datos finales

print()
print("*" *10,"||Tipos de Datos||","*" *10)
print()
#Muestra los tipos de datos de las variables
print(f"Los números son de tipo: {type(num1)}. Tu nombre es de tipo: {type(name)}. Tú edad es de tipo: {type(age)}.") 

print()
print("*" *10,"||El Futuro||","*" *10)
print()
print(f"{name}, en 10 años tendras => {age+10}, si sigues vivo c:") #suma la edad actual del usuario para dentro de 10 años