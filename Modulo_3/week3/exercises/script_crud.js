let task =[];
let num = 0;
const list = document.getElementById("taskList")
const miboton = document.getElementById("addButon");
let contador = document.getElementById("contador")
let tittle;
let input = document.getElementById("myInput");

function increment(){
    num++;
    console.log(`tarea N°${num}`);
    contador.innerHTML = `<h2>¡Agregaste la tarea N°${num}!</h2>`;
}

miboton.addEventListener('click', ()=> {
    const newTask = input.value.trim(); //quitamos espacios
    if (newTask !== ""){
        increment(); //actualiza el contador
        task.push(newTask); //Se agrega al arreglo
        input.value = ""; //se limpia el input
        renderTasks(); // Se muestra la lista actualizada
    }
});

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
        li.textContent = item;
        list.appendChild(li);
    });
}