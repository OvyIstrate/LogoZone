var auth = require('./auth'),
    users = require('../controllers/user-controller.server.js'),
    profile = require('../controllers/profile-controller.server.js'),
    mongoose = require('mongoose'),
    User = mongoose.model('User');

module.exports = function(app) {

    // var userRoute = express.Router();
    //   userRoute.route('/Users')

    app.get('/api/users', auth.requiresApiLogin, users.getUsers);

    app.post('/api/users', users.createUser);

    app.put('/api/users', users.updateUser);

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res){
      req.logout();
      res.end();
    });

    app.get('/user', function(req, res){
      console.log('wtf')
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
