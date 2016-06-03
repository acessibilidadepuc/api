var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;

var AcessoSchema = new Schema({
  login:String,
  senha1:String,
  senha2:String,
  token:String
});

//geração de token
AcessoSchema.methods.gerarToken = function(login){
  return jwt.sign({'login':login}, 'segredo');
}

//método de cliptografia
AcessoSchema.methods.gerarSenha = function(senha){
    return bcrypt.hashSync(senha, bcrypt.genSaltSync(9));
}

//comparar senha
AcessoSchema.methods.validaSenha = function(senha){
    return bcrypt.compareSync(senha, this.senha1);
}


module.exports = mongoose.model('Acesso', AcessoSchema);
