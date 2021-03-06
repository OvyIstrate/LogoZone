var express = require('express'),
  mongoose = require('mongoose'),
  userModel = require('../models/User');


module.exports = function(config) {
  console.log("Connecting to the DB from the " + config.description); 
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection errror...'));
  db.once('open', function callback(){
    console.log('logozone db is opened');
  });
  userModel.createDefaultUsers();
}
