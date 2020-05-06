const http = require("http");

const handleRequest = (req, res) => {
  console.log("Received req for URL: " + req.url);
  res.writeHead(200);
  res.end("Hello Existential Paradigm!");
};
let www = http.createServer(handleRequest);
www.listen(8080);
