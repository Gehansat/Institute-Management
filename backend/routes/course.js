const router = require("express").Router();
const { response } = require("express");
const { find, findByIdAndDelete } = require("../Models/course");
let lects = require("../Models/course");

router.route("/getcourse").get((req, res) => {
  lects
    .find()
    .then((lecturers) => {
      res.json(lecturers);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
