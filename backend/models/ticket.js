const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    st_id : {
        type : String,
        required:true
    },
    st_name : {
        type :String,
        required: true
    },
    st_contact_no : {
        type : String,
        required : true
    },
    st_email : {
        type : String,
        required: true
    },
    question_type : {
        type :String,
        required : true
    },
    description : {
        type : String,
        required :true
    },
    ad_status :{
        type : String,
        required :true
     }
    
    
})

const ticket = mongoose.model("Ticket",ticketSchema);

module.exports = ticket;