const database = require("../models/db");
module.exports.ping = async (req, res) => {
  const connection = await database.getConnection();

  try {
    const result = await connection.query(`SELECT * FROM  login;`);
    console.log(result);
    res.status(200).json({...result})
  } catch (error) {
    console.error(error);
  }
};
