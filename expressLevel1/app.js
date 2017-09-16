var express = require('express');
var app = express();

app.get('/', function(request, response) {
    response.send('Hello, World');
});

app.get('/name', function(request, response) {
   response.send('Chris'); 
});

app.get('/redirect', function(request, response) {
   response.redirect(301, '/surprise'); 
});

app.listen(3000);