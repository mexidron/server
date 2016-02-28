var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var jobSchema = new Schema({
  idBatea        : String,
  idRecorrido    : String,
  idMexidron     : String,
  status         : Number,
  dateModif      : { type: Date, default: Date.now },
  dateInit       : { type: Date, default: Date.now }
});

//module.exports = mongoose.model( 'Job', Job );
Job = mongoose.model('Job', jobSchema);

Job.retrieveByStatus = function(status, res, next) {
  Job.find({ 'status' : status }, function (err, job) {
    if (err) {
      return next(err);
    }
    return job;
  });
}
