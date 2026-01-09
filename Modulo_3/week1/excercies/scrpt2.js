
// 1. Seleccion de elementos porel ID
const boton = document.getElementById("change");
const texto = document.getElementById("demo");

//2. cREA LA FUNCION QUE CAMBIA EL CONTENIDO
function cambiarTexto() {
    texto.innerHTML="Cambio automaticooooooooooooooo";
    boton.style.fontSize="40px"
}
//Conectar el servicio clic con la funcion
boton.addEventListener("click", cambiarTexto);



