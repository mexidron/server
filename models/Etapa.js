var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var Etapa = new Schema({
    nombre          : String,
    puntoFinal      : { coordinates: { type: [Number], index: '2dsphere'} },
    altura          : Number,
    intervaloFoto   : Number
});

module.exports = mongoose.model( 'Etapa', Etapa );
