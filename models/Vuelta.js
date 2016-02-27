var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var Vuelta = new Schema({
    idBatea           : String,
    idRecorrido       : String,
    idMexidron        : String,
    Estado            : Number,
    FechaModificacion : { type: Date, default: Date.now },
    FechaInicio       : { type: Date, default: Date.now }
});

module.exports = mongoose.model( 'Vuelta', Vuelta );
