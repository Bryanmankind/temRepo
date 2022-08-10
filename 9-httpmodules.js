const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to my home page");
  }
  if (req.url === "/about") {
    res.end("welcome to my home page about node.js");
  }
  res.end(`<h1>Oops!!!</h1> 
  <p>page not found</p>
  <a href="/">Back Home </a>
  `);
});

server.listen(5000);
