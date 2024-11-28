var mongoose = require('mongoose');

var task = new mongoose.Schema({
    name: {
        type: String,
    },
    task: {
        type: String
    },
    status: {
        type: String
    },
    id:{
        type:String
    }
})  

module.exports = mongoose.model('task', task)
