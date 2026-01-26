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

// inicializar la app al cargar
document.addEventListener("DOMContentLoaded", ()=>{
  const initialRoute = isAuthenticated() ? "/home" : "/login";
  navigate(initialRoute);
});