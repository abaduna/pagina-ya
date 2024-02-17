const express = require("express");
const database = require("../model/bd");
const routerUsuarios = express.Router();
const bodyParser = require("body-parser");
routerUsuarios.post("/usuarios", async (req, res) => {
  const conection = await database.getConnection();
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await conection.query(
      "SELECT * FROM userios where username = ? and password = ?",
      [username, hashedPassword]
    );

    res.status(200).json(result);
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(403).json({ error: "Error en la consulta" });
  }
});
routerUsuarios.post("/register", async (req, res) => {
  const conection = await database.getConnection();
  const { username, password } = req.body;
  try {
    const result = await conection.query(
      "INSERT INTO userios (username, password) VALUES (?, ?)",
      [username, password]
    );
    res.status(201).send("Usuario creado con éxito");
  } catch (error) {
    res.status(500).send("Error al crear un nuevo usuario");
  }
});
module.exports = routerUsuarios;
