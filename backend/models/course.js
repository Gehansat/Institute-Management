const mongoose = require("mongoose");
const schema = mongoose.Schema;
const courseSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  moduleCode: {
    type: String,
    required: true,
  },
  lecturer: {
    type: String,
    required: true,
  },
  creduts: {
    type: String,
    required: true,
  },
});

const course = mongoose.model("course", courseSchema);
module.exports = course;
