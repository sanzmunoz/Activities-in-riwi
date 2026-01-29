import { login } from "../../public/views/login/login.js";
import { menu } from "../../public/views/menu/menu.js";

export const routes = {
    "/admin":"./views/admin.html",
    "/login" : login,
    "/menu": menu,
    "/orders":"./views/orders.html"
};

export async function show(pathname) {//funcion asincrona que llama a la pagina inicial
    let initPage = routes[pathname];//asignacion de de la ruta
    document.getElementById("app").innerHTML = initPage (); //agrego la ruta al dom
}

