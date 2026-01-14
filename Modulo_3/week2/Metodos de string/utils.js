export const saludar = ()=>{
    console.log("hello world");
}

export const UpperCase = (text)=>{
    let message = text.toUpperCase()
    return message
}

export const fullDate = (full)=>{
    const today = new Date();
    console.log(today);
    
    const dateString = today.toString();
    
    const day = dateString.slice(0, 3); //los numeros son la posicion
    const date = dateString.slice(4, 15);
    const hour = dateString.slice(16, 24);
    
    const days = {
        Tue: "Martes",
        Mon: "Lunes",
        Thu: "Jueves",
        Wed: "Miercoles",
        Sat: "Sábado",
        Fri: "Viernes",
        Sun: "Domingo",
    };
}