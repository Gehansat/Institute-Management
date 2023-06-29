const router = require("express").Router();
let student = require("../models/student");

var bodyParser = require('body-parser')
const multer = require('multer');
var fs = require('fs');

const upload = multer({ dest: './upload/photo/' });

router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://itp2022:2022y2@cluster0.xp9jf.mongodb.net/pramu?retryWrites=true&w=majority";

router.route("/student").get((req,res)=>{
  student.find().then((students)=>{

    return res.status(200).json({
      success:true,
      studentData:students
    });

  });
})

router.route("/searchStudent").get((req,res)=>{
  var query = { fname: req.query.sname };

  if(req.query.sname == ''){
    student.find().then((students)=>{

      return res.status(200).json({
        success:true,
        studentData:students
      });
  
    });
  }else{

    student.find(query).then((students)=>{
      return res.status(200).json({
        success:true,
        studentData:students
      });
    });

  }

})

router.route("/editStudent").get((req,res)=>{
  var query = { sid: req.query.sid };
  student.findOne(query).then((students)=>{

    return res.status(200).json({
      success:true,
      studentData:students
    });

  });
})

router.route("/updateStudent").post(upload.single("photo"),(req, res)=>{

  var myquery = { sid: req.body.sid };

  if(req.file){

  let file_save_as = req.file.path + (req.file.originalname).substr((req.file.originalname).lastIndexOf("."));

  fs.rename(req.file.path,file_save_as, function (err) {
    if (err) throw err;

    var query = { sid: req.body.sid };
    //get old photo link
    student.findOne(query).then((students)=>{

      //Old photo delete 
      fs.unlink(students.photo, function (err) {
        if (err) throw err;
        console.log('File deleted!');
      });

      var newvalues = { $set: {
        sid : req.body.sid,
        fname : req.body.fname,
        lname : req.body.lname,
        bdate : req.body.bdate,
        gender : req.body.gender,
        address : req.body.address,
        photo: file_save_as,
        email : req.body.email,
        nic : req.body.nic,
        guardian : req.body.guardian,
        telephone : req.body.telephone,
        uname : req.body.uname,
        psw : req.body.psw,
      }};
  
      MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("pramu");
        dbo.collection("students").updateOne(myquery, newvalues).then(()=>{
            res.json("Student Updated!")
          }).catch((err)=>{
              console.log(err);
          })
      });
  
    });

  })
  }else{
    var newvalues = { $set: {
      sid : req.body.sid,
      fname : req.body.fname,
      lname : req.body.lname,
      bdate : req.body.bdate,
      gender : req.body.gender,
      address : req.body.address,
      email : req.body.email,
      nic : req.body.nic,
      guardian : req.body.guardian,
      telephone : req.body.telephone,
      uname : req.body.uname,
      psw : req.body.psw,
    }};

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("pramu");
      dbo.collection("students").updateOne(myquery, newvalues).then(()=>{
          res.json("Student Updated!")
        }).catch((err)=>{
            console.log(err);
        })
    });


  }
})

router.route("/deleteStudent").post((req,res)=>{

  var myquery = { sid: req.body.sid };

  var query = { sid: req.body.sid };
  //get old photo link
  student.findOne(query).then((students)=>{

    //Old photo delete 
    fs.unlink(students.photo, function (err) {
      if (err) throw err;
      console.log('File deleted!');
    });

    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db("pramu");
      dbo.collection("students").deleteOne(myquery).then(()=>{
          res.json("Student Deleted!")
        }).catch((err)=>{
            console.log(err);
        })
    });

  });

})


module.exports = router;