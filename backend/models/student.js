const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const registerStudentSchema = new Schema({
  
    sid:{
      type:String,
      required:true
    },
    fname:{
      type:String,
      required:true
    },
    lname:{
      type:String,
      required:true
    },
    bdate:{
      type:String,
      required:true
    },  
    gender:{
      type:String,
      required:true
    }, 
    photo:{
      type:String,
      required:true
    },
    address:{
      type:String,
      required:true
    },  
    email:{
      type:String,
      required:true
    },
    nic:{
      type:String,
      required:true
    },
    guardian:{
      type:String,
      required:true
    },
    telephone:{
      type:String,
      required:true
    },
    uname:{
      type:String,
      required:true
    },
    psw:{
      type:String,
      required:true
    }
},{ timestamps: true })

const registrationStudent = mongoose.model("student",registerStudentSchema);

module.exports = registrationStudent;