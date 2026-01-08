console.log("Bienvenido a JS");
//seleccion de elemento por clase,devuelve una colección
const buton = document.getElementByClassName("first");

//Selección de elemento por ID, devuelve elemento
const info = document.getElementById("text");

//Selección de elemento por etiqueta, devuelve una colección
// const parrafo = document.getElementsByTagName("p");

//Query Selector (mas moderno y flexible)
//const elemento = document.querySelector(".miClase"); //Primer elemento
//const elementos = document.querySelector(".miClase"); //Todos los elementos

//Selecciona el elemento
const titulo = document.getElementById('title');
//leer contenido
console.log(titulo.textContent);//Titulo original
//Cambiar contenido
titulo.textContent = "Nuevo Título";
//Cambiar estilos
titulo.style.color = "blue";
