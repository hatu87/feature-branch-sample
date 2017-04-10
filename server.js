var app = require('express')();

app.get('/', function(req, res){
  res.send('hello world!!!');
});

// adding comment to the servers
// comment is added by ken
var port = 3000;
app.listen(port, function(){
  console.log(`server is listening in port ${port}`);
});
