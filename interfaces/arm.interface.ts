export interface ArmRequest {
  is_operational: Number;
  shoulder: Number;
  elbow: Number;
  rotunda: Number;
  wrist_pitch: Number;
  wrist_roll: Number;
  thumb: Number;
  index: Number;
  middle: Number;
  ring: Number;
  pinky: Number;
}

export interface ArmStatus extends ArmRequest {
  battery: Number;
}
