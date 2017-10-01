var proxy = require('express-http-proxy');
var app = require('express')();
 
app.use('/', proxy('https://impraise-shorty.herokuapp.com/'));

app.listen(3000)
