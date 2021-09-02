export interface DriveRequest {
  is_operational: Number;
  drive_mode: String;
  speed: Number;
  angle: Number;
}

export interface DriveStatus {
  is_operational: Number;
  drive_mode: String;
  battery: Number;
  left_wheel_speed: Number;
  left_wheel_angle: Number;
  right_wheel_speed: Number;
  right_wheel_angle: Number;
  back_wheel_speed: Number;
  back_wheel_angle: Number;
}
