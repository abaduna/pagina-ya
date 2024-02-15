const express = require("express")
const router = express.Router()
const {login} = require("../controllers/LoginControlers")
const { ping } = require("../controllers/PingControler")

router.get("/ping",ping)


router.post("/login",login)

module.exports = router; // Export the router