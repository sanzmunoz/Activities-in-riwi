import "./styles/globals.css"

export const routes = {
  "/home": "./views/home.html",
  "/login": "./views/login.html",
  "/about": "./views/about.html",
  "/contact": "./views/contact.html"
};

document.body.addEventListener("click",(e)=>{
  if(e.target.matches("[data-link]")){
    e.preventDefault(); //evita que que recarge toda la pagina
    const route = e.target.getAttribute("href");
    navigate(route);
  }
});

async function navigate(pathname) {
  const routeEnd = routes[pathname];
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

  if(viewHandlers[pathname]){
    viewHandlers[pathname]();
  }
}

function initLogin() {
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

      console.log(userObjet);

      /* Uso del metodo JSON... , su funcion es convertir el objeto de 
      JS en string con formato JSON para poder almacenarlo localmente
      */
      console.log(JSON.stringify(userObjet));
      
      /* solo demuestra el dato guardado ya es solo string */
      console.log(typeof JSON.stringify(userObjet));

      /*Guarda la informacion en el almacenamiento local
      --> "userData" es la llame o nombre del archivo
      --> el estring del objeto es el valor */
      localStorage.setItem("userData", JSON.stringify(userObjet));

      //Guarda la contraseña en el almacenamiento de sesion.
      // estos datos se borran cuando se cierra el navegador
      sessionStorage.setItem("pass", pass);
    } else {
      console.log("no tiene acceso");
    }
  });
}

function initHome(){

}