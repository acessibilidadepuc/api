var Instituicao = require('../models/instituicao');
var Acesso = require('../models/acesso');

exports.save = function(situacao,tipo,razao_social, cnpj, areaAtuacao,
                        site, rua, numero, complemento, bairro,
                        cep, cidade, estado, servicos,
                        recursos, email, telefone1, telefone2, permissao,
                        idAcesso, callback){
  //var obj = JSON.parse(recursos);
  var novaInstituicao = new Instituicao();
  novaInstituicao.situacao = situacao;
  novaInstituicao.tipo = tipo;
  novaInstituicao.razao_social = razao_social;
  novaInstituicao.cnpj = cnpj;
  novaInstituicao.areaAtuacao = areaAtuacao;
  novaInstituicao.site = site;
  novaInstituicao.idAcesso = idAcesso

  novaInstituicao.endereco.rua = rua;
  novaInstituicao.endereco.numero = numero;
  novaInstituicao.endereco.complemento = complemento;
  novaInstituicao.endereco.bairro = bairro;
  novaInstituicao.endereco.cep = cep;
  novaInstituicao.endereco.cidade = cidade;
  novaInstituicao.endereco.estado = estado;

  novaInstituicao.servicos = servicos;

  novaInstituicao.recursos = recursos;

  novaInstituicao.contato.email = email;
  novaInstituicao.contato.telefone1 = telefone1;
  novaInstituicao.contato.telefone2 = telefone2;

  novaInstituicao.permissao = permissao;
  //novaInstituicao.permissao.nome = nomePermissao;
  //novaInstituicao.permissao.tipo = tipoPermissao;

  novaInstituicao.save(function(erro, instituicao){
    if(erro){
    callback('deu erro = ' + erro);
    }else{
    callback(instituicao);
    }
  })
}



exports.list = function(id, callback){
  Instituicao.findOne({'idAcesso':id}, function(erro, instituicao){
    if(erro){
      callback('Deu erro');
    }else if(instituicao){
      callback({'instituicao':instituicao});
    }else{
      callback('instituicao não encontrado!');
    }
  })
}
