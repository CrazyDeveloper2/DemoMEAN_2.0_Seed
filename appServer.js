var express=require("express");
var app=express();

app.get('/', function (req, res) {
  res.send('Hello World!')
});

app.post('/', function (req, res) {
  res.send('Hello World! Post'+req.asd);
})

app.listen(5000,function(){
  console.log("app listing at 3000")
})