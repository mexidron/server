var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var Batea = new Schema({
	nombre		     : String,
  version        : float,
	fechaCreacion	 : { type: Date, default: Date.now },
  posicion       : { coordinates: { type: [Number], index: '2dsphere'} },
	orientacion    : float
});

module.exports = mongoose.model( 'Batea', Batea );
