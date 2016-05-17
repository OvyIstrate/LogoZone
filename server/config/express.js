var express = require('express'),
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport')

module.exports = function(app, config) {

  app.use(express.static('src'));
  app.use(express.static('src/views/'));
  app.use(express.static('src/js/directives'));
  app.use(express.static(config.rootPath + '/public'));
  // app.use(cookieParser());
  // app.use(session({secret:'logozone secret session text', resave:false, saveUninitialized:false }));
  // app.use(passport.initialize());
  // app.use(passport.session());

  app.set('view engine', 'html');
}
