const express = require('express');

const QuetionController = require('./controllers/QuestionController');
const RoomController = require('./controllers/RoomController');


const route = express.Router();

route.get('/', (req, res) => res.render('index.ejs', {page: 'enter-room'}));
route.get('/create-pass', (req, res) => res.render('index.ejs', {page: 'create-pass'}));

route.post('/create-room', RoomController.create);
route.get('/room/:room', RoomController.open);

route.post('/question/create/:room', QuetionController.create);
route.post('/question/:room/:question/:action', QuetionController.index);

module.exports = route;
