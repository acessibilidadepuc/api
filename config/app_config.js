var express = require('express');
var bodyParser = require('body-parser');
var port = '3000';

var app = module.exports = express();

app.listen(port);

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
  //Configuração para acesso de outras aplicões diferentes
  res.setHeader('Access-Control-Allow-Origin','*');//Se quiser chamar outras aplicação é só colocar a url nesse *
  res.setHeader('Access-Control-Methods','GET,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization');
  //Autorização via token
  next();
})
