'use-strict'

var mongoose = require('mongoose');
var app = require('./app.js');

var port = process.env.PORT||2021;

mongoose.connect('mongodb://localhost:27017/estudiantes_db', function (err,res) {
	if(err){
		throw err;
	}else{
	app.listen(port, function(){
		console.log("SERVER UP AND LISTEN PORT :)"+port);
	});
}
});
