import express from "express";
import { DriveRequest, DriveStatus } from "../interfaces/drive.interface";
export const drive = express.Router();

var driveCommands: DriveRequest = {
  heart_beat: 0,
  is_operational: 1,
  drive_mode: "S",
  speed: 0,
  angle: 0,
};

var driveStatus: DriveStatus = {
  heart_beat: 0,
  is_operational: 0,
  drive_mode: "S",
  battery: 0,
  left_wheel_speed: 0,
  left_wheel_angle: 0,
  right_wheel_speed: 0,
  right_wheel_angle: 0,
  back_wheel_speed: 0,
  back_wheel_angle: 0,
};

drive.get("/", (req, res) => {
  driveStatus.is_operational = Number(req.query.is_operational);
  driveStatus.drive_mode = String(req.query.drive_mode);
  driveStatus.battery = Number(req.query.battery);
  driveStatus.left_wheel_speed = Number(req.query.left_wheel_speed);
  driveStatus.left_wheel_angle = Number(req.query.left_wheel_angle);
  driveStatus.right_wheel_speed = Number(req.query.right_wheel_speed);
  driveStatus.right_wheel_angle = Number(req.query.right_wheel_angle);
  driveStatus.back_wheel_speed = Number(req.query.back_wheel_speed);
  driveStatus.back_wheel_angle = Number(req.query.back_wheel_angle);
  driveCommands.heart_beat = Number(req.query.heart_beat_count);
  driveCommands.heart_beat += 1;
  console.log("Query Params: ", req.query);
  console.log("Returned Commands: ", driveCommands);
  res.jsonp(driveCommands);
});

drive.post("/", (req, res) => {
  driveCommands.is_operational = req.body.is_operational;
  driveCommands.drive_mode = req.body.drive_mode;
  driveCommands.speed = req.body.speed;
  driveCommands.angle = req.body.angle;
  driveCommands.heart_beat = 0;
  res.jsonp(driveCommands);
});

drive.get("/status", (req, res) => {
  console.log(driveStatus);
  res.jsonp(driveStatus);
});