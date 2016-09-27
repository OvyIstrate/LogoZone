var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var typeSchema = new Schema({
    description:{type:'String', required:'{PATH} is required'},
    size: {type:'Number'},
});

var Type = mongoose.model('Type', typeSchema);
exports.createTypes = function()
{
  Type.find({}).exec(function(err, collection){
    if(collection.length === 0)
    {
        Type.create({
          description: 'Small Logo-Zone',
          size: 100
        });
        Type.create({
          description: 'Medium Logo-Zone',
          size:300
        });
        Type.create({
          description:'Large Logo-Zone',
          size:500
        });
    }
  });
}
