var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  paises=[{"pais":"China", "poblacion": "1414782000"},
            {"pais":"India", "poblacion": "1392329000"},
            {"pais":"Estados Unidos", "poblacion": "336184000"},
            {"pais":"Indonesia", "poblacion": "279154000"},
            {"pais":"Pakistán", "poblacion": "241181000"}
  ]
  res.render('paises', {title: 'paises y sus poblaciones', paises:paises});
});

module.exports = router;
