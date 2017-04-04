var app = require('express')();

app.get('/', function(req, res){
  res.send('hello world!!!');
});

app.listen(3000, function(){
  console.log('server is starting at port 3000');
});
