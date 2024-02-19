const express = require("express");
const database = require("../model/bd");
const routerUsuarios = express.Router();
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

routerUsuarios.post("/usuarios", async (req, res) => {
  const conection = await database.getConnection();
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(username, hashedPassword);
    const result = await conection.query(
      "SELECT * FROM userios where username = ?",
      [username]
    );
    if (result.length === 0) {
      return res.status(200).json({ message: "Usuario no encontrado" });
    }
    const hashedPasswordFromDB = result[0].password;

    // Compara la contraseña proporcionada con el hash almacenado
    const isMatch = await bcrypt.compare(password, hashedPasswordFromDB);
    if (isMatch) {
      const token = jwt.sign({ username }, "Stack", {
        expiresIn: "24h",
      });
      console.log(token);
      res
        .status(200)
        .json({ message: "Usuario autenticado con éxito", token: token });
    } else {
      res.status(200).json({ message: "Credenciales incorrectas" });
    }
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(403).json({ error: "usuario no encontrado" });
  }
});
routerUsuarios.post("/register", async (req, res) => {
  const conection = await database.getConnection();
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const result = await conection.query(
      "INSERT INTO userios (username, password) VALUES (?, ?)",
      [username, hashedPassword]
    );
    res.status(201).json({ message: "Usuario creado con éxito" });
  } catch (error) {
    res.status(500).send("Error al crear un nuevo usuario");
  }
});
module.exports = routerUsuarios;
