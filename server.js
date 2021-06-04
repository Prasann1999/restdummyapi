var express = require('express');
var app = express();
var fs = require("fs");
const hostname = '127.0.0.1';
app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})

var server = app.listen(8081, function () {
    
   //var host = server.address().address
   var port = server.address().port
   var host = hostname;
   //console.log("host is: "+host);
   console.log("Example app listening at http://%s:%s", host, port)
})