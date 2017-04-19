var mongoose = require('mongoose'),
    encryption = require('../utilities/encryption');

var userSchema = mongoose.Schema({
    firstname: {type:String, required: '{PATH} is required!'},
    lastname: {type:String, required: '{PATH} is required!'},
    email: {type:String, required: '{PATH} is required!'},
    username: {
      type:String,
      required: '{PATH} is required!',
      unique:true
    },
    salt: {type:String, required: '{PATH} is required!'},
    hashed_pwd: {type:String, required: '{PATH} is required!'},
    createdOn: {type:Date, default:Date.now},
    profile: profileSchema,
    roles: [String]
});

userSchema.methods = {
    authenticate: function(passwordToMatch) {
        return encryption.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    hasRole: function(role){
      return this.roles.indexOf(role) > -1;
    }
}

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
    User.find({}).exec(function(err, collection) {
        if (collection.length === 0) {
            var salt, hash;

            salt = encryption.createSalt();
            hash = encryption.hashPwd(salt, 'john');
            User.create({
                firstname: 'John',
                lastname: 'Doe',
                email: 'john.doe@tstmail.com',
                username: 'john.doe',
                salt: salt,
                hashed_pwd: hash,
                roles: ['admin']
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
