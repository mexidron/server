var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var Foto = new Schema({
    path          : String,
    idBatea       : String,
    idCuerda      : String,
    altura        : Number,
    temperatura   : Number,
    presion       : Number,
    distancia     : Number,
    fechaCaptura : { type: Date, default: Date.now }
});

module.exports = mongoose.model( 'Foto', Foto );
