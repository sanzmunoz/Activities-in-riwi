import{ getUserById, getUsers } from "./services/user";
import{
  getTodos,
  createTodo,
  updatedTodo,
  deleteTodo,
  markTodoAsComplete,
} from "./services/todos";
import "./styles/globals.css"

export const routes = {
  "/home": "./views/home.html",
  "/login": "./views/login.html",
  "/about": "./views/about.html",
  "/contact": "./views/contact.html"
};

//rutas publicas sin login
const publicRoutes = ["/login"];

//Función para verificar si esta autenticado
function isAuthenticated() {
  const userData = localStorage.getItem("userData");
  return userData && JSON.parse(userData).isActive
}

//funcion para proteger rutas
function checkRouteAccess(pathname) {
  const isLogged = isAuthenticated();

  //Si intenta acceder a login y ya esta logeado, redirige a home
  if(pathname ==="/login" && isLoggedIn){
    return "/home";
  }

  //Si intenta acceder a rutas protegidas sin loguear, redirige a login
  if (!publicRoutes.includes(pathname)&& !isLoggedIn){
    return "/login";
  }
  return pathname;
}


document.body.addEventListener("click",(e)=>{
  if(e.target.matches("[data-link]")){
    e.preventDefault(); //evita que que recarge toda la pagina
    const route = e.target.getAttribute("href");
    navigate(route);
  }
});

async function navigate(pathname) {
  //verificar acceso de la ruta
  const allowedRoute = checkRouteAccess(pathname);

  const routeEnd = routes[allowedRoute];
  const resp = await fetch(routeEnd);
  const html = await resp.text();
  document.getElementById("app").innerHTML = html
  
  //ejecutar logica especifica de cada vista
  const viewHandlers = {
    "/login": initLogin,
    "/home": initHome,
    "/about": initAbout,
    "/contact": initContact,
  };

  if(viewHandlers[allowedRoute]){
    viewHandlers[allowedRoute]();
  }
}

async function initLogin() {

  const result = await getUsers();
  const user3 = await getUserById(3);

  console.log(result);
  console.log(user3);
  
  // se crean variables a las cuales se le asigna elementos del dom
  let userInput = document.getElementById('userInput');
  let passInput = document.getElementById('passInput');
  let buttonInput =document.getElementById('buttonLogin');

  let user;
  let pass;
  
  //Tres escuchadores de eventos para variables antes declaradas
  userInput.addEventListener("input", (e)=>{
    user = e.target.value;
  });

  passInput.addEventListener("input", (e) => {
    pass = e.target.value;
  });

  buttonInput.addEventListener("click", (e) => {
    //Condicional verificador de usuario y contraseña
    if (user === "santi" && pass === "123456"){
      console.log("inicio de sesión");
      
      //creacion de un objeto que agrupa la información del usuario
      const userObjet = {
        userName: user,
        userPass: pass,
        isActive: true,
        role:"admin"
      };

      /*Guarda la informacion en el almacenamiento local
      --> "userData" es la llame o nombre del archivo
      --> el estring del objeto es el valor */
      localStorage.setItem("userData", JSON.stringify(userObjet));

      //Guarda la contraseña en el almacenamiento de sesion.
      // estos datos se borran cuando se cierra el navegador
      sessionStorage.setItem("pass", pass);

      /* Uso del metodo JSON... , su funcion es convertir el objeto de 
      JS en string con formato JSON para poder almacenarlo localmente
      */
      //console.log(JSON.stringify(userObjet));
      
      /* solo demuestra el dato guardado ya es solo string */
      //console.log(typeof JSON.stringify(userObjet));

      //redirigir a home despues de login
      navigate("/home");
    } else {
      console.log("no tiene acceso");
      alert("usuario o contraseña incorrecta")
    }
  });
}

function initHome(){
  let name = document.getElementById("name");
  let pass = document.getElementById("pass");
  let buttonLogout = document.getElementById("logout");

  let stringUser = localStorage.getItem("userData") || "";
  let objectUser = JSON.parse(stringUser);

  let passUser = sessionStorage.getItem("pass") || "";

  name.textContent = objectUser.userName;
  pass.textContent = passUser;

  buttonLogout.addEventListener("click", ()=>{
    localStorage.removeItem("userData");
    sessionStorage.removeItem("pass");

    //redirigir a login despues de lopgout
    navigate("login");
  });
}

function initAbout() {
  //logica especificada para la vista about
  console.log("vista about cargada");
}

function initContact() {
  //logica especifica para la vista contact
  console.log("vista contact cargada");
}

async function initTodoList() {
  let todos = [];

  const todoInput = document.getElementById("todoInput");
  const addBtn = document.getElementById("addBtn");
  const todoList = document.getElementById("todoList");
  const emptyState = document.getElementById("emptyState");

  // Cargar todos al iniciar
  async function cargarTodos() {
    try {
      todos = await getTodos();
      renderizarTodos();
    } catch (error) {
      console.error("Error cargando todos:", error);
    }
  }

  // Agregar nuevo todo
  addBtn.addEventListener("click", agregarTodo);

  async function agregarTodo() {
    const titulo = todoInput.value.trim();

    if (!titulo) {
      alert("Por favor ingresa una tarea");
      return;
    }

    const nuevoTodo = {
      titulo: titulo,
      descripcion: "",
      completado: false,
      fechaCreacion: new Date().toISOString().split("T")[0],
    };

    try {
      const todoCreado = await createTodo(nuevoTodo);
      todos.push(todoCreado);
      todoInput.value = "";
      renderizarTodos();
    } catch (error) {
      console.error("Error creando todo:", error);
      alert("Error al crear la tarea");
    }
  }

  // Renderizar todos
  function renderizarTodos() {
    todoList.innerHTML = "";

    // if (todos.length === 0) {
    //   emptyState.style.display = "block";
    //   return;
    // }

    emptyState.style.display = "none";

    todos.forEach((todo) => {
      const li = document.createElement("li");
      li.className = `todo-item ${todo.completado ? "completed" : ""}`;
      li.innerHTML = `
        <div class="todo-content">
          <input 
            type="checkbox" 
            class="todo-checkbox" 
            ${todo.completado ? "checked" : ""} 
            data-id="${todo.id}"
          >
          <span class="todo-title">${todo.titulo}</span>
        </div>
        <div class="todo-actions">
          <button class="btn btn-edit" data-id="${todo.id}">Editar</button>
          <button class="btn btn-delete" data-id="${todo.id}">Eliminar</button>
        </div>
      `;

      // Event listeners para los botones
      const checkbox = li.querySelector(".todo-checkbox");
      checkbox.addEventListener("change", () => toggleCompletado(todo.id));

      const editBtn = li.querySelector(".btn-edit");
      editBtn.addEventListener("click", () => editarTodo(todo.id));

      const deleteBtn = li.querySelector(".btn-delete");
      deleteBtn.addEventListener("click", () => eliminarTodo(todo.id));

      todoList.appendChild(li);
    });
  }

  // Alternar estado completado
  async function toggleCompletado(id) {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    try {
      const nuevoEstado = !todo.completado;
      const todoActualizado = await markTodoAsComplete(id, nuevoEstado);
      Object.assign(todo, todoActualizado);
      renderizarTodos();
    } catch (error) {
      console.error("Error actualizando todo:", error);
      alert("Error al actualizar la tarea");
    }
  }

  // Editar todo
  async function editarTodo(id) {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    const nuevoTitulo = prompt("Editar tarea:", todo.titulo);

    if (nuevoTitulo === null) return; // El usuario canceló

    if (!nuevoTitulo.trim()) {
      alert("El título no puede estar vacío");
      return;
    }

    try {
      const todoActualizado = await updateTodo(id, {
        ...todo,
        titulo: nuevoTitulo.trim(),
      });
      Object.assign(todo, todoActualizado);
      renderizarTodos();
    } catch (error) {
      console.error("Error editando todo:", error);
      alert("Error al editar la tarea");
    }
  }

  // Eliminar todo
  async function eliminarTodo(id) {
    if (!confirm("¿Estás seguro de que deseas eliminar esta tarea?")) {
      return;
    }

    try {
      await deleteTodo(id);
      todos = todos.filter((todo) => todo.id !== id);
      renderizarTodos();
    } catch (error) {
      console.error("Error eliminando todo:", error);
      alert("Error al eliminar la tarea");
    }
  }

  // Cargar todos al iniciar la página
  cargarTodos();
}

// inicializar la app al cargar
document.addEventListener("DOMContentLoaded", ()=>{
  const initialRoute = isAuthenticated() ? "/home" : "/login";
  navigate(initialRoute);
});