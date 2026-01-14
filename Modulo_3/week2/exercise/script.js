/*
4. Elimina duplicados de un array usando Set.
5. Crea un Map con claves no string.
6. Usa typeof para validar un número.
7. Convierte un texto a mayúsculas.
*/

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