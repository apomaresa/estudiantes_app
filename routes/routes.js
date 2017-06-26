'use-strict'

var express = require('express');

var estudianteController = require('../controllers/estudianteController.js');

var api = express.Router();

api.get('/status', estudianteController.status);
api.post('/setEstudiante', estudianteController.setEstudiante);
api.get('/getEstudiante/:id', estudianteController.getEstudiante);
api.get('/getEstudiantes', estudianteController.getEstudiantes);
api.put('/updateEstudiante/:id', estudianteController.updateEstudiante);
api.delete('/deleteEstudiante/:id', estudianteController.deleteEstudiante);

module.exports = api;
