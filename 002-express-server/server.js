const express = require("express");
const port = 8000;

const server = express();
server.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
const router = express.Router();
router.get("/test", (req, res) => {
  res.send("test data");
});

router.get("/name", (req, res) => {
  res.send("simple express server");
});
router.get("/person", (req, res) => {
  res.status(200).json({
    name: "sabrina",
    age: "24",
    address: {
      city: "Chittagong",
      country: "Bangladesh",
    },
  });
});
server.use("/api", router);
