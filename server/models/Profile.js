var mongoose = require('mongoose');

var profileSchema = mongoose.Schema({
    image: {
        type: Buffer,
        contentType: String
    },
    address:{type:String},
    phone:{type:String},
});

var Profile = mongoose.model('Profile', profileSchema);