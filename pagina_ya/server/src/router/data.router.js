const express = require("express");
const database = require("../model/bd");
const jwt = require("jsonwebtoken");
const routerData = express.Router();

routerData.get("/data", async (req, res) => {
  const token = req.header("Authorization");

  
  const conection = await database.getConnection();
  if (!token) {
    return res
      .status(401)
      .json({ message: "Acceso no autorizado. Token no proporcionado." });
  }
  try {
    const decoded = jwt.verify(token, "Stack");
    const result = await conection.query("SELECT * FROM data ");
    res.status(200).json(result);
  } catch (error) {
    console.log(`error en la consulta`, error);
    await conection.end();
    res.status(500).json({ error: error });
  }
});
routerData.post("/data", async (req, res) => {
  const token = req.header("Authorization");
  const conection = await database.getConnection();
  console.log(req.body);
  let { name, profession, valoracion } = req.body;
  try {
    const decoded = jwt.verify(token, "Stack");
    await conection.query(
      `INSERT INTO data ( name,profession,valoracion) VALUES (?,?,?);`,
      [name, profession, valoracion]
    );

    res.status(200).json({ message: "salio bien" });
  } catch (error) {
    console.error("Error en la consulta:", error);
    res.status(500).json({ error: "Error en la consulta" });
  }
});

module.exports = routerData;
