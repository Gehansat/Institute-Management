const mongoose = require("mongoose");
const schema = mongoose.Schema;
const fdSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: false,
  },
  lecturer: {
    type: String,
    required: true,
  },
  SID : {
    type: String,
    required: true,
  },
  DateR : {
    type: String,
    required: true,
  },
  DateA : {
    type: String,
    required: false,
  },
  answer : {
    type: String,
    required: false,
  },

});

const Fd= mongoose.model("fd", fdSchema);
module.exports = Fd;
