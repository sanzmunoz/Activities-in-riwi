let task =[];
let num = 0;
const list = document.getElementById("taskList")

function increment(){
    num++;
    console.log(`tarea N°${num}`);
    contador.innerHTML = `<h2>¡Agregaste la tarea N°${num}!</h2>`;
}

const miboton = document.getElementById("addButon");

miboton.addEventListener('click', ()=> {
    const newTask = input.value.trim(); //quitamos espacios
    if (newTask !== ""){
        increment(); //actualiza el contador
        task.push(newTask); //Se agrega al arreglo
        input.value = ""; //se limpia el input
        renderTasks(); // Se muestra la lista actualizada
    }
});

let contador = document.getElementById("contador")
let tittle;
let input = document.getElementById("myInput");
input.addEventListener("input", (event) => {
    console.log("el texto es: ", event.target.value);
    tittle = event.target.value    
}); 

// funcion que muestra las tareas agregadas
function renderTasks() {
    //limpieza de lista
    list.innerHTML = "";

    //recorrer el arreglo y crear etiqueta <li> por tarea
    task.forEach(function(item) {
        const li = document.createElement("li");
        const del = document.createElement("p")

        li.textContent = item;
        del.textContent="eliminar"

        del.addEventListener("click", (event)=>{
        console.log(event.target.closest("li").remove())
        })

        li.append(del);

        list.append(li);
    });
}

function deltaks(task){
    //recibir el input
    //ciclar para determinar si existe y en caso de que no muestre mensaje
    //guardar posicion y eliminar esa posicion 
}
// para eliminar el elemento de un array busco su posicion y asigno esa 
// posicion a una variable o no y con esa posicion busco y elimino el elemento del array

//seccion de pruebas en boton
const pruebas = document.getElementById("pruebas")
pruebas.addEventListener('mouseout',()=>{
    console.log("paso por boton");
})