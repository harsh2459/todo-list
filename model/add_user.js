var mongoose = require('mongoose');

var user = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String
    },
    contectno:{
        type:String
    },
    city:{
        type:String
    },
})

module.exports = mongoose.model('add_user', user)