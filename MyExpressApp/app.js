var express = require('express')
var app = express()
var router = require('./rout1')
// app.get('/', function(req,res){
//     res.send("<h2> Hello world I am Using Express JS</h2>")

// })

app.use(router)

app.listen(8085, function() {
    console.log(`Express Sevrver listening on port:8085`)
  })