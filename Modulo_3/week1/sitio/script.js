// let lastname = "San";
// const PI = 3.1415;
// let isActive = true;
// let message="Hello"
// let saludo = `hola ${lastname}`

// let fruits = ["pera", "sandia", "mango"]
// let persona = {
//     nombre: "ana", edad:28, ciudad:"bogota"
// }
// console.log(saludo) //interpolacion
// console.log(typeof lastname);//muestra el tipo de var
// console.log(typeof PI);
// console.log(typeof isActive);
// console.log(typeof fruits);
// console.log(typeof persona);
// console.log(persona.ciudad)

// function saludar(){
//     console.log("                         Hello")
// }

// function sumar(a,b){
//     let result;
//     result = a+b
//     console.log(result)
// }

// const sumar2 = (a,b) => a+b 
// console.log(sumar2(74,1))

// sumar(5,60)
// sumar(3.14,23)
// sumar("ho","la")
// saludar()

// const sumar2 = (a, b) => a + b;
// let num = prompt("ingese el num: ")
// let num2 = prompt("ingese el otro num: ");

// let suma = sumar2(+num,+num2)

// alert(`la suma es ${suma}`)

//pda nombre edad y ciudad y que diga si es mayor de edad
// let first = prompt("ingese el nombre: ");
// let lastname = prompt("ingese el apellido: ");
// let age = prompt("ingese la edad: ");

// if (age > 30){
//     console.log("mayor que 30")
// } else {
//     console.log("menor que 30")
// }

// const sumar2 = (a, b) => a + b;
// let suma = sumar2(first,lastname)
// alert(`su nombre es: ${suma}`)

// ingrese edad y año de naciemiento y calcule edad actual y diga si es mayor

/*
let first = prompt("ingese el nombre: ");
let year = prompt("ingese elaño de nacimiento ");
let message = ""

let actuallydate = new Date();
const yearActually = actuallydate.getFullYear();

let result = yearActually-year

if (result > 18){
    message = "mayor que 18"
} else {
    message= "menor que 18"
}

alert(`Su nombre es: ${first}, su edad actual es: ${result}`)
*/
/*
let num = 15;
let num2 = "15";
let msn;

if (num >= 8 || num <= 12) {
    console.log("Alguna condicion fue verdad");
} else {
    console.log("Es mayor que 20");
}

num > num2 ? msn = "se cumple la validacion" : msn = "no se cumple la validacion";
console.log(msn)
*/
/*
const sumar = (num1, num2) => {
    console.log ("Esto sirve para sumar")
    return `Function`
}
*/
/*
(function(){
    console.log("Se imprime la funcion autoejecutable")
}()
) */
/*
let stateUser = "deleted";
let msn;

switch(stateUser){
    case "active":
        msn="el usr puede ingresar"
        break
    case "noActive":
        msn="el usr no puede ingresar"
        break
    case "deleted":
        msn = "el usr se retiro"
        console.log(2+2)
        console.log(msn);
        break
    default:
        msn = "El usr no tiene estado" //cuando esta vacio la var
        break
}
console.log(msn)
*/

//Calcular el promedio y mostrarlo en el DOM.
//Usar una condicional para mostrar si el estudiante aprobó (promedio ≥ 3.0) o reprobó.
//usar validación de solo numeros en los campos de las notas.

/*
let notes = []

let nota;
for (let i =0; i<5;i++){
    nota = prompt("ingrese una nota:");
    notes.push(Number(nota));
    console.log(nota);
}
console.log(notes);
let suma=0;
notes.forEach(element => { suma+= element; });
console.log((suma/notes.length).toFixed(1));
*/

// let prom = nota/5;
// console.log(`el promedio es: ${prom}`)
// if(prom >= 3 ){console.log("aprobó")}
// else{console.log("Perdió")}

//const fruits=["fruta1","fruta2","fruta3","fruta4"]

/*for(let fruit of fruits){
    if(fruit != "fruta3"){
        console.log(`me gusta la ${fruit}`)
    }
}       */
/*
fruits.push("otra fruta")       //agrega a la lista
console.log(fruits.length);     //muestra la longitud de la lista
fruits.pop()                    //Elimina el ultimo elemento de la lista
*/

let num=0;
let task =[];

const increment = () =>{
    num++
    console.log(`El contador va en ${num}`);
    contador.innerHTML = `<h2>¡El contador es ${num}!</h2>;`
    task.push(title)
    console.log(task);
}

const miBoton = document.getElementById("myBoton");

miBoton.addEventListener("click", ()=> {
    increment();
});

let contador = document.getElementById("contador");
let title;
let input = document.getElementById("myInput");

input.addEventListener("input", (event) => {
    console.log("El texto es:", event.target.value);
    title= event.target.value    
});

/*let target = 7;

let numbers = [ 1,2,3,4,5,6,7,8,9,10]

let nota;
for (let i = 0; i<numbers.length;i++){
    for ()    
number = numbers[0];
    result = number + numbers[i];

    if(target === result){
        console.log()
    }

    console.log(target === result );
}

*/