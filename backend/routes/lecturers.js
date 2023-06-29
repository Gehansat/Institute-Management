const router = require("express").Router();
const { response } = require("express");
const { find, findByIdAndDelete } = require("../Models/lecturers");
let lects = require("../Models/lecturers");

router.route("/getlect").get((req, res) => {
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
