var http = require("http") //import HTTP module
var url = require("url")
var server = http.createServer(function (req, resp) {
    // Send the HTTP Header
    // HTTP Staus: 200 : ok 
    // Set Content type: text/plain
    resp.writeHead(200, {'content-Type': 'text/html'})
    // send the response body as 'HELLO WORLD'
resp.write('<h2 style="background-color: green;color: red; font-size: 100px; text-align: center"> Hello World </h2>')
// resp.write("requested URL: " + req.url)
// if(req.url=="/"){
//     resp.write("Request URL form Root")
// }
// else if(req.url.startsWith("/about")){
//     resp.write("Request URL form about Page")
// }
// else if(req.url=="/contact"){
//     resp.write("Request URL form about Contact Page")
// }
resp.write(req.url)
var parsedUrl = url.parse(req.url, true)
// console.log(parsedUrl)
console.log(parsedUrl.query)
console.log(parsedUrl.path)
resp.write("<br/>"+ parsedUrl.query.name)
resp.write("<br/>"+ parsedUrl.query.brand)
resp.end()
})

server.listen(8080, function(){
        console.log('server is running at 8085')
})