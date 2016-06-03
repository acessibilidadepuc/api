var Acesso = require('../models/acesso');

exports.save = function(login, senha1, senha2, callback){
  Acesso.findOne({'login':login}, function(erro, acesso){
    if(erro){
      callback('Deu Erro');
    }else if(acesso){
      callback('Nome já existente');
    }else{
      var novoAcesso = new Acesso();
      novoAcesso.login = login;
      novoAcesso.senha1 = novoAcesso.gerarSenha(senha1);
      novoAcesso.senha2 = novoAcesso.gerarSenha(senha2);
      novoAcesso.token = novoAcesso.gerarToken(login);
      novoAcesso.save(function(erro, acesso){
        if(erro){
          callback('deu erro');
        }else{
          callback(acesso._id);
        }
      })
    }
  })
}

exports.login = function(login, senha, callback){
  Acesso.findOne({'login':login}, function(erro, acesso){
    if(erro){
      callback('Deu erro');
    }else if(acesso){
      if(acesso.validaSenha(senha)){
        callback(acesso);
      }else{
        callback('dados incorretos');
      }
    }else{
      callback('Acesso negado!');
    }
  })
}


exports.list = function(token, callback){
  Acesso.findOne({'token':token}, function(erro, acesso){
    if(erro){
      callback('Deu erro');
    }else if(acesso){
      callback({'login':acesso.login});
    }else{
      callback('Acesso não encontrado!');
    }
  })
}

exports.authorize = function(token, callback){
  Acesso.findOne({'token':token}, function(erro, acesso){
    if(erro){
      callback(false);
    }else if(acesso){
      callback(true);
    }else{
      callback(false);
    }
  })
}
