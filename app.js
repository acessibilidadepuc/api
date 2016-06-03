
var app = require('./config/app_config');
var db = require('./config/db_config');
var acessoRouter = require('./routes/acessoRouter');
var instituicaoRouter = require('./routes/instituicaoRouter');
var cadeiranteRouter = require('./routes/cadeiranteRouter');

app.get('/', function(req, res){
  res.end('<<<<<<Conectado na API>>>>>>')
});


//rotas do usuário
app.use('/acesso',acessoRouter);
app.use('/instituicao',instituicaoRouter);
app.use('/cadeirante',cadeiranteRouter);
