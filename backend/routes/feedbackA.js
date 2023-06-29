const router = require("express").Router();
const { response } = require("express");
const { find, findByIdAndDelete } = require("../models/examAttempt");
let fd = require("../models/feedBack");

router.route("/getfd").get((req, res) => {
  fd
    .find()
    .then((fds) => {
      res.json(fds);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/getfdR").get((req, res) => {
  fd
    .find({status:" resolved"})
    .then((fds) => {
      res.json(fds);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/getfduR").get((req, res) => {
  fd
    .find({status:"Not resolved"})
    .then((fds) => {
      res.json(fds);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/getfdS/:id").get(async (req, res) => {
  let userId = req.params.id;
  const users = await fds
  .find({SID: userId})
  .then((fds) => {
    res.json(fds);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.route("/getfdL/:id").get(async (req, res) => {
  let userId = req.params.id;
  const users = await fds
  .find({lecturer: userId})
  .then((fds) => {
    res.json(fds);
  })
  .catch((err) => {
    console.log(err);
  });
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const SID = req.body.SID;
  const description = req.body.description;
  const status = req.body.status;
  const lecturer = req.body.lecturer;
  const DateR = req.body.DateR;
  const DateA = req.body.DateA ;
  const answer= req.body.answer;
  const newfd = new fd({
    name,
    SID,
    description,
    status,
    lecturer,
    DateR ,
    DateA,
    answer,
  });
  newfd
    .save()
    .then(() => {
      res.json("Feedback is Added");
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const users = await fd
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
  const {DateA,answer,status} = req.body;
  const reqBody = req.body;
  console.log(reqBody);
  fd
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
  await fd
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


module.exports = router;
