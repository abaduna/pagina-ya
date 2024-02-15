// const jwt = require("jsonwebtoken");
// const express = require("express");
// const dotenv = require("dotenv");
// const env = require("./.env");

// // get config vars
// dotenv.config();

// // access config var
// process.env.TOKEN_SECRET;

// function generateAccessToken(id) {
//   return jwt.sign(id, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
// }

// app.post("/api/createNewUser", (req, res) => {
//   // ...

//   const token = generateAccessToken({ id: req.body.id });
//   res.json(token);

//   // ...
// });
// //------------------------------------------// const jwt = require("jsonwebtoken");
// const jwt = require("jsonwebtoken");

// function authenticateToken(req, res, next) {
//   const authHeader = req.headers["authorization"];
//   const token = authHeader && authHeader.split(" ")[1];

//   if (token == null) return res.sendStatus(401);

//   jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
//     console.log(err);

//     if (err) return res.sendStatus(403);

//     req.user = user;

//     next();
//   });
// }

// app.get("/api/userOrders", authenticateToken, (req, res) => {
//   // executes after authenticateToken
//   // ...
// });

// // get token from fetch request
// const token = await res.json();

// // set token in cookie
// document.cookie = `token=${token}`

// //-------------------------------------------------------------------------------
const jwt = require("jsonwebtoken");
const database = require("./models/db");
const express = require("express")
const pingRouter = require("./api/endPoint")
const cors = require("cors"); // Importa el paquete cors


const app = express()
app.use(cors());
//midel
app.use(express.json());

app.get("/",(req,res)=>{
  res.send("hello word")
})
// Use the ping router for the /ping route
app.use("/", pingRouter);
app.listen(3001, () => {
  console.log(`corriendo por el puerto 3001`);
});
