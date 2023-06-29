const router = require("express").Router();
let addStudent = require("../models/student");
var bodyParser = require('body-parser')
const multer = require('multer');
var fs = require('fs');

router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const upload = multer({ dest: './upload/photo/' });

router.route("/addStudent").post(upload.single("photo"),(req, res)=>{
    let file_save_as = req.file.path + (req.file.originalname).substr((req.file.originalname).lastIndexOf("."));

    const sid = req.body.sid;
    const fname = req.body.fname;
    const lname = req.body.lname;
    const bdate = req.body.bdate;
    const gender = req.body.gender;
    const photo = file_save_as;
    const address = req.body.address;
    const email = req.body.email;
    const nic = req.body.nic;
    const guardian = req.body.guardian;
    const telephone = req.body.telephone;
    const uname = req.body.uname;
    const psw = req.body.psw;

    const newStudent = new addStudent({
      sid,
      fname,
      lname,
      bdate,
      gender,
      photo,
      address,
      email,
      nic,
      guardian,
      telephone,
      uname,
      psw
    })

    fs.rename(req.file.path,file_save_as, function (err) {
        if (err) throw err;
  
        newStudent.save().then(()=>{
            res.json("Student Added!")
        }).catch((err)=>{
            console.log(err);
        })
  
    });

})

module.exports = router;