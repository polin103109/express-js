import express from "express";
import { router } from "./router.js";

const port = 7000;
const app = express();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
app.use("", router);
