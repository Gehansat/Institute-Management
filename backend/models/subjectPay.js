const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const modulePaySchema = new Schema({
    
    SID:{
        type:String,
        required:true
    },
    Module:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    Email:{
        type:String,
        required:true
    },
    Year:{
        type:String,
        required:true
    },
    Semester:{
        type:String,
        required:true
    },
    Amount:{
        type:Number,
        required:true
    },
    DepositSlip:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    }
}, { timestamps: true })

const modulePay = mongoose.model("Module Payment",modulePaySchema);

module.exports = modulePay;