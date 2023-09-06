var mysql = require("mysql2")
exports.connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "root",
    database : "bipard_db"
})
