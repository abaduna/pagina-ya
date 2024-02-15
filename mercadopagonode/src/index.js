import express from "express";
import paymen from "./routes/paymen.js";
import morgan from "morgan"
const app = express();

app.use(morgan("dev"))

app.use(paymen);

app.listen(3000, () => {
  console.log("server on port 3000");
});
