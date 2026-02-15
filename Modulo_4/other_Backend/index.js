console.log("bakend");

import express from 'express'
import mongoose from 'mongoose';

const app = express();
app.use (express.json());

// definir la estructura del schema

con

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
