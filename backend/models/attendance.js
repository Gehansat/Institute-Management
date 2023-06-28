const mongoose = require('mongoose');
const { stringify } = require('nodemon/lib/utils');

const Schema = mongoose.Schema;

    const attendance = new Schema({
        StudentID : {
            type : String,
            required: true
        },
        Module:{
            type : String,
            required: true
            
        },

           
        Batch: {
            type : String,
            required: true
        },


        Date: {
            type : String,
            required: true
        }
    })


    const Attendance = mongoose.model("attendance",attendance);

    module.exports = Attendance;