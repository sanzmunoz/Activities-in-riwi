//mongoose permite hacer comunicacion entre bakend y base de datos
//npm i monggose
import mongoose from 'mongoose';
// npm dotenv
import dotenv from 'dotenv';


export const dbConnection = async () => {

    //creo una cadena de coleccion que me arroja mongoatlas
    try{
        const mongoUri = process.env.MONGO_URI//asigno esa cadena de coleccion que me arroja mongoatlas
        await mongoose.connect(mongoUri)

        console.log("dbOnline");

    }catch(error){
        console.log(error);
    }

}
