
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Session = require('./models/Session');
const Participant =
require('./models/Participant');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

mongoose.connect('mongodb://127.0.0.1:27017/training_management')
.then(() => console.log('MongoDB Connected'))
.catch((err) => console.log(err));

app.get('/', (req, res) => {
    res.send('Training Management Server Running');
});
app.get('/sessions', async (req, res) => {

    const sessions = await Session.find();

    res.json(sessions);

});
app.post('/add-participant',
async (req, res) => {

    const newParticipant =
    new Participant(req.body);

    await newParticipant.save();

    res.send('Participant Added');

});
app.get('/participants',
async (req, res) => {

    const participants =
    await Participant.find();

    res.json(participants);

});
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
app.post('/add-session', async (req, res) => {

    const newSession = new Session(req.body);

    await newSession.save();

    res.send('Session Added');

});