let task =[];

const list = document.getElementById("taskList")
const miboton = document.getElementById("addButon");

let input = document.getElementById("myInput");
let tittle;

//escuchador para cuando se hace clic
miboton.addEventListener('mousedown', ()=> {
    miboton.classList.toggle('button__active');
    const newTask = {texto: input.value.trim(),
        completada: false
    }; //quitamos espacios
    if(newTask.texto === ""){
        alert("no puedes agregar una tarea vacía")
    }else if (newTask !== ""){
        task.push(newTask); //Se agrega al arreglo
        input.value = ""; //se limpia el input
        renderTasks(); // Se muestra la lista actualizada
    }
});

//escuchador para cuando se suelta el clic
miboton.addEventListener('mouseup', ()=>{
    miboton.classList.toggle("button__inactive");
})

input.addEventListener("input", (event) => {
    console.log("el texto es: ", event.target.value);
    tittle = event.target.value    
}); 

//revisamos que tareas guardadas hay
const saveTasks = localStorage.getItem("tasks");
if(saveTasks){
    task = JSON.parse(saveTasks);
    renderTasks(); //muestra las tareas guardadas
}

// funcion que muestra las tareas agregadas
function renderTasks() {
    //limpieza de lista
    list.innerHTML = "";

    //recorrer el arreglo y crear etiqueta <li> por tarea
    task.forEach(function(item) {
        const check = document.createElement("input");
        check.type = 'checkbox';
        check.checked = item.completada;
        check.addEventListener('change',()=> {
            item.completada = check.checked;
            localStorage.setItem("tasks", JSON.stringify(task));
            console.log(task);
        });
        
        const li = document.createElement("li");
        const del = document.createElement("button")

        del.classList.add('delbuton')
        li.classList.add('caja_del')
        li.textContent = item.texto;
        del.textContent="Eliminar"

        del.addEventListener("click", (event)=>{
            event.target.closest("li").remove();
            const index = task.indexOf(item);
            console.log(index);
            console.log(task);
            if(index > -1 ){
                task.splice(index,1);
                localStorage.setItem("tasks",JSON.stringify(task));
            }
            console.log(task);
        })
        
        li.append(check)
        li.append(del);
        list.append(li);
        console.log(task);
    });
}

