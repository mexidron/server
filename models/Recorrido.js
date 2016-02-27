var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var Recorrido = new Schema({
	nombre		: String,
	fechaCreacion	: { type: Date, default: Date.now },
	consumoBateria	: float
});

module.exports = mongoose.model( 'Recorrido', Recorrido );
