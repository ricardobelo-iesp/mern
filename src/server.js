const express = require("express");
const mongoose = require("mongoose");

const app = express();

const usuarioSchema = mongoose.Schema({
    username: {type: String},
    password: {type: String}
});

const usuarioModel = mongoose.model("usuarios", usuarioSchema);

app.get("/", async (req, res) => {
    const usuario = new usuarioModel({
        username: "Teste",
        password: "123"
    });

    await usuario.save();

    res.json(usuario)


    //res.send("Hello Word")
    //res.json({message: "Hello Word"})
});

app.listen(9090, async () => {
    await mongoose.connect("mongodb://localhost:27017/iesp");
    console.log("Servidor Rodando")
});