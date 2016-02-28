// load required packages
var Job = require('../models/Job');
var Mexidron = require('../models/Mexidron');
var Etapa = require('../models/Etapa');

const WAIT = 0;
const STARTED = 1;
const FINISHED = 2;
const ERROR = 3;

exports.consultJob = function(req, res) {
  console.log("controller consult");
  var trabajo = {
    'idBatea'        : 2,
    'idCuerda'       : 1,
    'puntoFinal'     : [0,0],
    'altura'         : 0,
    'intervaloFoto'  : 1
  };
  res.json(trabajo);
}

exports.storeJob = function(req, res) {
  console.log("controller store");
}
