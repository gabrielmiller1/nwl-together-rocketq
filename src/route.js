const express = require('express');

const QuetionController = require('./controllers/QuestionController');

const route = express.Router();

route.get('/', (req, res) => res.render('index.ejs', {page: 'enter-room'}));
route.get('/create-pass', (req, res) => res.render('index.ejs', {page: 'create-pass'}));
route.get('/room', (req, res) => res.render('room.ejs'));

route.post('/room/:room/:question/:action', QuetionController.index);


module.exports = route;
