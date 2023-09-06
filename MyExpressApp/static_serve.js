var express = require('express')
var app = express()
var db = require("./db/dbConnection")

app.use(express.static('public'))
// app.use(bodyParser.urlencoded({extended:true}))
// app.use(bodyParser.json())

app.use("/testdb", function(req, res){
    res.send(db.connection)
})
app.listen(8085, function(){
    console.log("Server running at 8085")
})