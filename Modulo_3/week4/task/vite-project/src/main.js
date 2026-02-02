//importacion de rutas necesarias para el proyecto
import { routes } from "./constants/routes";
import {
  login,
  register,
  logout,
  getCurrentUser,
  isAdmin,
  checkRouteAccess,
  getEvents,
  createEvent,
  getUsers,
} from "./services/auth";

import "./styles/style.css"

window.logout = logout;

//funcion para el cambio entre vistas
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

//asigna las funciones dependiendo de la vista
function initCurrentView(route) {
  if (route === "/eventList") {
    initEventList();
  } else if (route === "/eventForm") {
    initEventForm();
  } else if (route === "/login") {
    initLoginForm();
  } else if (route === "/regist") {
    initRegisterForm();
  } else if (route === "/users") {
    viewUsers();
  }
}

// funcion para inicio de sesion
function initLoginForm() {
  const userInput = document.getElementById("userInput");
  const passInput = document.getElementById("passInput");
  const buttonLogin = document.getElementById("buttonLogin");

  //si no se ingreso nada lo hace regresar
  if (!userInput || !passInput || !buttonLogin) return;

  buttonLogin.addEventListener("click", async () => {
    const user = userInput.value.trim(); //elimina espacios al inicio y final
    const pass = passInput.value.trim();

    if (!user || !pass) {//avisa cuando los campos estan vacios
      alert("Por favor ingresa usuario y contraseña");
      return;
    }

    try {
      const usuarioValido = await login(user, pass);
      console.log("Sesión iniciada:", usuarioValido);

      if (usuarioValido.role === "admin") {
        navigate("/eventForm");
      } else {
        navigate("/eventList");
      }
    } catch (error) {
      alert(error.message || "Error al iniciar sesión");
    }
  });
}

// funcion para haer el registro del ususario
function initRegisterForm() {
  const form = document.getElementById("registerForm");

  if (!form) {
    console.error("Formulario de registro no encontrado");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); //bloquear  recarga de pagina

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
      navigate("/eventList");
    } catch (error) {
      alert(error.message || "Error en el registro");
    }
  });
}

//variable para almacenar valores de tickets
const tickets = [];

//funcion para lista de eventos
async function initEventList() {
  console.log("Inicializando lista de eventos");
  const eventsList = document.getElementById("eventList");

  if (!eventsList) return;
  try {
    const events = await getEvents();

    if (events.length === 0) {
      eventsList.innerHTML = "<p>No hay eventos disponibles</p>";
      return;
    }

    eventsList.innerHTML = events
      .map(
        (event) => `
      <div class="event-item">
        <h3>${event.title}</h3>
        <p>Ubicación: ${event.location}</p>
        <p>Fecha: ${event.date}</p>
        <p>Descripción: ${event.Description || "Sin descripción"}</p>
        <p>Capacidad: ${event.capacity || "Capacidad no especificada"} Personas.</p>
        <article>
            <label>Cuantos boletos deseas adquirir:</label>
            <select id="eventTicket">Canti</select>
            <button class="third">Guardar</button>
        </article>
      </div>
    `,
      )
      .join("");
  } catch (error) {
    eventsList.innerHTML = `<p>Error cargando eventos: ${error.message}</p>`;
  }
}

//funcion para crear eventos la cual pide varios parametros
async function initEventForm() {
  console.log("Inicializando formulario de eventos");

  if (!isAdmin()) {
    alert("No tienes permiso para crear eventos");
    navigate("/eventList");
    return;
  }

  const form = document.getElementById("eventFormElement");//consume el app

  if (!form) {
    console.error("Formulario de eventos no encontrado");
    return;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();//evita que se recarge el dom completo

    const event = {
      id: String(Date.now()),
      title: document.getElementById("eventTitle").value,
      location: document.getElementById("eventLocation").value,
      Description: document.getElementById("eventDescription").value,
      date: document.getElementById("eventDate").value,
      capacity: document.getElementById("eventCapacity").value
    };

    try {
      await createEvent(event);
      alert("Evento creado exitosamente");
      form.reset();
      navigate("/eventList");
    } catch (error) {
      alert(error.message || "Error al crear evento");
    }
  });
}

// inicializar el contenido para el dom
document.addEventListener("DOMContentLoaded", () => {
  const user = getCurrentUser();

  if (user && user.isActive) {
    if (user.role === "admin") {
      navigate("/eventForm");
    } else {
      navigate("/eventList");
    }
  } else {
    // Si no hay sesión, mostrar login
    navigate("/login");
  }
});

//ver usuarios si es admin
async function viewUsers() {
  console.log("Inicializando lista de usuarios");
  const userList = document.getElementById("userList");

  if (!userList) return;

  try {
    const users = await getUsers();

    if (users.length === 0) {
      userList.innerHTML = "<p>No hay usuarios disponibles</p>";
      return;
    }

    userList.innerHTML = users
      .map(
        (user) => `
          <div class="user-item">
            <h3>${user.name}</h3>
            <p>correo: ${user.email}</p>
            <p>pasdword: ${user.password}</p>
            <p>rol del usuario: ${user.role}</p>
          </div>
        `,
      )
      .join("");
  } catch (error) {
    userList.innerHTML = `<p>Error cargando usuarios: ${error.message}</p>`;
  }
}