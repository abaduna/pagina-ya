const database = require("../models/db");
const jwt = require("jsonwebtoken");
module.exports.login = async (req, res) => {
  const { userName, password } = req.body;
  const consult = `SELECT * FROM login WHERE username=? and password=? ;`;
  try {
    const connection = await database.getConnection();
    const result = await connection.query(consult, [userName, password]);
    if (result.length > 0) {
      const token = jwt.sign(
        {
          userName: userName,
        },
        "stack",
        {
          expiresIn: "3m",
        }
      );
      console.log(result);
      res.send({token});
    } else {
      console.log("No se enocntro el usuario");
      res.send("No se enocntro el usuario");
    }
  } catch (error) {
    console.log(error);
  }
};
