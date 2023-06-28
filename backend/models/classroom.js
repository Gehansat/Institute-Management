const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const Schema = mongoose.Schema;

    const classroomSchema = new Schema({
        
        classroomid : {
            type : String,
            required: true
        },
       
       
        module : {
            type : String,
            required: true
        },
        time :{
            type : String,
            required: true
        },
        date: {
            type : String,
            required: true
        }
    })


    const classroom = mongoose.model("classroom",classroomSchema);

    module.exports = classroom;