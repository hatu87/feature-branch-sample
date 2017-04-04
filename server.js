var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello');
});

var port = 3001;
app.listen(port, function(){
  console.log(`server is listening in port ${port}`);
});
