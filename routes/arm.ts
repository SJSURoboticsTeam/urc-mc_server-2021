import express from "express";
import { ArmRequest, ArmStatus } from "../interfaces/arm.interface";
export const arm = express.Router();

var armCommands: ArmRequest = {
  heartbeat_count: 0,
  is_operational: 1,
  arm_speed: 0,
  rotunda_angle: 0,
  shoulder_angle: 0,
  elbow_angle: 0,
  wrist_roll: 0,
  wrist_pitch: 0,

  pinky_angle: 0,
  ring_angle: 0,
  middle_angle: 0,
  pointer_angle: 0,
  thumb_angle: 0,
}

var armStatus: ArmStatus = {
  heartbeat_count: 0,
  is_operational: 1,
  arm_speed: 0,
  rotunda_angle: 0,
  shoulder_angle: 0,
  elbow_angle: 0,
  wrist_roll: 0,
  wrist_pitch: 0,

  pinky_angle: 0,
  ring_angle: 0,
  middle_angle: 0,
  pointer_angle: 0,
  thumb_angle: 0,
}

arm.get("/", (req, res) => {
  res.send("arm-endpoint");
});

arm.post("/", (req, res) => {
  res.send("arm-endpoint");
});

arm.get("/status", (req, res) => {
  res.send("arm-endpoint");
});