var mongoose = require('mongoose'),
    typeModel = mongoose.model('Type'),
    type = require('../models/Type');

var spotSchema = mongoose.Schema({
    number: {type:Number, required: '{PATH} is required!', unique:true},
    image: {type:Buffer},
    contract: {type:contractSchema, unique:true},
    type: {type: typeModel, required: '{PATH} is required'},
    isAvailable:{type: Boolean, default:true},
});

var Spot = mongoose.model('Spot', spotSchema);

function createDefaultUsers() {
    type.createTypes();

    Spot.find({}).exec(function(err, collection) {
        if (collection.length === 0) {

            Spot.create({
                number: collection.length,
                // image: 'Doe',
                // contract: 'john.doe@tstmail.com',
                type: 'john.doe',
            });

            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'foo');

            User.create({
                firstname: 'Foo',
                lastname: 'Bar',
                email: 'foo.bar@tstmail.com',
                username: 'foo.bar',
                salt: salt,
                hashed_pwd: hash,
                roles: []
            });

            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'jedi');
            User.create({
                firstname: 'Jedi',
                lastname: 'Knight',
                email: 'jedi.knight@tstmail.com',
                username: 'jedi.knight',
                salt: salt,
                hashed_pwd: hash
            });
        }
    });
}
exports.createDefaultUsers = createDefaultUsers;
