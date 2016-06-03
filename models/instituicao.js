var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;

var InstituicaoSchema = new Schema({
  situacao:String,
  tipo:String,
  razao_social:String,
  cnpj:String,
  areaAtuacao:String,
  tipo:String,
  site:String,
  idAcesso:String,
  endereco:{
    rua:String,
    numero:Number,
    complemento:String,
    bairro:String,
    cep:String,
    cidade:String,
    estado:String
  },
  servicos:[
      {
        nome:String,
        descricao:String
      }
  ],
  recursos:[
      {
        tipo:String,
        detalhe:String,
        arquivo:String,
        descricao:String,
        quantidade:Number
      }
  ],
  contato:{
    telefone1:String,
    telefone2:String,
    email:String
  },
  permissao:[
      {
        nome:String,
        tipo:String
      }
  ]
});

/*
//geração de token
InstituicaoSchema.methods.gerarToken = function(razao_social, cnpj){
  return jwt.sign({'razao_social':razao_social, 'cnpj':cnpj}, 'puc');
}
*/
/*
//método de cliptografia
InstituicaoSchema.methods.gerarSenha = function(senha){
    return bcrypt.hashSync(senha, bcrypt.genSaltSync(9));
}

//comparar senha
InstituicaoSchema.methods.validaSenha = function(senha){
    return bcrypt.compareSync(senha, this.acesso.senha2);
}
*/

module.exports = mongoose.model('Instituicao', InstituicaoSchema);
