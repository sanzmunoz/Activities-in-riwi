const USER_API_URL = "http://localhost:3003/usuarios";
const EVENTOS_API_URL = "http://localhost:3003/events";


export function isAuthenticated() {
  const session = sessionStorage.getItem("session");
  return session && JSON.parse(session).isActive;
}

export function getCurrentUser() {
  const session = sessionStorage.getItem("session");
  return session ? JSON.parse(session) : null;
}

export function isAdmin() {
  const user = getCurrentUser();
  return user && user.role === "admin";
}

export function createSession(user) {
  const sessionData = {
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    isActive: true
  };
  sessionStorage.setItem("session", JSON.stringify(sessionData));
}

export function logout() {
  sessionStorage.removeItem("session");
  window.navigate("/login"); // Redirigir al login
}


export const login = async (username, password) => {
  try {
    const response = await fetch(USER_API_URL);
    const usuarios = await response.json();

    const usuarioValido = usuarios.find(
      (u) => u.name === username && u.password === password
    );

    if (!usuarioValido) {
      throw new Error("Usuario o contraseña incorrectos");
    }

    createSession(usuarioValido);
    return usuarioValido;
  } catch (err) {
    console.error("Error en login:", err);
    throw err;
  }
};


export const register = async (userData) => {
  try {
    // Validar que el usuario no exista
    const response = await fetch(USER_API_URL);
    const usuarios = await response.json();

    const userExists = usuarios.find((u) => u.name === userData.name);
    if (userExists) {
      throw new Error("El usuario ya existe");
    }

    if (!userData.password || userData.password.length < 4) {
      throw new Error("La contraseña debe tener al menos 4 caracteres");
    }

    // Crear nuevo usuario
    const newUser = {
      id: String(Math.max(...usuarios.map(u => parseInt(u.id)), 0) + 1),
      name: userData.name,
      email: userData.email,
      password: userData.password,
      role: "user" // Por defecto users, solo admin puede cambiar
    };

    const createResponse = await fetch(USER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    });

    if (!createResponse.ok) {
      throw new Error("Error al crear usuario");
    }

    const createdUser = await createResponse.json();
    createSession(createdUser);
    return createdUser;
  } catch (err) {
    console.error("Error en registro:", err);
    throw err;
  }
};


export const getUsers = async () => {
  try {
    const response = await fetch(USER_API_URL);
    return await response.json();
  } catch (err) {
    console.error("Internal error", err);
    throw err;
  }
};

export const getUserById = async (id) => {
  try {
    if (!id) {
      throw new Error("El id es obligatorio");
    }
    const response = await fetch(`${USER_API_URL}/${id}`);
    return await response.json();
  } catch (err) {
    console.error("Internal error", err);
    throw err;
  }
};

export const createUser = async (user) => {
  try {
    const response = await fetch(USER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch (err) {
    console.error("Internal error", err);
    throw err;
  }
};


export const getEvents = async () => {
  try {
    const response = await fetch(EVENTOS_API_URL);
    return await response.json();
  } catch (err) {
    console.error("Error fetching events:", err);
    throw err;
  }
};

export const createEvent = async (event) => {
  try {
    if (!isAdmin()) {
      throw new Error("Solo admins pueden crear eventos");
    }

    const response = await fetch(EVENTOS_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(event)
    });
    return await response.json();
  } catch (err) {
    console.error("Error creating event:", err);
    throw err;
  }
};

export function checkRouteAccess(pathname) {
  const isLoggedIn = isAuthenticated();
  const user = getCurrentUser();

  // Rutas públicas
  if (pathname === "/login" || pathname === "/regist") {
    return pathname; // Permitir acceso
  }

  // Si intenta acceder a login y ya está logueado, redirige
  if ((pathname === "/login" || pathname === "/regist") && isLoggedIn) {
    return user.role === "admin" ? "/eventForm" : "/eventList";
  }

  // Si intenta acceder a rutas protegidas sin loguear
  if (!isLoggedIn) {
    return "/login";
  }

  // Rutas solo para admin
  const adminOnlyRoutes = ["/eventForm", "/events/create"];
  if (adminOnlyRoutes.includes(pathname) && !isAdmin()) {
    return "/eventList"; // Redirigir a user a lista
  }
  return pathname;
}