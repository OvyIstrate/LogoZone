var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var businessSchmea = new Schema({
    name:{type:String, required:true},
    address:{type:String, required:true},
    image:{type:Buffer, required:true},
    description:{type:String, required:true},
    keywords:[String],
    products:[String],
    sections:[String]
});

module.exports = mongoose.model('Business', businessSchmea);
