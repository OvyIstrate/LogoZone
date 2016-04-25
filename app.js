var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('view engine', 'jade');
app.use(express.static(__dirname + 'images'));
app.use(express.static('public'));
app.use(express.static('src'));
app.use(express.static('src/views'));
app.use(express.static('src/js/directives'));

// app.set('views', './src/views');

app.get('*', function(req, res){
  res.render('index');
});

var port = process.env.PORT || 5000;

app.listen(port, function (err) {
    console.log('listening on ' + port);
});
