var express = require('express');
var app = express();

app.use(express.static('/public'));

app.get('/cities', function(request, response) {
    var cities = ["Providence", "Pawtucket", "Cranston", "Boston"];
    response.send(cities);
});

app.listen(process.env.PORT);