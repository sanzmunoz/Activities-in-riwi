import { getWeather } from "./utils.js";

const boton = document.getElementById("search");
let input = document.getElementById("city");
let body = document.querySelector("body")

boton.addEventListener("click", (event)=>{

    let city= input.value

    //se crea otra funcion para esperar y pedir un resultado especifico de la api
    async function name() {

        let resultado = await getWeather(city);
        console.log(resultado)
        
        console.log(resultado.main)
        let p = document.createElement("p")
        p.textContent = resultado.main.temp //notacion de puntos para seleccionar
        body.appendChild(p)
    }

    name()
})