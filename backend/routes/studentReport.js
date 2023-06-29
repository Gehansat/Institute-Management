const router = require("express").Router();
const student = require("../models/student");

const pdf = require("pdf-creator-node");
const fs = require("fs");
const template = "routes/reportTemplate.html";
const html = fs.readFileSync(template, "utf8");

var inData;

router.route("/studentReport").get((req, res)=>{

  student.find().lean().then((students)=>{

    var options = {
        format: "A3",
        orientation: "portrait",
        border: "7mm",
        footer: {
            height: "0mm",
            contents: {
                first: '',
                2: 'Second page', // Any page number is working. 1-based index
                default: '<span style="color: #444;">{{page}}</span>/<span>{{pages}}</span>', // fallback value
                last: ''
            }
        }
    };


    var document = {
      html: html,
      data: {
          inData: students,
          total: students.length,
      },
      path: "./upload/student_report.pdf",
      type: "",
    };

    pdf.create(document, options)
        .then((jes) => {
          res.download('./upload/student_report.pdf');
          res.status(200);
        })
        .catch((error) => {
            console.error(error);
    });

  });

})

module.exports = router;