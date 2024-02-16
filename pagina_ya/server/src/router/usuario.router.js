const express = require("express");
const database = require("../model/bd");
const routerUsuarios = express.Router();
const bodyParser = require('body-parser');
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

module.exports = routerUsuarios;
