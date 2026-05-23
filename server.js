
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

mongoose.connect('mongodb+srv://727724euec016_db_anbu:dbanbu123@cluster0.lbd1lor.mongodb.net/?appName=Cluster0')
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
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running on port 5000');
});
app.post('/add-session', async (req, res) => {

    const newSession = new Session(req.body);

    await newSession.save();

    res.send('Session Added');

});