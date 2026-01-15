//async hace que la funcion sea asincrona para ejecutar en un tiempo de espera, la cual va acompañada de un "await"
// para el resultado que espero 

//asigno async a la funcion y le asigno el parametro que recibira en el input

export async function getWeather(city){

    const apiKey = "f32ad64eff9856b2c22fcba0de70fcab";
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    let resquest = await fetch(url) //le asigno el link con el await para que espere la respuesta

    /*
    if(response.ok) {
        let response = resquest.json()
    }else {
        console.log("Error", resquest.status);
    } */
    
    let response = resquest.ok ? resquest.json() : console.log("Error", 
        resquest.status) //metodo corto para -if- 

    return response
}

