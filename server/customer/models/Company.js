var mongoose = require('mongoose'),
    Product = require('')

var Schema = mongoose.Schema;
var companySchema = new Schema({
    name:{type:String, required:true},
    country:{type:String, required:true},
    image:{type:Buffer, required:true},
    sections:[String],
    products:[String],
    reviews:[String]
});

module.exports = mongoose.model('Company', companySchema);