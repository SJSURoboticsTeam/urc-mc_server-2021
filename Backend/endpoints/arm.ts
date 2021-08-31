import express from "express";
import {} from "../interfaces/arm.interface";
export const arm = express.Router();

arm.get("/", (req, res) => {
  res.send("arm-endpoint");
});

arm.post("/", (req, res) => {
  res.send("arm-endpoint");
});

arm.get("/status", (req, res) => {
  res.send("arm-endpoint");
});
