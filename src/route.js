const express = require('express');

const QuetionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');


const route = express.Router();

route.get('/', (req, res) => res.render('index.ejs', {page: 'enter-room'}));
route.get('/create-pass', (req, res) => res.render('index.ejs', {page: 'create-pass'}));
route.get('/room/:room', (req, res) => res.render('room.ejs'));

route.post('/question/:room/:question/:action', QuetionController.index);
route.post('/create-room', RoomController.create);

module.exports = route;
