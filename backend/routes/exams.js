const router = require("express").Router();
const { response } = require("express");
const { find, findByIdAndDelete } = require("../Models/exam");
let exam = require("../Models/exam");

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const duration = req.body.duration;
  const title = req.body.title;
  const status = req.body.status;
  const batch = req.body.batch;
  const lecturer = req.body.lecturer;
  const deadline = req.body.deadline;
  const deadlineTime = req.body.deadlineTime;
  const uploadPaper = req.body.uploadPaper;

  const newExam = new exam({
    name,
    duration,
    title,
    status,
    batch,
    lecturer,
    deadline,
    deadlineTime,
    uploadPaper,
    
  });
  newExam
    .save()
    .then(() => {
      res.json("Student added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  exam
    .find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});
router.route("/studentE").get((req, res) => {
  exam
    .find({status:"active"})
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update/:id").put(async (req, res) => {
  let userId = req.params.id;
  const { name, duration,title,status,lecturer,batch,deadline,deadlineTime,uploadPaper } = req.body;
  const reqBody = req.body;
  console.log(reqBody);
  exam
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

router.route("/delete/:id").delete(async (req, res) => {
  let userId = req.params.id;
  await exam
    .findByIdAndDelete(userId)
    .then(() => {
      res.status(200).send({ status: "user deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "error with deleting data", error: err.message });
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const users = await exam
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

router.route("/reportExams").get((req, res)=>{

  exam.find({status:"active"}).then((exam)=>{
      let totEPay = 0;
      exam.map((p)=>{
              totEPay += p.duration;
      })
      const eReport = {
          totEPay
      }
      res.json(eReport)
  }).catch((err)=>{
      console.log(err);
  });

});


module.exports = router;
