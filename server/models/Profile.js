var mongoose = require('mongoose');

var Business = require('../business/models/Business.js');

var Schema = mongoose.Schema;
var profileSchema = new Schema({
    image: {
        type: Buffer,
        contentType: String
    },
    address:{type:String},
    phone:{type:String},
    business: Business.schema,
    age:{type:Number},
});

module.exports = mongoose.model('Profile', profileSchema);
