var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  clientes=[
    {"nombre":"Daniel", "apeMat": "Urbaez", "apePat": "Perez", "edad": "28", rut: "11.111.111-1"},
    {"nombre":"Jonathan", "apeMat": "Urbaez", "apePat": "Perez", "edad": "27", rut: "22.222.222-2"},
    {"nombre":"Filemon", "apeMat": "Rodriguez", "apePat": "Perez", "edad": "56", rut: "33.333.333-3"},
    {"nombre":"Eucaris", "apeMat": "Rodriguez", "apePat": "Urbaez", "edad": "54", rut: "44.444.444-4"},
    {"nombre":"Sarahis", "apeMat": "Mohamet", "apePat": "Perez", "edad": "35", rut: "55.555.555-5"},

]
  res.render('clientes', {title: 'Clientes del Sistema', clientes: clientes});
});

module.exports = router;