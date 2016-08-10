var express = require('express');
var passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy;

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

var config = require('./server/config/config')[env];
console.log(process.env.PORT)
console.log(env)
require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

var User = mongoose.model('User');
var Message = mongoose.model('Message');

//comment added for deployment;
console.log('before');
User.findOne({
    userName: 'john.doe'
}).exec(function(err, user) {
    console.log('From simple query ' + user.firstName);
});
console.log(config.db);
Message.findOne().exec(function(err, msg){
  var messageFromDb = msg;
  console.log(msg);
})
// console.log(User.findOne({userName:'john.doe'}));
console.log('after');
passport.use(new LocalStrategy(
    function(userName, password, done) {
        console.log("From passport use: " + userName);
        User.findOne({
            userName: userName
        }).exec(function(err, user) {
            if (user) {
                console.log("From passport use: " + userName);
                return done(null, user);
            } else {
                console.log("From passport use: " + userName);
                return done(null, false);
            }
        });
    }
));

passport.serializeUser(function(user, done) {
    if (user) {
        done(null, user._id);
    }
});

passport.deserializeUser(function(id, done) {
    User.findOne({
        _id: id
    }).exec(function(err, user) {
        if (user) {
            return done(null, user)
        } else {
            return done(null, false);
        }
    })
});

require('./server/config/routes')(app);

app.get('*', function(req, res){
  res.render('index', {})
})

app.listen(config.port, function(err) {
    console.log('listening on ' + config.port);
});
