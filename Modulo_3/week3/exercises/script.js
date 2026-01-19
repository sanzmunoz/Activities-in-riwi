/*
Mini reto 1: Tarjeta de perfil
Crea una tarjeta con:

Nombre
Bio
Botón editar
Al hacer click:

Cambia el nombre con textContent
Cambia la bio con innerHTML
Alterna una clase con classList.toggle
Modifica un atributo con setAttribute

*/
const buttonedit = document.getElementById("edit");//boton
const bio = document.getElementById("bio");//seccion de biografia
const names = document.getElementById("name");//seccion nombre

buttonedit.addEventListener("click", ()=> {
    names.textContent = "Joselin Rodriguez"
    bio.innerHTML = "Persona nacida en medellin"
    buttonedit.classList.toggle('dark')//agrega una clase a este boton y le asigna ls propiedadesque esten cargadas
    names.setAttribute('class', 'nombre')//crea class a la etiqueta y agreba el nombre a la class
})