var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('listado de usuarios');
});

router.post('/', function(req, res, next) {
  res.send('datos de usuario');
});

module.exports = router;
