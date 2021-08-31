import express from "express";
import os from "os";

import { drive } from "./endpoints/drive";
import { arm } from "./endpoints/arm";

const app = express().set("json spaces", 2);
const port = 5000;
const networkInterfaces = os.networkInterfaces();
console.log(networkInterfaces);

app.use(express.json({ limit: "2mb" }));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Mission Control Backend"));
app.use("/drive", drive);
app.use("/arm", arm);

app.listen(port, () => {
  console.log(`Computer:\thttp://localhost:5000`);
});
