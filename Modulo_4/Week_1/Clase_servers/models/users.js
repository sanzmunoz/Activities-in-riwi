import mongoose from "mongoose";

//se crea con new uuna nueva instancia
const userSchema = new mongoose.Schema({
    //se ponene los elementos que estan en mi base de datos
    name: {
        type: String,
        require: true,
    },
    lastName: {
        type
    }
})

const Users = monggose.model("users",userSchema)//el primer parametro es el nombre de la carpeta en el servidor

export default Users;

//antes de cerrar el metodo  del ultimo parentesis, se pone
//{timestamps: true} para cuando alguien cree o modifique cree una nueva hora como referencia para ese dato.
