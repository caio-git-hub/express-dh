const express = require('express');
const router = express.Router();

//chamando o contatoController, para usar neste arquivo
const contatoController = require("../controllers/contatoController");

//chamando o parametrosController, para usar neste arquivo
const parametrosController = require("../controllers/parametrosController");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//sempre que o usuario digitar /contato ele vai direcionar para esse metodo
router.get("/contato", contatoController.index);

/* GET PARAMETROS page. */
router.get("/parametros", parametrosController.index);

module.exports = router;
