/*
----------------METODOS STRING 
toUpperCase():  Convierte el texto a mayúsculas
toLowerCase():  Convierte el texto a minúsculas
trim():         Elimina espacios en blanco al inicio y al final
split():        Divide el string en un array según un separador
slice():        Extrae una parte del string
substring():    Similar a slice, extrae caracteres entre dos índices
replace():      Reemplaza la primera coincidencia de un texto
replaceAll():   Reemplaza todas las coincidencias de un texto
includes():     Verifica si contiene un texto específico
startsWith():   Verifica si comienza con un texto específico
endsWith():     Verifica si termina con un texto específico
indexOf():      Devuelve la posición de la primera coincidencia
charAt():       Devuelve el carácter en una posición específica
repeat():       Repite el string n veces
padStart():     Rellena el inicio hasta alcanzar una longitud
padEnd():       Rellena el final hasta alcanzar una longitud
*/

/*
-----------MÉTODOS NUMBER
toFixed():          Formatea el número con una cantidad específica de decimales
toPrecision():      Formatea el número a una longitud total específica
toString():         Convierte el número a string (puede especificar la base)
toExponential():    Convierte el número a notación exponencial
Number.isInteger(): Verifica si es un número entero
Number.isNaN():     Verifica si el valor es NaN
Number.parseFloat():Convierte un string a número decimal
Number.parseInt():  Convierte un string a número entero
Number.isFinite():  Verifica si es un número finito
Math.round():       Redondea al entero más cercano
Math.floor():       Redondea hacia abajo
Math.ceil():        Redondea hacia arriba
Math.abs():         Devuelve el valor absoluto
Math.max():         Devuelve el mayor de los números dados
Math.min():         Devuelve el menor de los números dados
Math.random():      Genera un número aleatorio entre 0 y 1
*/

import{saludar, UpperCase} from "./utils.js"

const today = new Date
console.log(today);

const dateString= today.toString()

const day = dateString.slice(0,3)//los numeros son la posicion
const date = dateString.slice(4,15)
const hour = dateString.slice(16,24);

const days = {
    Mon :"Lunes",
    Tue :"Martes",
    Wed :"Miercoles",
    Thu :"Jueves",
    Fri :"Viernes",
    Sat :"Sábado",
    Sun :"Domingo"
}

const month = {
    1:"Enero",
    2:"Febrero",
    3:"marzo",
}

let buton = document.getElementById("date");
buton.addEventListener("click",()=> {
    const finallyDate=`Hoy es ${days[day]} de ${date} y la hora es ${hour}`;
    if (resultDate) resultDate.textContent = finallyDate
    console.log(`Hoy es ${days[day]} de ${date} y la hora es ${hour}`);
})//pendiente organizar en funciuon aparte

let name = "santiago"

console.log(UpperCase(name));

saludar()