var express = require('express');

var app = express();

app.get('/', function (req, res) {
    console.log('request received');
    res.send('Hello World!');
    // res.json({hello: 'world'});
});

var server = app.listen(8000, function () {
    console.log('Server running at http...');
});