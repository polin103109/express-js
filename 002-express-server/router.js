const { Router } = require("express");
const router = Router();
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
module.exports = router;
