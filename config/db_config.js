var mongoose = require('mongoose');

var urlString = 'mongodb://localhost/API';

mongoose.connect(urlString, function(err, res){
  if(err){
    console.log('não foi possível conectar: ' + urlString);
  }else{
    console.log('Conectado: ' + urlString);
  }
});
