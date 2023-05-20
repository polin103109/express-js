import { Router } from "express";
const router = Router();

router.get("/hello", (req, res) => {
  res.status(200).send("hello from es module");
});
export { router };
