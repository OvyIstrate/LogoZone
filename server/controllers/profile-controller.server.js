var Profile = require('mongoose').model('Profile'),
    User = require('mongoose').model('User');

exports.updateProfile = updateProfile;

function updateProfile(req, res) {
    User.find({
        '_id': req._id
    }).exec(function (err, result) {
        if (err) {
            console.log("An error has occured" + err);
            res.status(400);
            res.send({reason:err.toString()});
        } else {
            user = result;
            res.send()
        }
    });
}