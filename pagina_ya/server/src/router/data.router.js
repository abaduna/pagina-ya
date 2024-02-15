const express = require("express");
const database = require("../model/bd");

const routerData = express.Router();

routerData.get("/data", async (req, res) => {
  const conection = await database.getConnection();
  try {
    const result = await conection.query("SELECT * FROM data ");
    res.status(200).json(result);
  } catch (error) {
    console.log(`error en la consulta`, error);
    await conection.end();
    res.status(500).json({ error: "Error en la consulta" });
  }
});
routerData.post("/data", async (req, res) => {
  const conection = await database.getConnection();
  console.log(req.body);
  let { name, profession, valoracion } = req.body;
  try {
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
