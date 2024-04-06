const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

    // passwords:[
    //     {type:mongoose.Schema.Types.ObjectId,ref:'Password'}   
    // ]
});

const User = mongoose.model('User', userSchema)

module.exports = User;