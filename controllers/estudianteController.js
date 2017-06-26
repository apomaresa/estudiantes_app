'use-strict'

var Estudiante  = require('../models/estudianteClass.js');

function setEstudiante(req, res) {
  var estudiante = new Estudiante();
  var params = req.body;

  estudiante.nombre = params.nombre;
  estudiante.curso = params.curso;
  estudiante.nota = params.nota;

  estudiante.save((err, estudianteStored)=>{
    if(err){
      res.status(500).send({error:'Ocurrio un error interno al intentar registrar estudiante'});
      console.log("STATUS 500: Ocurrio un error interno al intentar registrar estudiante");
    }else{
      res.status(200).send({estudiante:estudianteStored});
      console.log("STATUS 200: Estudiante registrado exitosamente");
    }
  });
}

function getEstudiante(req, res) {

  var estudianteId = req.params.id;

  Estudiante.findById(estudianteId, function(err, estudiante){
    if (err) {
      res.status(500).send({error:'Ocurrio un error interno al intentar encontrar el estudiante'});
      console.log("STATUS 500: Ocurrio un error interno al intentar encontrar el estudiante");
    } else {
      if (!estudiante) {
        res.status(404).send({error:'No se encontro estudiante'});
        console.log("STATUS 404: No se encontro estudiante");
      } else {
        res.status(200).send({estudiante:estudiante});
        console.log("STATUS 200: Estudiante encontrado exitosamente");
      }
    }
  });
}

function getEstudiantes(req, res) {

  Estudiante.find({}).sort('-nombre').exec(function(err, estudiantes){
    if (err) {
      res.status(500).send({error:'Ocurrio un error interno al intentar listar los estudiantes'});
      console.log("STATUS 500: Ocurrio un error interno al intentar listar los estudiantes");
    } else {
      if (!estudiantes) {
        res.status(404).send({error:'No se encontraron estudiantes'});
        console.log("STATUS 404: No se encontraron estudiantes");
      } else {
        res.status(200).send(estudiantes);
        console.log("STATUS 200: Estudiantes encontrados exitosamente");
      }
    }
  });
}

function updateEstudiante(req, res) {

  var estudianteId = req.params.id;
  var params = req.body;

  Estudiante.findByIdAndUpdate(estudianteId, params, (err, estudianteUpdated)=>{
    if (err) {
      res.status(500).send({error:'Ocurrio un error interno al intentar actualizar el estudiante'});
      console.log("STATUS 500: Ocurrio un error interno al intentar actualizar el estudiante");
    } else {
        res.status(200).send(estudianteUpdated);
        console.log("STATUS 200: Estudiante actualizado exitosamente");
      }
  });
}

function deleteEstudiante(req, res) {

  var estudianteId = req.params.id;

  Estudiante.findById(estudianteId, function(err, estudiante){
    if (err) {
      res.status(500).send({error:'Ocurrio un error interno al intentar eliminar el estudiante'});
      console.log("STATUS 500: Ocurrio un error interno al intentar eliminar el estudiante");
    } else {
      if (!estudiante) {
        res.status(404).send({error:'No se encontro estudiante'});
        console.log("STATUS 404: No se encontro estudiante");
      } else {
        estudiante.remove((err)=>{
          if (err) {
            res.status(500).send({error:'Ocurrio un error interno al intentar eliminar el estudiante'});
            console.log("STATUS 500: Ocurrio un error interno al intentar eliminar el estudiante");
          } else {
            res.status(200).send({message:'Estudiante eliminado exitosamente'});
            console.log("STATUS 200: Estudiante eliminado exitosamente");
          }
        });
      }
    }
  });
}


function status(req, res){
  res.status(200).send({
    message:"Server is running smoothly"
  });
  console.log("Server is running smoothly");
}

module.exports = {
    status,
    setEstudiante,
    getEstudiante,
    getEstudiantes,
    updateEstudiante,
    deleteEstudiante
}
