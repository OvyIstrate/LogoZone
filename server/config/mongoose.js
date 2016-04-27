var express = require('express'),
  mongoose = require('mongoose');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection errror...'));
  db.once('open', function callback(){
    console.log('logozone db is opened');
  })
}