var app = require('express')();

app.get('/', function(req, res){
  res.send('hello world!!!');
});

var port = 3000;
app.listen(port, function(){
  console.log(`server is listening in port ${port}`);
});
