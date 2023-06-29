const router = require("express").Router();
let student = require("../models/student");

router.route("/download").get((req, res)=>{

  var query = { sid: req.query.sid };

  student.findOne(query).then((students)=>{
    res.download(students.photo);
    res.status(200);
  });

})

module.exports = router;