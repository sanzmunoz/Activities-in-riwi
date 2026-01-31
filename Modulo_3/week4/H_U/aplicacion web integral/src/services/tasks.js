const API_URL = "http://localhost:3002/tasks";

//funcion para buscar informacion en el servidor traerla de vuelta para mostarla
export const gettasks = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching tasks:", error);
        throw error;
    }
};

//funcion para obtener una sola tarea especifica usando el id
export const gettaskById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching task:", error);
        throw error;
    }
};

//funcion para crear una tarea y agregarla
export const createtask = async (task) => {
    try {
        const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error creating task:", error);
        throw error;
    }
};

//funcion para actualizar una tarea
export const updatetask = async (id, task) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(task),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error updating task:", error);
        throw error;
    }
};

//funcion para borrar una tarea
export const deletetask = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        });
        return response.ok;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};

//funcion para marcar como completa una tarea y modificar su estado
export const marktaskAsComplete = async (id, completed) => {
    try {
        const task = await gettaskById(id);
        const updatedtask = { ...task, completado: completed };
        const response = await updatetask(id, updatedtask);
        return response;
    } catch (error) {
        console.error("Error marking task as complete:", error);
        throw error;
    }
};
