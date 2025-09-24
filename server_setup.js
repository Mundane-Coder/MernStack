const http = require('http');

const server = http.createServer((req, res) =>{
    let a = 10;
    let b = 10;
    let c = a + b;
    res.end("hello form local host " + c);
});

server.listen(3000, ()=>{
    console.log("server runnig on local host: 3000");
});