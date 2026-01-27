un fetch regresa una promesa
control+c y control shift+f para bucar una palabra en el codigo

con el method:"POST" puedo crear algo nuevo

hacer que al ingresar un usuario se muestre una tarjeta con la informacion de ese usuario y que desde ahi lo pueda editar

al crearlo debo mostrar una tarjeta con esa info en la misma pestaña que se creo

function allUsers(){

    const newUsers = document.getElementById("newUsers");

    btnCreateUser.addEventListener("click", ()=> {

    })


}

H_U

crear una funcion para renderizar usuarios
esta funcion debe limpiar la lista asi:
listausuarios.innerHTML = ""
luego ingresa esta linea para vaciar el espacio:
emptyState.style.display = "none";

Hacer que el array creado sea recorrido con un forEach al cual se le pasa los elementos que hay en "usuarios"
al pasarlos se muestran con inner

{
      "id": "1",
      "nombre": "Juan Pérez",
      "email": "juan@example.com",
      "edad": 28,
      "ciudad": "Madrid"
    },