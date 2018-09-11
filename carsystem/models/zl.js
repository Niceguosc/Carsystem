var mongoose = require('mongoose');

var zlSchema = mongoose.Schema({
    kehu:String,
    carname:String,
    zhifu:Number,
    allmoney:Number
});


var zl = mongoose.model('zl', zlSchema);

module.exports =zl;