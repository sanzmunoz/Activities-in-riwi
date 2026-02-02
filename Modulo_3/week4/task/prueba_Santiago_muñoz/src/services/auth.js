const USER_API_URL = "http://localhost:3003/usuarios";
const TASKS_API_URL = "http://localhost:3003/task";

// authentication for the session
export function isAuthenticated() {
  const session = sessionStorage.getItem("session"); 
  return session && JSON.parse(session).isActive; 
}

//to obtain the users
export function getCurrentUser() {
  const session = sessionStorage.getItem("session"); 
  return session ? JSON.parse(session) : null; 
}

//only admin
export function isAdmin() {
  const user = getCurrentUser(); 
  return user && user.role === "admin"; 
}

//to create the session from register
export function createSession(user) {
  const sessionData = {
    id: user.id, 
    name: user.name, 
    email: user.email, 
    role: user.role, 
    isActive: true, 
  };
  sessionStorage.setItem("session", JSON.stringify(sessionData)); 
}

//to close the session
export function logout() {
  sessionStorage.removeItem("session"); 
  window.navigate("/login"); 
}

// authenticate users
export const login = async (username, password) => {
  try {
    const response = await fetch(USER_API_URL); 
    const usuarios = await response.json(); 
    const usuarioValido = usuarios.find(
      (u) => u.name === username && u.password === password,
    ); //
    if (!usuarioValido) throw new Error("Usuario o contraseña incorrectos"); 
    createSession(usuarioValido); 
    return usuarioValido; 
  } catch (err) {
    console.error("Error en login:", err); 
    throw err;
  }
};

//function of registration of users
export const register = async (userData) => {
  try {
    const response = await fetch(USER_API_URL); 
    const usuarios = await response.json(); 
    const userExists = usuarios.find((u) => u.name === userData.name); 
    if (userExists) throw new Error("El usuario ya existe"); 
    const newUser = {
      id: String(Math.max(...usuarios.map((u) => parseInt(u.id)), 0) + 1), 
      name: userData.name, 
      email: userData.email, 
      password: userData.password, 
      role: "user", 
    };
    const createResponse = await fetch(USER_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(newUser), 
    });
    const createdUser = await createResponse.json(); 
    createSession(createdUser); 
    return createdUser;
  } catch (err) {
    throw err;
  }
};

//task management
export const getTasks = async () => {
  try {
    const response = await fetch(TASKS_API_URL);
    return await response.json(); //
  } catch (err) {
    console.error("Error fetching tasks:", err);
    throw err;
  }
};

//get specific task when editing
export const getTaskById = async (id) => {
  const response = await fetch(`${TASKS_API_URL}/${id}`);
  if (!response.ok) throw new Error("No se pudo encontrar la tarea");
  return await response.json();
};

//anyone can create
export const createTask = async (event) => {
  try {
    const response = await fetch(TASKS_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    });
    return await response.json();
  } catch (err) {
    console.error("Error creating task:", err);
    throw err;
  }
};

//only administrator can update
export const updateTask = async (id, taskData) => {
  if (!isAdmin()) {
    throw new Error(
      "Acción denegada: Solo los administradores pueden editar tareas",
    );
  }
  const response = await fetch(`${TASKS_API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  return await response.json();
};

//to delete users
export const deleteTask = async (id) => {
  try{
    const response = await fetch(`${TASKS_API_URL}/${id}`, {
      method:"DELETE",
    });
    return response.ok;
  }catch(error){
    console.error("Error borrando tarea:", error);
    throw error;
  }
};



//access control
export function checkRouteAccess(pathname) {
  const isLoggedIn = isAuthenticated(); 
  const user = getCurrentUser(); 

  if (pathname === "/login" || pathname === "/regist") return pathname; //

  if (!isLoggedIn) return "/login"; 

  const adminOnlyRoutes = ["/users"]; //lista de usuarios queda protegida

  if (adminOnlyRoutes.includes(pathname) && !isAdmin()) {
    return "/eventList"; 
  }

  return pathname; 
}