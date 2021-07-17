// startup
const http = require('http');

const hostname = '127.0.0.1';
const port = 5500;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  fs.readFile("./index.html",null,function(err,data){
        res.write(data);
        res.end();
  })
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// code
let crimeData;
const fs = require("fs");

setInterval(() => {
    fs.readFile("crime.json","utf-8",(err,data)=>{
        crimeData = data;
        // console.log(crimeData)
     });
}, 1);

function login() {
    
}