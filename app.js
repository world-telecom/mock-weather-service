const express = require('express');

const app = express();
const router = express.Router();

router.get('/forecast', (req, res) => {
    return res.send([
        {
            day: '01-07-2021',
            minTemp: 26,
            maxTemp: 27,
            precipProb: 7,
            condition: 'Partly Cloudy',
        },
        {
            day: '02-07-2021',
            minTemp: 25,
            maxTemp: 28,
            precipProb: 8,
            condition: 'Partly Cloudy',
        },
        {
            day: '03-07-2021',
            minTemp: 26,
            maxTemp: 32,
            precipProb: 5,
            condition: 'Sunny',
        },
        {
            day: '04-07-2021',
            minTemp: 27,
            maxTemp: 31,
            precipProb: 3,
            condition: 'Sunny',
        },
        {
            day: '05-07-2021',
            minTemp: 25,
            maxTemp: 33,
            precipProb: 4,
            condition: 'Sunny',
        },
        {
            day: '06-07-2021',
            minTemp: 26,
            maxTemp: 29,
            precipProb: 7,
            condition: 'Scattered Showers',
        },
        {
            day: '07-07-2021',
            minTemp: 26,
            maxTemp: 27,
            precipProb: 7,
            condition: 'Partly Cloudy',
        },
    ]);
});

app.use('/api', router);

app.listen(3001, () => console.log('Listening on port 3001...'));
