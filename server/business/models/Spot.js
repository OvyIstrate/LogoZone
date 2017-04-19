var mongoose = require('mongoose'),
    typeModel = mongoose.model('Type'),
    type = require('../models/Type');

var spotSchema = mongoose.Schema({
    number: { type: Number, required: '{PATH} is required!', unique: true },
    image: { type: Buffer },
    contract: { type: contractSchema, unique: true },
    type: { type: typeModel, required: '{PATH} is required' },
    isAvailable: { type: Boolean, default: true },
});

var Spot = mongoose.model('Spot', spotSchema);

function createDefaultUsers() {
    type.createTypes();
    var typesCollection = type.getTypes();

    Spot.find({}).exec(function (err, collection) {
        if (collection.length === 0) {

            Spot.create({
                number: collection.length,
                // image: 'Doe',
                // contract: 'john.doe@tstmail.com',
                type: typesCollection[0]
            });

            Spot.create({
                number: collection.length,
                // image: 'Doe',
                // contract: 'john.doe@tstmail.com',
                type: typesCollection[1],
            });
            Spot.create({
                number: collection.length,
                // image: 'Doe',
                // contract: 'john.doe@tstmail.com',
                type: typesCollection[2],
            });
        }
    });
}
exports.createDefaultUsers = createDefaultUsers;
