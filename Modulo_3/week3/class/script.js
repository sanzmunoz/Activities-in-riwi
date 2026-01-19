const title = document.getElementsByClassName("title"); //Retorna una collecction
const btn = document.getElementById("btn");//capturo el boton

const titleh2 = document.getElementsByTagName("h2") //capturo etiqueta h2
const container = document.getElementById("list"); //capturo el id lista en etiqueta
const btnR = document.getElementById("btnR") //capturo un boton con el ID

const card1 = document.getElementById("card-1")
const btnReset = document.getElementById("btnReset");

btn.addEventListener("click",()=>{ //evento de click se captura para realizar unas funciones especificas
    title[0].textContent = "Se cambio el title"; // se pone el [0] para seleccionar la primera posicion por que devuelve un arrary
    console.log(document.body);

    titleh2[0].textContent = "other text"; // modifica el contenido de una etiqueta que ya existe

    container.innerHTML ="<ul> <li>manzana</li> <li>pera</li> <li>mora</li> </ul>";
    btnR.style.backgroundColor = "blue"
    title.style.color = "green"
    title.style.color = "blue"
    title.style.fontSize = "60px"
});

btnR.addEventListener("click",()=>{
    container.outerHTML= "<div>aqui estaba la lista</div>"
});

card1.addEventListener("click", ()=> {

})

btnReset.addEventListener("click",()=> {
    title.textContent= "Hola"
});

const p = document.getElementById("p1")
console.log();

titleh2.setAttribute("id", "esta")