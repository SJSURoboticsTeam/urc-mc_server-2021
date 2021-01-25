const express = require('express')
const app = express()
const port = 3000

let serverModels = {
    drive: {
        driveData: 0
    },
    arm: {
        armData: 0
    },
    endEffector: {
        endEffectorData: 0
    },
    power: {
        powerData: 0
    },
    science: {
        scienceData: 0
    },
    autonomy: {
        autonomyData: 0
    }
};

app.get('/', (req, res) => {
    res.send('Connected to MC server');
});

/**
* MC POST/PUT Commands
*/

app.put('/drive', (req, res) => {
    console.log("Connected to /drive (PUT)");
    serverModels.drive = req.body;
    res.json(req.body);
});

app.put('/arm', (req, res) => {
    console.log("Connected to /arm (PUT)");
    serverModels.arm = req.body;
    res.json(req.body);
});

app.put('/endEffector', (req, res) => {
    console.log("Connected to /endEffector (PUT)");
    serverModels.endEffector = req.body;
    res.json(req.body);
});

app.put('/power', (req, res) => {
    console.log("Connected to /power (PUT)");
    serverModels.power = req.body;
    res.json(req.body);
});

app.put('/science', (req, res) => {
    console.log("Connected to /science (PUT)");
    serverModels.science = req.body;
    res.json(req.body);
});

app.put('/autonomy', (req, res) => {
    console.log("Connected to /autonomy (PUT)");
    serverModels.autonomy = req.body;
    res.json(req.body);
});

/** 
* Rover GET Commands
*/

app.get('/drive', (req, res) => {
    console.log("Connected to /drive (GET)");
    let driveModel = serverModels.drive;
    res.json(driveModel);
});

app.get('/arm', (req, res) => {
    console.log("Connected to /arm (GET)");
    let armModel = serverModels.arm;
    res.json(armModel);
});

app.get('/endEffector', (req, res) => {
    console.log("Connected to /endEffector (GET)");
    let endEffectorModel = serverModels.endEffector;
    res.json(endEffectorModel);
});

app.get('/power', (req, res) => {
    console.log("Connected to /power (GET)");
    let powerModel = serverModels.power;
    res.json(powerModel);
});

app.get('/science', (req, res) => {
    console.log("Connected to /science (GET)");
    let scienceModel = serverModels.science;
    res.json(scienceModel);
});

app.get('/autonomy', (req, res) => {
    console.log("Connected to /autonomy (GET)");
    let autonomyModel = serverModels.autonomy;
    res.json(autonomyModel);
});

app.all('*', (req, res) => {
    console.log('Invalid route');
    res.redirect(`http://localhost:${port}`);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})