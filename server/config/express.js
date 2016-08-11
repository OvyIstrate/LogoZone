var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    engines = require('consolidate');

module.exports = function(app, config) {

  app.use(express.static(config.rootPath + '/public'));
  app.use(express.static('src'));
  app.use(express.static('src/views/'));
  app.set('views', config.rootPath + '/src/views/');
  app.engine('html', engines.mustache);
  app.set('view engine', 'html');
  app.use(express.static('src/js/directives'));
  app.use(cookieParser());
  app.use(session({secret:'logozone secret session text', resave:false, saveUninitialized:false }));
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(bodyParser.urlencoded({
    extended:true
  }));

}
