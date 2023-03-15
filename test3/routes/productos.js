var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    productos=[
            {"name":"PS5", "codigo": "0001", "precio": "650000"},
            {"name":"PS4", "codigo": "0002", "precio": "400000"},
            {"name":"XBOX ONE", "codigo": "0003", "precio": "300000"},
            {"name":"XBOX serie x", "codigo": "0004", "precio": "650000"},
            {"name":"Nintendo Switch", "codigo": "0005", "precio": "250000"},
            {"name":"Nintendo Switch OLED", "codigo": "0006", "precio": "300000"},
            {"name":"Smart TV Samsung", "codigo": "0007", "precio": "450000"},
            {"name":"Laptop Lenovo", "codigo": "0008", "precio": "500000"},
            {"name":"Teclado Inalabrico Logitech", "codigo": "0009", "precio": "20000"},
            {"name":"Raton Genius", "codigo": "0010", "precio": "10000"},
  ]
  res.render('productos', {title: 'Productos', productos: productos});
});

module.exports = router;