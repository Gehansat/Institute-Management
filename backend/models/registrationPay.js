const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const registrationPaySchema = new Schema({
  
    SID:{
        type:String,
        required:true
    },
    Amount:{
        type:Number,
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
    DepositSlip:{
        type:String,
        required:true
    },
    Status:{
        type:String,
        required:true
    }
},{ timestamps: true })

const registrationPay = mongoose.model("Registration Payment",registrationPaySchema);

module.exports = registrationPay;