console.log("ocupando espacio");

let express = require("express");
const mongo = require("mongoose");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

mongo
  .connect("mongodb://localhost:27017/BasePrueba")
  .then(() => {
    console.log("Conectando...");
  })
  .catch((error) => {
    console.log("no fuiciono" + error);
  });

let PersonaSchema = mongo.Schema(
  {
    nombre: String,
    apellido: String,
    email: String,
    cedula: String,
  },
  {
    Collection: "usuarios",
  },
);

let Persona = mongo.model("usuarios", PersonaSchema);

app.get("/persona", async (req, res) => {
  let Persona1 = await Persona.find({});
  res.json(Persona1);
  console.log(Persona1);
});

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { log } from "node:console";
dotenv.config();

const app = express();
app.use(express.json());

const userSchema = new mongoose.Schema(
  {
    name: String,
    cc: Number,
    lastName: String,
  },
  { versionKey: false },
);

const user = mongoose.model("users", userSchema);

const conectdb = async () => {
  try {
    const linkUri = process.env.MONGO_URI;
    await mongoose.connect(linkUri);
    console.log("Conectado");
  } catch (error) {
    console.log("error de conexion" + error);
  }
};

app.get("/users", async (req, res) => {
  conectdb();
  try {
    const usuario = await user.find();
    res.status(200).json(usuario);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error al obtner usuario", error: error.message });
  }
});

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});