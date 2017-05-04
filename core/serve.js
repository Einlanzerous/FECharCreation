var express = require('express');
var bodyparser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000);

