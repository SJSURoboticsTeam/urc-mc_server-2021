from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'You have connected to the Mission Control Server!'

@app.route('/', methods=['GET', 'POST'])
def drive():
    json_get = flask.request.json

    is_operational = json_get["is_operational"]
    speed = json_get["speed"]
    angle = json_get["angle"]

    return f'Drive: {is_operational}, {speed}, {angle}'

@app.route('/arm', methods=['GET', 'POST'])
def arm():
    json_get = flask.request.json

    is_operational = json_get["is_operational"]
    shoulder = json_get["shoulder"]
    elbow = json_get["elbow"]
    rotunda = json_get["rotunda"]
    wrist = json_get["wrist"]

    return f"Arm: {is_operational}, {shoulder}, {elbow}, {rotunda}, {wrist}"

@app.route('/', methods=['GET', 'POST'])
def hand():
    json_get = flask.request.json

    is_operational = json_get["is_operational"]
    thumb_finger = json_get["thumb_finger"]
    index_finger = json_get["index_finger"]
    middle_finger = json_get["middle_finger"]
    ring_finger = json_get["ring_finger"]
    pinky_finger = json_get["pinky_finger"]

    return f"Hand: {is_operational}, {thumb_finger}, {index_finger}, {middle_finger}, {ring_finger}, {pinky_finger}"

@app.route('/', methods=['GET', 'POST'])
def mast():
    json_get = flask.request.json

    is_operational = json_get["is_operational"]
    pitch = json_get["pitch"]
    roll = json_get["roll"]

    return f"Mast: {is_operational}, {pitch}, {roll}"

@app.route('/', methods=['GET', 'POST'])
def drive_feedback():
    json_get = flask.request.json

    is_operational = json_get["is_operational"]
    drive_mode = json_get["drive_mode"]
    battery = json_get["battery"]
    left_wheel_speed = json_get["left_wheel_speed"]
    left_wheel_angle = json_get["left_wheel_angle"]
    right_wheel_speed = json_get["right_wheel_speed"]
    right_wheel_angle = json_get["right_wheel_angle"]
    back_wheel_speed = json_get["back_wheel_speed"]
    back_wheel_angle = json_get["back_wheel_angle"]

    return json_get

@app.route('/', methods=['GET', 'POST'])
def arm_feedback():
    json_get = flask.request.json

    battery = json_get["battery"]

    return f"Arm Feedback: {battery}"

@app.route('/', methods=['GET', 'POST'])
def hand_feedback():
    json_get = flask.request.json

    battery = json_get["battery"]

    return f"Hand Feedback: {battery}"

@app.route('/', methods=['GET', 'POST'])
def mast_feedback():
    json_get = flask.request.json

    battery = json_get["battery"]

    return f"Mast Feedback: {battery}"