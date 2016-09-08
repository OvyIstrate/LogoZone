var auth = require('./auth'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function(app) {

    app.get('/api/users', auth.requiresApiLogin, function(req, res){
        User.find({}).exec(function(err,collection){
          res.send(collection);
        });
    });

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res){
      req.logout();
      res.end();
    });

    app.get('/user', function(req, res){
      res.send(req.user);
    })

    app.get('*', function(req, res) {
        res.render('index', {
          bootstrappedUser: req.user
        });
    });
}
