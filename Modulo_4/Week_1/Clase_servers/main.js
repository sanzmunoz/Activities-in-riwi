//npm init -y
console.log("bien");

//npm i express

//API
import express from "express";
import { dbConnection } from "./lib/database.js";
import Users from "./models/users.js";

const app = express(); //app se convirte en mi express de trabajo
app.use(express.json());

app.get("/users", async (req, res) => {


    //aqui se pueden llamar otras DBs


  await dbConnection();

  const users = await Users.find(); //metodo de mongoose

  //in servicio get que se puede consumir y el endpoint se puede cambiar "users/"
  res.json({
    message: "Funciona desde el back con node",
    users,
  });
});

app.post("/users", async (req, res) => {
  try {
    await dbConnection();

    if (!req.body.name || !req.body.email) {
      return res.status(400).json({
        message: "El nombre y email son requeridos",
      });
    }

    const newUser = new Users(req.body);
    const savedUser = await newUser.save();

    res.status(201).json({
      message: "Usuario creado exitosamente",
      user: savedUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error al crear el usuario",
      error: error.message,
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

//en mongo atlas se genera una base de datos (SEARCH), primero se loge
