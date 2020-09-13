const http = require('http');

const server = http.createServer((req,res) =>{
    res.end('Hello world\n');
});

server.listen(4242,()=> {

    console.log('Server is running on port: 4242')

});