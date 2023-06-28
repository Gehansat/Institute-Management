const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    ID:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Password:{
        type:String,
        required:true
    },
    Role:{
        type:String,
        required:true
    }
})

const user = mongoose.model("User",userSchema);

module.exports = user;