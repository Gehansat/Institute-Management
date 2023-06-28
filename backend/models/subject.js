const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const subjectSchema = new Schema({
      ID : {
            type : String,
            required : true
      }, 
      Name : {
          type : String,
          required : true
      },
      Lecturer : {
        type: String,
        reuire: true
    }
})
const Subject = mongoose.model("Subject",subjectSchema);

module.exports = Subject;