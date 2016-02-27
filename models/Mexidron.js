var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var Mexidron = new Schema({
    nombre          : String,
    fechaCreacion   : { type: Date, default: Date.now }
});

module.exports = mongoose.model( 'Mexidron', Mexidron );
