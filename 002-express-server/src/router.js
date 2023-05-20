const { Router } = require("express");
const Controller = require("./controller");
const router = Router();

router.get("/person", Controller.getUser);

function configureRoutes(server) {
  server.use("/api", router);
}
module.exports = { configureRoutes };
