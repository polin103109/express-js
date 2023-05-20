const { Router } = require("express");
const Controller = require("./controller");
const router = Router();

router.get("/person", Controller.getUser);
router.get("/person/:id", Controller.getUserById);

function configureRoutes(server) {
  server.use("/api", router);
}
module.exports = { configureRoutes };
