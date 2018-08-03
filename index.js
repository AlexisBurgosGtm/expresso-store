
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app/assets'));

app.get('/', function(req, res) {
  //res.send('Hola Mundo!');
  
    res.sendFile(__dirname + '/app/index.html');
      
});

app.get('/examples/landing.html', (req,res)=>{
    res.sendFile(__dirname + '/app/examples/landing.html');
});

app.listen(3000, function() {
  console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});