const express = require("express")
const mysql = require("promise-mysql")
const cors = require("cors")
const morgan = require("morgan")


const app = express()


//miderwars
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


const routerUsuarios = require("./router/usuario.router")

app.use("/api",routerUsuarios)

const dataRouter = require("./router/data.router")

app.use("/api",dataRouter)

app.listen(3001,()=>{
    console.log("corriendo en el puerto 3001");
})