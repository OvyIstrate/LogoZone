var express = require('express'),
  mongoose = require('mongoose');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection errror...'));
  db.once('open', function callback(){
    console.log('logozone db is opened');
  });

  var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email:String,
    userName:String
  });

  var messageSchema = mongoose.Schema({
    message:String
  });


  var User = mongoose.model('User', userSchema);
  var Message = mongoose.model('Message', messageSchema);

  User.find({}).exec(function(err, collection){
    if(collection.length === 0)
    {
      User.create({firstName:'John', lastName:'Doe', email:'john.doe@tstmail.com', userName:'john.doe'});
      User.create({firstName:'Foo', lastName:'Bar', email:'foo.bar@tstmail.com', userName:'foo.bar'});
      User.create({firstName:'Jedi', lastName:'Knight', email:'jedi.knight@tstmail.com', userName:'jedi.knight'});
    }
  });
}
