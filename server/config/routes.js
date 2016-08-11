var passport = require('passport');

module.exports = function(app) {
    app.get('*', function(req, res) {
        res.render('index');
    });

    app.post('/login', function(req, res, next) {
        console.log('Inside post SERVER -> ' + req.body)
        var auth = passport.authenticate('local', function(err, user) {
            console.log('form authPost ' + user);
            if (err) {
                return next(err);
            }
            if (!user) {
                res.send({
                    success: false
                });
            }
            req.logIn(user, function(err) {
                if (err) {
                    return next(err);
                }
                res.send({
                    success: true,
                    user: user
                });
            });
        });
        auth(req, res, next);
    });
}
