const router = require("express").Router();
const { response } = require("express");
const { find, findByIdAndDelete } = require("../models/examAttempt");
let attempt = require("../models/examAttempt");

router.route("/geteAttempt").get((req, res) => {
  attempt
    .find()
    .then((examAttempts) => {
      res.json(examAttempts);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/geteResult").get((req, res) => {
  attempt
    .find({grade: {$ne : "Not Graded"}})
    .then((examAttempts) => {
      res.json(examAttempts);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/getresultsS/:id").get(async (req, res) => {
  let userId = req.params.id;
  const users = await attempt
  .find({SID: userId})
  .then((examAttempts) => {
    res.json(examAttempts);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.route("/add").post((req, res) => {
  const examName = req.body.examName;
  const SID = req.body.SID;
  const batch = req.body.batch;
  const uploadAnswer = req.body.uploadAnswer;
  const attemptDate = req.body.attemptDate;
  const attemptTime = req.body.attemptTime;
  const marks = req.body.marks;
  const grade = req.body.grade;
  const requestR= req.body.requestR;
  const requestDate = req.body.requestDate;
  const review = req.body.review;
  const reviewDate = req.body.reviewDate;

  const newExamAttempt = new attempt({
    examName,
    SID,
    batch,
    uploadAnswer,
    attemptDate,
    attemptTime,
    marks,
    grade,
    requestR,
    requestDate,
    review ,
    reviewDate,
  });
  newExamAttempt
    .save()
    .then(() => {
      res.json("Paper Submitted for Reviewing");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const users = await attempt
    .findById(userId)
    .then((value) => {
      res.status(200).send(value);
      console.log(userId);
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get User", error: err.message });
    });
});

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const {marks,grade} = req.body;
  const reqBody = req.body;
  console.log(reqBody);
  attempt
    .findByIdAndUpdate(userId, reqBody)
    .then(() => {
      res.status(200).send({ status: "User updates" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "error with updating data", error: err.message });
    });
});

router.route("/requestR/:id").put(async (req, res) => {
  let userId = req.params.id;
  const {requestR,requestDate} = req.body;
  const reqBody = req.body;
  console.log(reqBody);
  attempt
    .findByIdAndUpdate(userId, reqBody)
    .then(() => {
      res.status(200).send({ status: "User updates" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "error with updating data", error: err.message });
    });
});

router.route("/review/:id").put(async (req, res) => {
  let userId = req.params.id;
  const {review,reviewDate} = req.body;
  const reqBody = req.body;
  console.log(reqBody);
  attempt
    .findByIdAndUpdate(userId, reqBody)
    .then(() => {
      res.status(200).send({ status: "User updates" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "error with updating data", error: err.message });
    });
});

module.exports = router;
