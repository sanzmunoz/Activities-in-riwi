//npm init -y
console.log("bien");

//npm i express

//API
import express from "express";
import { dbConnection } from "./lib/database.js";
import Users from "./models/users.js";

const app = express(); //app se convirte en mi express de trabajo

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

app.post("/users", (req, res) => {
  //in servicio get que se puede consumir y el endpoint se puede cambiar "users/"
  res.json({
    message: "este es un poste",
  });
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

//en mongo atlas se genera una base de datos (SEARCH), primero se loge
