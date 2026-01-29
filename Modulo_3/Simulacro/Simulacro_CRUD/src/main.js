import viteLogo from '/vite.svg'

import "./constants/routes.js"
// import "./styles/globals.css";
import {} from "./services/admin.js";
import {} from "./services/menu.js";
import {} from "./services/orders.js";
import {} from "./services/user.js";
import { routes } from './constants/routes.js';
import { show } from './constants/routes.js';

document.querySelector('#app').innerHTML = "";

document.addEventListener("DOMContentLoaded", () => {  show("/login")  });

let sigButton = document.getElementById("") 