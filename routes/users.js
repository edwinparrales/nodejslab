var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('No estoy enrutando solo doy una respuestag');
});

module.exports = router;
