import { getWeather } from "./utils.js";

const boton = document.getElementById("search");
let input = document.getElementById("city");

boton.addEventListener("click", (event)=>{

    let city= input.value

    let resultado = getWeather(city)

    console.log(resultado);

})