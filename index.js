const http = require('http'); 
const url = require("url");

const server = http.createServer((req, res) => {
  if (method === "GET" && route === "/products") {
  
}

  res.end("Welcome to Node js")
});

server.listen(5000, () => {
  console.log("http://localhost:5000");
});