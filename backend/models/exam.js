const mongoose = require("mongoose");
const schema = mongoose.Schema;
const examSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  uploadPaper: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  lecturer: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  deadline: {
    type: String,
    required: true,
  },
  deadlineTime: {
    type: String,
    required: true,
  },
});

const Exam = mongoose.model("exam", examSchema);
module.exports = Exam;
