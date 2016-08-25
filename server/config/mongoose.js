var express = require('express'),
  mongoose = require('mongoose'),
  crypto = require('crypto');


module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection errror...'));
  db.once('open', function callback(){
    console.log('logozone db is opened');
  });

  var userSchema = mongoose.Schema({
    firstname: String,
    lastname: String,
    email:String,
    username:String,
    salt:String,
    hashed_pwd:String
  });

  userSchema.methods = {
    authenticate: function(passwordToMatch){
      return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
  }

  var messageSchema = mongoose.Schema({
    message:String
  });

  var User = mongoose.model('User', userSchema);
  var Message = mongoose.model('Message', messageSchema);

  User.find({}).exec(function(err, collection){
    if(collection.length === 0)
    {
      var salt, hash;

      salt = createSalt();
      hash = hashPwd(salt, 'john');
      User.create({firstname:'John', lastname:'Doe', email:'john.doe@tstmail.com', username:'john.doe', salt:salt, hashed_pwd:hash});

      salt = createSalt();
      hash = hashPwd(salt, 'foo');
      User.create({firstname:'Foo', lastname:'Bar', email:'foo.bar@tstmail.com', username:'foo.bar', salt:salt, hashed_pwd:hash});

      salt = createSalt();
      hash = hashPwd(salt, 'jedi');
      User.create({firstname:'Jedi', lastname:'Knight', email:'jedi.knight@tstmail.com', username:'jedi.knight', salt:salt, hashed_pwd:hash});
    }
  });
}

function createSalt(){
  return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd){
  var hmac = crypto.createHmac('sha1', salt);
  hmac.setEncoding('hex');
  hmac.write(pwd);
  hmac.end();
  return hmac.read();
}
