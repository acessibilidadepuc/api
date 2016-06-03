var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
var jwt = require('jsonwebtoken');

var Schema = mongoose.Schema;

var CadeiranteSchema = new Schema({
  situacao:String,
  tipo:String,
  nome:String,
  email:String,
  celular:String,
  telefone:String,
  idAcesso:String,
});

module.exports = mongoose.model('Cadeirante', CadeiranteSchema);
