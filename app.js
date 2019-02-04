var express = require('express');

var app = express();

app.get('/',function(req,res){
    res.send("sex you");
});

app.listen(3000);