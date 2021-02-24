const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

let people = {
    'tester': {
        name: 'Tester',
        points: []
    },
    'vika2506':
        {
            name: 'Вика Черноокая',
            points: [1, 0, 0, 1, 0, 0, 1, 1, 0, 0]
        }
    ,
    2:
        {
            name: 'Ololo Ololoev',
            points: []
        }
}

app.get('/api/authorize', (req, res) => {
    if (req.query.login in people) {
        res.json(people[req.query.login]);
    } else {
        res.json(req.query)
    }
})
app.post('/api/barmen', (req, res) => {
    if (req.query.userLogin in people) {
        people[req.query.userLogin].points[req.query.id] = 1;
        res.json(people[req.query.userLogin].points);
    } else {
        res.json(req.query)
    }
})

app.post('/api/register', (req, res) => {
    if (!(req.query.login in people)) {
        people[req.query.login] = {
            name: req.query.name,
            points: []
        }
        res.json({name: people[req.query.login].name});
    } else {
        res.json(req.query)
    }
})

app.get('/api/barmen', (req, res) => {
    if (req.query.userLogin in people) {
        res.json(people[req.query.userLogin].points);
    }
})

const port = 5000;

app.listen(port, () => console.log(`Started on port ${port}`));