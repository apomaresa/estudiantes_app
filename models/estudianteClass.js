'use-strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var estudianteSchema = Schema({
  nombre:String,
  curso:String,
  nota:String
});

module.exports = mongoose.model('estudiante',estudianteSchema);
