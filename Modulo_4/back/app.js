// var express = require("express");
// var app = express();

// app.get("/", function (req, res) {
//   res.send("Hola Mundo!");
// });

// app.listen(3000, function () {
//   console.log("Aplicación ejemplo, escuchando el puerto 3000!");
// });

//Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



