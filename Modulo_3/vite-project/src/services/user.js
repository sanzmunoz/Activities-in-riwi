export const getUsers = async ()=>{
    const data = await fetch("http://localhost:3000/usuarios")
    const response = await data.json()

    return response
}

// export const getUsers = async ()=>{
//     try{
//         const response = await axios.get(API_URL);
//         return response.data;
//     } catch (error){
//         console.log('Error fetching users:', error);
//         throw error;
//     }
// };

export const getElementById = async (id)=> {
    const data = await fetch(`http://localhost:3000/usuarios/${id}`);
    const response = await data.json()

    return response
}