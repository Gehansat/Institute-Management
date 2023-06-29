const router = require("express").Router();
let Attendance = require("../models/attendance");

router.route("/add").post((req,res)=>{
    const id = req.body.id;
    const StudentID = req.body.StudentID;
    const Module = req.body.Module;
    const Batch = req.body.Batch;
    const Date = req.body.Date;

    const newAttendance = new Attendance({
        
        StudentID,
        Module,
        Batch,
        Date
    })

    newAttendance.save().then(()=>{
         res.json("Attendance Added")
    }).catch((err)=>{
         console.log(err);
    })
})

router.route("/").get((req,res)=>{
     Attendance.find().then((attendances)=>{
        res.json(attendances)
     }).catch((err)=>{
         console.log(err)
     })
})

router.route("/delete/:id").delete(async(req,res) => {
    const id = req.params.id;
 await Attendance.findByIdAndDelete(id).exec()
        res.send("Deleted");
      
})


router.route("/reportAttendance/:Module").get((req, res)=>{
    let Module = req.params.Module;

    Attendance.find({Status:"accepted"}).then((attendance)=>{

        let totAtt = 0;
        let numAtt = 0;

        attendance.map((a)=>{
            if (a.Date === Module){
                totAtt += a.Batch;
                numAtt += 1;
            }
        })

        const attReport = {
            totAtt,
            numAtt
        }
        res.json(attReport)
    }).catch((err)=>{
        console.log(err);
    })

})





module.exports = router;