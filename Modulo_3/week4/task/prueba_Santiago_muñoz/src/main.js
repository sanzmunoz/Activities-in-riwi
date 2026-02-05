import { routes } from "./constants/routes";
import {
  login,
  register,
  logout,
  getCurrentUser,
  isAdmin,
  checkRouteAccess,
  getTasks,
  createTask,
  updateTask,
  getTaskById,
  deleteTask,
  getUser,
} from "./services/auth";
import {} from "./styles/style.css";

window.logout = logout;
let editingTaskId = null; // controla el estado de edicion
let deleteTaskId = null;

//navigate between routes
function navigate(route) {
  const checkedRoute = checkRouteAccess(route);
  if (checkedRoute !== route) {
    navigate(checkedRoute);
    return;
  }

  const app = document.getElementById("app");
  const mainSection = document.querySelector("section");
  const user = getCurrentUser();

  if (user && mainSection) {
    mainSection.style.display = "none";
  }

  const filePath = routes[route];
  if (filePath) {
    fetch(filePath)
      .then((response) => response.text())
      .then((html) => {
        app.innerHTML = html;
        initCurrentView(route);
      })
      .catch((error) => {
        console.error("Error cargando vista:", error);
        app.innerHTML = "<h2>Error 404 - Página no encontrada</h2>";
      });
  }
}
window.navigate = navigate;

// init views and assign the functions of these
function initCurrentView(route) {
  if (route === "/taskList") initTaskList();
  else if (route === "/taskForm") initTaskForm();
  else if (route === "/login") initLoginForm();
  else if (route === "/regist") initRegisterForm();
  else if (route === "/users") viewUsers();
}

// asynchronous function for load task list, brings from api the tasks
async function initTaskList() {
  const tasksList = document.getElementById("taskList");
  if (!tasksList) return;

  try {
    const tasks = await getTasks();
    const user = await getUser();
    if (tasks.length === 0) {
      tasksList.innerHTML = "<p>No hay tareas disponibles</p>";
      return;
    }

    tasksList.innerHTML = tasks
      .map(
        (task, user) => `
        <div class="event-item">
        <h3>Titulo de la tarea: ${task.title}</h3>
        <p><strong>Estado:</strong> ${task.location}</p>
        <p><strong>Prioridad:</strong> ${task.Description || "Sin descripción"}</p>
        <p><strong>usuario:</strong> ${user.name || "Sin descripción"}</p>
        <p><strong>fecha de entrega:</strong> ${task.date}</p>
        <article>
            ${
              isAdmin()
                ? `<button class="secondary" onclick="prepareEdit('${task.id}')">Editar Tarea</button>
                <button class="secondary btn-del" data-id='${task.id}'>Eliminar Tarea</button>`
                : `<span>Solo lectura</span>`
            }
        </article>
      </div>
      `,
      )
      .join("");
  } catch (error) {
    tasksList.innerHTML = `<p>Error: ${error.message}</p>`;
  }

  //bloque para borrar elementos
  const delbuton = tasksList.querySelectorAll(".btn-del");
  delbuton.forEach((e) => {
    e.addEventListener("click", async (event) => {
      event.preventDefault();
      console.log(event.target.dataset.id);
      await deleteTask(event.target.dataset.id);
      navigate("/taskList");
    });
  });
}

// function so admin can edit
window.prepareEdit = async function (id) {
  if (!isAdmin()) {
    alert("Acceso denegado");
    return;
  }
  editingTaskId = id;
  alert("vas a editar la tarea que seleccionaste");
  navigate("/taskForm");
};

//task form to which you can enter
async function initTaskForm() {
  const form = document.getElementById("taskFormElement");
  if (!form) return;

  const titleForm = form.querySelector("h2") || {};

  if (editingTaskId) {
    titleForm.innerText = "Editar Tarea";
    const task = await getTaskById(editingTaskId);
    document.getElementById("eventTitle").value = task.title;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const taskData = {
      title: document.getElementById("eventTitle").value,
      location: document.getElementById("eventLocation").value,
      Description: document.getElementById("eventDescription").value,
      date: document.getElementById("eventDate").value,
      user: document.getElementById("userCreate").value
    };
//////////////////////// EN REVISION
    try{
      user = userOnline;
      console.log(`asignando usuario ${user}`);
      //user.innerHTML = user;
    }catch{}
//////////////////////
    try {
      if (editingTaskId) {
        console.log("Actualizando tarea:", editingTaskId);
        await updateTask(editingTaskId, taskData);
        alert("Tarea actualizada");
      } else {
        await createTask({ id: String(Date.now()), ...taskData });
        alert("Tarea creada");
      }
      editingTaskId = null;
      navigate("/taskList");
    } catch (error) {
      alert("Error: " + error.message);
    }
  });
}

// function to start the session
function initLoginForm() {
  const userInput = document.getElementById("userInput");
  const passInput = document.getElementById("passInput");
  const buttonLogin = document.getElementById("buttonLogin");

  if (!userInput || !passInput || !buttonLogin) return;

  buttonLogin.addEventListener("click", async () => {
    const user = userInput.value.trim(); //Delete spaces at start and end
    const pass = passInput.value.trim();

    if (!user || !pass) {
      //notifies when fields are empty
      alert("Por favor ingresa usuario y contraseña");
      return;
    }

    try {
      const usuarioValido = await login(user, pass);
      console.log("Sesión iniciada:", usuarioValido);
      userOnline = user;
      if (usuarioValido.role === "admin") {
        navigate("/taskList");
      } else {
        navigate("/taskForm");
      }
    } catch (error) {
      alert(error.message || "Error al iniciar sesión");
    }
  });
}

// function to make user registration
function initRegisterForm() {
  const form = document.getElementById("registerForm");

  if (!form) {
    console.error("Formulario de registro no encontrado");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); //block page reload

    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = document.getElementById("regPassword").value;
    const passwordConfirm = document.getElementById("regPasswordConfirm").value;

    if (!name || !email || !password) {
      alert("Por favor completa todos los campos");
      return;
    }

    if (password !== passwordConfirm) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const newUser = await register({ name, email, password });
      console.log("Usuario registrado:", newUser);
      alert("Registro exitoso. Iniciando sesión...");
      navigate("/taskForm");
    } catch (error) {
      alert(error.message || "Error en el registro");
    }
  });
}

//upload of views and documents to the DOM
document.addEventListener("DOMContentLoaded", () => {
  const user = getCurrentUser();
  user && user.isActive ? navigate("/taskList") : navigate("/login");
});
