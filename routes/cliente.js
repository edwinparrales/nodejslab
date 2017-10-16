var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('cliente', { title: 'Hola yo soy cliente' });
});

module.exports = router;