var express = require("express");

var app = express();

console.log("Starting server...");

app.use(express.static(__dirname));

app.listen(3000, function() {
    console.log("Server running on port 3000");
});
