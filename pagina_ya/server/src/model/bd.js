const mysql = require("promise-mysql")

const comection = mysql.createConnection({
    host:"localhost",
    database:"paginaya",
    user:"root",
    password:"1234"
})

const getConnection = async ()=>await comection

module.exports = {
    getConnection
}