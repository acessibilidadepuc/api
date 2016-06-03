var express = require('express');
var router = express.Router();
var cadeiranteController = require('../controllers/cadeiranteController');

function pegarIdAcesso(req, res, next){
  var header = req.headers['authorization'];
  if(typeof header !== 'undefined'){
    req.idAcesso = header;
    next();
  }else{
    res.sendStatus(403);
  }
}

router.post('/cadastrar', function(req, res){
  var situacao = req.body.situacao;
  var tipo = req.body.tipo;
  var nome = req.body.nome;
  var email = req.body.email;
  var celular = req.body.celular;
  var telefone = req.body.telefone;
  var idAcesso = req.body.idAcesso;
  cadeiranteController.save(situacao,tipo,nome, email, celular,
                          telefone, idAcesso, function(resp){
    res.json(resp);
  })
})

router.get('/listar', pegarIdAcesso, function(req, res){
  var idAcesso = req.idAcesso;
  console.log("Primeira parte de idAcesso = " + idAcesso);
  cadeiranteController.list(idAcesso, function(resp){
    res.json(resp);
  })
})

router.put('/Update', function(req, res){
  var c = req.body.cadeirante;
  console.log("Primeira parte de idAcesso = " + c._id);
  cadeiranteController.update(c, function(resp){
    res.json(resp);
  })
})

module.exports = router;
