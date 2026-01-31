// se importan las funciones de las tareas para operar con ellas
import {
  gettasks,
  createtask,
  updatetask,
  deletetask,
  marktaskAsComplete,
} from "./services/tasks.js";
import {}from "./styles/home.css"
// creacion de variable a al cual se le asignan las rutas que se llamaran despues
const routes = {
  "/home": "./views/home.html",
  "/tasklist": "./views/taskList.html"
};

//escuchados del click para en navbar
document.body.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    console.log(`Clic en vista`);
    e.preventDefault();
    const route = e.target.getAttribute("href");
    navigate(route);
  }
});

// funcion de navegar entre una vista y la otra
async function navigate(pathname) {
  
  //carga el contenido de la vista
  const routeEnd = routes[pathname];
  if(!routeEnd) return; //hacer nada si la ruta no existe
  const resp = await fetch(routeEnd);
  const html = await resp.text();
  document.getElementById("app").innerHTML = html;

  // Ejecutar lógica específica de vista
  const viewHandlers = {
    "/home": initHome,
    "/tasklist": inittaskList,
  };

  if (viewHandlers[pathname]) {
    viewHandlers[pathname]();
  }
}

//funcion para ejecutar algo especifico en la vista de inicio
function initHome() {
  console.log("En vista del home");
}

//funcion asincrona que se carka al abrir la vista
async function inittaskList() {
  let tasks = [];

  const taskInput = document.getElementById("taskInput");
  const addBtn = document.getElementById("addBtn");
  const taskList = document.getElementById("taskList");
  const emptyState = document.getElementById("emptyState");

  // Cargar tasks al iniciar
  async function cargartasks() {
    try {
      tasks = await gettasks();
      renderizartasks();
    } catch (error) {
      console.error("Error cargando tasks:", error);
    }
  }

  // Agregar nueva tarea
  addBtn.addEventListener("click", agregartask);

  async function agregartask() {
    const titulo = taskInput.value.trim();

    if (!titulo) {
      alert("Por favor ingresa una tarea");
      return;
    }

    const nuevotask = {
      titulo: titulo,
      descripcion: "",
      completado: false,
      fechaCreacion: new Date().toISOString().split("T")[0],
    };

    try {
      const taskCreado = await createtask(nuevotask);
      tasks.push(taskCreado);
      taskInput.value = "";
      renderizartasks();
    } catch (error) {
      console.error("Error creando task:", error);
      alert("Error al crear la tarea");
    }
  }

  //funcion para renderizar tareas
  function renderizartasks() {
    taskList.innerHTML = "";
    emptyState.style.display = "none";

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.className = `task-item ${task.completado ? "completed" : ""}`;
      li.innerHTML = `
        <div class="task-content">
          <input 
            type="checkbox" 
            class="task-checkbox" 
            ${task.completado ? "checked" : ""} 
            data-id="${task.id}"
          >
          <span class="task-title">${task.titulo}</span>
        </div>
        <div class="task-actions">
          <button class="btn btn-edit" data-id="${task.id}">Editar</button>
          <button class="btn btn-delete" data-id="${task.id}">Eliminar</button>
        </div>
      `;

      // escuchador para los botones
      const checkbox = li.querySelector(".task-checkbox");
      checkbox.addEventListener("change", () => toggleCompletado(task.id));

      const editBtn = li.querySelector(".btn-edit");
      editBtn.addEventListener("click", () => editartask(task.id));

      const deleteBtn = li.querySelector(".btn-delete");
      deleteBtn.addEventListener("click", () => eliminartask(task.id));

      taskList.appendChild(li);
    });
  }

  // Alternar estado completado
  async function toggleCompletado(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    try {
      const nuevoEstado = !task.completado;
      const taskActualizado = await marktaskAsComplete(id, nuevoEstado);
      Object.assign(task, taskActualizado);
      renderizartasks();
    } catch (error) {
      console.error("Error actualizando task:", error);
      alert("Error al actualizar la tarea");
    }
  }

  // Editar tarea
  async function editartask(id) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return;

    const nuevoTitulo = prompt("Editar tarea:", task.titulo);

    if (nuevoTitulo === null) return; // El usuario canceló

    if (!nuevoTitulo.trim()) {
      alert("El título no puede estar vacío");
      return;
    }

    try {
      const taskActualizado = await updatetask(id, {
        ...task,
        titulo: nuevoTitulo.trim(),
      });
      Object.assign(task, taskActualizado);
      renderizartasks();
    } catch (error) {
      console.error("Error editando task:", error);
      alert("Error al editar la tarea");
    }
  }

  // funcion para eliminar tarea
  async function eliminartask(id) {
    if (!confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
      return;
    }

    try {
      await deletetask(id);
      tasks = tasks.filter((task) => task.id !== id);
      renderizartasks();
    } catch (error) {
      console.error("Error eliminando task:", error);
      alert("Error al eliminar la tarea");
    }
  }

  // Cargar tareas al iniciar la página
  cargartasks();
}

// Inicializar la vista al cargar
document.addEventListener("DOMContentLoaded", () => {
  const initialRoute = "/home";
  navigate(initialRoute);
});