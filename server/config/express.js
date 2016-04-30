var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan')

module.exports = function(app, config){

  app.use(express.static(config.rootPath + '/public'));
  app.use(express.static('src'));
  app.use(express.static('src/views/'));
  app.use(express.static('src/js/directives'));

  app.set('views', config.rootPath + '/src/views');
  app.set('view engine', 'html');
}
