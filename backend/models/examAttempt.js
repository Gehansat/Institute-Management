const mongoose = require("mongoose");
const schema = mongoose.Schema;
const examAttemptSchema = new schema({
  examName: {
    type: String,
    required: true,
  },
  SID: {
    type: String,
    required: true,
  },
  batch: {
    type: String,
    required: true,
  },
  uploadAnswer: {
    type: String,
    required: true,
  },
  attemptDate: {
    type: String,
    required: true,
  },
  attemptTime: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: false,
  },
  grade: {
    type: String,
    required: false,
  },
  requestR: {
    type: String,
    required: false,
  },
  requestDate: {
    type: String,
    required: false,
  },
  review: {
    type: String,
    required: false,
  },
  reviewDate: {
    type: String,
    required: false,
  },
});

const ExamAttempt = mongoose.model("examAttempt", examAttemptSchema );
module.exports = ExamAttempt;
