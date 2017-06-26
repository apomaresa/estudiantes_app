'use-strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var api = require('./routes/routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function (req,res,next) {
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','X-API-KEY, Origin, X-Request-With, Content-Type, Accept, Access-Control-Request-Method');
	res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

app.use('/api',api);

module.exports = app;
