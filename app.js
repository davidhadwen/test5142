const connect = require('connect')
const http = require('http');

var app = connect();

http.createServer(app).listen(8888);
console.log('Server is running..');

app.use(doFirst);



function doFirst(request, response, next){
    console.log("A user has just connected")
    
}

