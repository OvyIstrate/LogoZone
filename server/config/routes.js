var auth = require('./auth'),
    users = require('../controllers/users'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function(app) {

    app.get('/api/users', auth.requiresApiLogin, users.getUsers);

    app.post('/api/users', users.createUser);

    app.put('/api/users', users.updateUser);

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res){
      req.logout();
      res.end();
    });

    app.get('/user', function(req, res){
      res.send(req.user);
    })

    app.all('/api/*', function(req, res){
      res.send(404);
    })

    app.get('*', function(req, res) {
        res.render('index', {
          bootstrappedUser: req.user
        });
    });
}
