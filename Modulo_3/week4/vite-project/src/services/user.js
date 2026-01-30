const USER_API_URL = "http://localhost:3002/usuarios";

export const getUsers = async () => {
    try {
        const data = await fetch(USER_API_URL);
        const response = await data.json();
        return response;
    } catch (err) {
        console.log("Internal error", err);
    }
};

export const createUser = async (user) => {
    try {
        const data = await fetch(USER_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
        });
        const response = await data.json();
        return response;
    } catch (err) {
        console.log("Internal error", err);
    }
    };

// fetch(url, opciones)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

// export const getUsers = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error('Error fetching users:', error);
//     throw error;
//   }
// };

export const getUserById = async (id) => {
    try {
        if (!id) {
        throw new Error("El id es obligatorio");
        }
        const data = await fetch(`${USER_API_URL}/${id}`);
        const response = await data.json();
        return response;
    } catch (err) {
        console.error("Internal error", err);
    }
};

export const allUsers = async()=>{
    try{
        const response = await fetch(USER_API_URL);//asigna response lo que hay en el localhost de usuarios
        const data = await response.json(); //guardo en data el response convertido en json
        return data;
    }catch(error) {
        console.log("error buscando los datos", error);
        throw error;
    }
}