import { routes } from './constants/routes';
import './styles/home.css'
import './styles/login.css'
import './styles/about.css'
import './styles/globals.css'
import './styles/contact.css'

let globalRoute;

document.body.addEventListener("click",(e)=>{
  if(e.target.matches("[data-link]")){
    e.preventDefault(); //evita que que recarge toda la pagina
    const route = e.target.getAttribute("href");
    navigate(route);
  }
});
async function navigate(pathname) {
  globalRoute = pathname
  const route = routes[pathname];

  const resp = await fetch(route);
  const html = await resp.text();

  document.querySelector("#app").innerHTML = html
  return html;
}

if (pathname == "./login"){
  let userInput = document.getElementById("userInput");
  let pass = document.getElementById("passInput");

  userInput.addEventListener("input", (e)=>{
    console.log(e.target.value)
  })
  console.log("estamos en la vista de login");
}

// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))