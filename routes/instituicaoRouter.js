var express = require('express');
var router = express.Router();
var instituicaoController = require('../controllers/instituicaoController');


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
  var razao_social = req.body.razao_social;
  var cnpj = req.body.cnpj;
  var areaAtuacao = req.body.areaAtuacao;
  var site = req.body.site;
  var rua = req.body.rua;
  var numero = req.body.numero;
  var complemento = req.body.complemento;
  var bairro = req.body.bairro;
  var cep = req.body.cep;
  var cidade = req.body.cidade;
  var estado = req.body.estado;
  var servicos = req.body.servicos;
  var recursos = req.body.recursos;
  var email = req.body.email;
  var telefone1 = req.body.telefone1;
  var telefone2 = req.body.telefone2;
  var permissao = req.body.permissao;
  var idAcesso = req.body.idAcesso;
  instituicaoController.save(situacao, tipo, razao_social, cnpj, areaAtuacao,
                              site, rua, numero, complemento, bairro,
                              cep, cidade, estado, servicos,
                              recursos, email, telefone1, telefone2, permissao,
                              idAcesso, function(resp){
    res.json(resp);
  })
})

router.get('/listar',pegarIdAcesso, function(req, res){
  var id = req.idAcesso;
  instituicaoController.list(id, function(resp){
    res.json(resp);
  })
})

module.exports = router;
