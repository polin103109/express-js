const express = require("express");
const port = 3000;

const server = express();
server.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
server.get("/test", (req, res) => {
  res.send("test data");
});

server.get("/name", (req, res) => {
  res.send("simple express server");
});
server.get("/person", (req, res) => {
  res.status(200).json({
    name: "sabrina",
    age: "24",
  });
});
