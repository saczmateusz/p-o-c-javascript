var mongoose = require('mongoose');
var carSchema = mongoose.Schema({
    reg_no: String,
    brand: String,
    model: String,
    year: Number,
    color: String,
    fuel: String,
});

var Car = module.exports = mongoose.model('car', carSchema);
module.exports.get = function (callback, limit) {
    Car.find(callback).limit(limit);
}