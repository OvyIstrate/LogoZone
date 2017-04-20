var Profile = require('mongoose').model('Profile'),
    User = require('mongoose').model('User');

exports.updateProfile = updateProfile;

function updateProfile(req, res)
{
    var user = {};
    User.find({'_id': req._id}).exec(function(err, result){
        user = result;
    });
}