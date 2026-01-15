/*
4. Elimina duplicados de un array usando Set.
5. Crea un Map con claves no string.
6. Usa typeof para validar un número.
7. Convierte un texto a mayúsculas.
*/
/*
import { useCallback } from "react";

// 1. Crea un array de números y usa map para multiplicarlos por 3.
const numbers = [1,2,3,4,5,6,7,8,9,0]
const triple = numbers.map((num)=> num*3)
console.log(triple);

// 2. Usa forEach para imprimir nombres de un array.
const names = ["valentina", "carlos", "santiago", "andres"]
names.forEach(name=>{
    console.log(`la persona ${name} sabe`);
});
// 3. Crea un objeto car y recórrelo con for...in
const cars = {
    
}

//-------
function createmult(){
    return function(){
        return 'El retorno interno'
    }
}

const result = createmult()

const response = result()

console.log(response);
//-------------------

//-------
setTimeout(function(){
    console.log("se imprime algo")
},6000)

//-----------
console.log("inicio");

const apiKey = ""
const url =""

setTimeout((console.log("Cuatro"),0))
*/
//----------------
/*
function saludarOtraFunc(name, callback){
    console.log(`Hola ${name}`);
    
    callback(2,4)
}

saludarOtraFunc("juan", (a,b)=>{
    console.log(a+b);    
})
*/
//----------------
/*
const objeto = {
    name : "hugo",
    lastname : "mbappe",
    isActive: true,

    saludar2: ()=>{
        console.log(`hello ${objeto.name}`);
        
    },
    saludar: function(){
        console.log(`hello ${this.name}`);
        console.log(`hello ${this.lastname}`);
        
    }
}

objeto.saludar()
console.log(objeto.saludar2());
*/
//------------------
/*
let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("First"), 1000);
});

promise
    .then((result) => {
    console.log(result); // "First"
    return result + " operation";
    })
    .then((result) => {
    console.log(result); // "First operation"
    return result + " completed";
    })
    .then((result) => {
    console.log(result); // "First operation completed"
    });
*/

async function procesarDatos() {
    console.log('inicio');
    let resultado = await new Promise((resolve)=>{
        setTimeout(()=> resolve('datos procesados'),2000);
    }); 
    console.log(resultado);
    console.log('fin');
}
procesarDatos();
console.log('Despues');
