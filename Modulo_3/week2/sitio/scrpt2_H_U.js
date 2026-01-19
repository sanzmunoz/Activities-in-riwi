const product = { //Creacion del objeto productos
    stock_1:{id: "00",
    nombre : "teclado",
    precio : "2000"},

    stock_2:{id: "01",
    nombre : "mouse",
    precio : "1000"},

    stock_3:{id: "02",
    nombre: "pantalla",
    precio: "5000"},
    };

//creacion de set con lista de numeros repetidos y map()
const nums = new Set([1, 6, 4, 2, 5, 3, 5, 2, 4]); 

//formato para cambiar objeto a Map
const productMap = new Map(Object.entries(product));

console.log(nums);

// se agregan nuevos números a la lista con el método .app()
nums.add(7);
nums.add(4);

// Verificacion de la exitencia de un número en la lista
console.log(`El numero 2 existe en la lista? :${nums.has(2)}`);
console.log(nums);

//Se elimina un número
nums.delete(1);

//iterador para mostrar numeros de lista
for (const num of nums) {
    console.log(num);
}

//iteador especifico para mostrar elementos del map
productMap.forEach((keys, values)=>{
    console.log(keys,values)
})


