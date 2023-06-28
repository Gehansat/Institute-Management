const mongoose = require("mongoose");
const schema = mongoose.Schema;
const lectureSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});

const lect = mongoose.model("lecturer", lectureSchema);
module.exports = lect;
