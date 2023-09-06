var express = require('express')
var router = express.Router()

router.get('/', function(req,res){
    res.send("<h2>This is the Home Page</h2>")
})
router.get('/about', function(req,res){
    res.send("<h2>This is the About Page</h2>")
})
module.exports = [router]