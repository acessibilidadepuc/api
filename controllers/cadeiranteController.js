var Cadeirante = require('../models/cadeirante');
var Acesso = require('../models/acesso');

exports.save = function(situacao,tipo,nome, email, celular,
                        telefone, idAcesso, callback){
  //var obj = JSON.parse(recursos);
  var novoCadeirante = new Cadeirante();
  novoCadeirante.situacao = situacao;
  novoCadeirante.tip = tipo;
  novoCadeirante.nome = nome;
  novoCadeirante.email = email;
  novoCadeirante.celular = celular;
  novoCadeirante.telefone = telefone;
  novoCadeirante.idAcesso = idAcesso;

  novoCadeirante.save(function(erro, cadeirante){
    if(erro){
    callback('deu erro = ' + erro);
    }else{
    callback(cadeirante);
    }
  })
}



exports.list = function(idAcesso, callback){

  console.log("IdAcesso = " + idAcesso);
  Cadeirante.findOne({'idAcesso':idAcesso}, function(erro, cadeirante){
    if(erro){
      callback('Deu erro');
    }else if(cadeirante){
      callback({'cadeirante':cadeirante});
    }else{
      callback('cadeirante não encontrado!');
    }
  })
}


exports.update = function(cadeirante, callback){

  console.log("_id = " + cadeirante._id);
  Cadeirante.update({'_id':cadeirante._id},
                    {
                      nome : cadeirante.nome
                    }, function(erro, cadeirante){
    if(erro){
      callback('Deu erro');
    }else if(cadeirante){
      callback({'cadeirante':cadeirante});
    }else{
      callback('cadeirante não encontrado!');
    }
  })
}
