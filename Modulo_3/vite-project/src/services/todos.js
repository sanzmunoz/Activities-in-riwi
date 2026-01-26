const API_URL = "http://localhost:3000/todos";

export const getTodos=async () => {
    try{
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch(error){
        console.log("error fetching todos:", error);
        throw error;
    }
};

export const getTodoById = async (id)=>{
    try{
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error){
        console.log("Error fetching todo:", error);
        throw error;
    }
};

export const createTodo = async (todo)=>{
    try{
        const 
    }
}