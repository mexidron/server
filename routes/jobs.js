var express = require('express');
var router = express.Router();
var jobsController = require('../controllers/jobsController');

/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});*/

/*router.route('/jobs')
  .post(jobsController.storeJob)
  .get(jobsController.consultJob);*/

router.get('/', jobsController.consultJob);
router.post('/', jobsController.storeJob);

module.exports = router;
