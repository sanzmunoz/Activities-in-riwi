console.log("readyyyyy");

const numbers = [1,2,3,4]

const doubles = numbers.map((num)=> num *8)

console.log(doubles); //retorna una array nuevo con la nueva modificacion

numbers.forEach((number)=>{
    console.log(`El doble es ${number**2}`);
})

const coders = [
    { name: "edwin", cohort: 1 },
    { name: "Milton", cohort: 2 },
    { name: "Javier", cohort: 3 }
];

coders.forEach((coder)=>{
    const message = `Hola ${coder.name} pertenece a cohorte ${coder.cohort}`
    console.log(message);
})

const coders2 = [
  { name: "edwin", cohort: 1 },
  { name: "Milton", cohort: 2 },
  { name: "Javier", cohort: 3 },
  { name: "miguel", cohort: 4 },
  { name: "Camilo", cohort: 7 },
  { name: "Hugo", cohort: 6 },
];

const user= {
    name:"Kevin",
    lastName:"Restrepo",
    age:29,
    email: "kevin@correo.com",
    addres:{
        street: "avenida siemore viva",
        number:123,
        city:"medellín"
    }
}

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

let MyMap = new Map();
MyMap.set('name', 'antony');
MyMap.set()
MyMap.set(123, 'ID');

console.log(MyMap);
console.table(coders2)

