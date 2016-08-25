var auth = require('./auth');

module.exports = function(app) {

    app.post('/login', auth.authenticate);

    app.post('/logout', function(req, res){
      req.logout();
      res.end();
    });

    app.get('/user', function(req, res){
      res.send(req.user);
    })

    app.get('*', function(req, res) {
      console.log(req.user);
        res.render('index', {
          bootstrappedUser: req.user
        });
    });
}
