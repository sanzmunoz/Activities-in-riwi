console.log("ocupando espacio");

let express = require("express");
const mongo = require("mongoose")
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

mongo.connect("mongodb://localhost:27017/BasePrueba").then(()=>{
    console.log("Conectando...");
    
}).catch((error) =>{
    console.log("no fuiciono" + error);
});

let PersonaSchema= mongo.Schema(
    {
        nombre : String,
        apellido: String,
        email: String,
        cedula :String
    },
    {
        Collection : "usuarios"
    }
);

let Persona = mongo.model("usuarios", PersonaSchema);

app.get("/persona", async (req, res) => {
    let Persona1 = await Persona.find({});
    res.json(Persona1)
    console.log(Persona1);
});