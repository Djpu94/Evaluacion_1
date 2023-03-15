var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('listado de clientes');
});

router.post('/', function(req, res, next) {
    res.send('datos de cliente');
  });
module.exports = router;