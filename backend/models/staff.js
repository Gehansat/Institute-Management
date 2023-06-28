const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const staffSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    DoB : {
        type : String,
        required: true
    },
    NIC : {
        type : String,
        //match : /^([0-9]{9}[x|X|v|V]|[0-9]{12})$/,
        required : true
        
    },
    Address : {
        type : String,
        required : true,
    },
    Email : {
        type : String,
        required : true,  
    },
    Phone : {
        type : String,
       match: /^(?:0|94|\+94)?(?:(11|21|23|24|25|26|27|31|32|33|34|35|36|37|38|41|45|47|51|52|54|55|57|63|65|66|67|81|912)(0|2|3|4|5|7|9)|7(0|1|2|4|5|6|7|8)\d)\d{6}$/,
        required : true,
    },
    gender : {
        type : String,
        required: true
    },
    ID : {
        type : String,
        required : true,
    },
    JobTitle : {
        type : String,
        required : true,
       
    },
    Experience : {
        type : String,
        required : true,
       
    },
    HireDate : {
        type : String,
        required : true,
        
        
    },
    UserName : {
        type : String,
        required : true,
       
    },
    Password : {
        type : String,
        required : true,
    },
    userType : {
        type : String,
        required : true,
    },
},   
{
    timestamps:true,   
}

)

const Staff = mongoose.model("Stafftest",staffSchema );

module.exports = Staff;