var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var db = require("./db/dbConnection")
// To serve static resources
app.use(express.static('public'))


var router = express.Router()

// For Request Data Persing
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


//Routing for get data

app.post('/saveEmployee', function(req,res){
    console.log(req.body)

    var insertQry = 'insert into employee values (?,?,?,?,?,?)'
    var FormData = req.body
    db.connection.execute(insertQry, [FormData.empid, FormData.fname, FormData.email, FormData.password, FormData.salary,FormData.salary] , function(err, result){
        if(err){
            res.send("Server Error")
        }else{
            res.send("<h2>Registered Succesfully!</h2>")
        }
    })
})
// router.post('/about', function(req,res){
//     res.send("<h2>This is the About Page</h2>")
// })

app.listen(8085, function(){
    console.log("Server running at 8085")
})
