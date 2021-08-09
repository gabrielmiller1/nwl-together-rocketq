const express = require('express');

const route = express.Router();

route.get('/', (req, res) => res.render('home.ejs'));
route.get('/create-pass', (req, res) => res.render('create-pass.ejs'));
route.get('/room', (req, res) => res.render('room.ejs'));


module.exports = route;
