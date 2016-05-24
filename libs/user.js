// DB Connection
var db = require('mongoose');

db.connect("mongodb://park:yuantu123@localhost/park");


var Schema = db.Schema;

var userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userId: String,
    userName: String,
    phone: String,
    carNoList: {type: [String],default:[]},
    defaultCarNo: String,
    idNo: String,
    address: String,
    ticket: String,
    expires: Date
}, {collection: 'users'});

var user = db.model('user', userSchema);

module.exports = user;