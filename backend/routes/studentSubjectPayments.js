const router = require("express").Router();
const multer = require("multer");
let modulePay = require("../models/subjectPay");

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null, '../frontend/src/components/PaymentsManagement/DepositSlips');
    },
    filename: function(req, file,cb){
        cb(null, file.originalname);

    }

});

let upload = multer({storage:storage});

router.route("/add").post(upload.single("DepositSlip"), async (req, res)=>{
    const SID = req.body.SID;
    const Amount = Number(req.body.Amount);
    const DepositSlip = req.file.originalname;
    const Status = "pending";
    const Module = req.body.Module;
    const Year = req.body.Year;
    const Semester = req.body.Semester;
    const Email = req.body.Email;
    const date = new Date().toISOString().slice(0, 10);

    const newModulePay = new modulePay({
        SID,
        Amount,
        date,
        Email,
        DepositSlip,
        Status,
        Module,
        Year,
        Semester
    })

    await newModulePay.save().then(()=>{
        res.json("payment added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/display/:sid").get(async (req,res)=>{
    let SID = req.params.sid;
    await modulePay.find({SID:SID, Status:"pending"}).sort({ createdAt: 'asc'}).then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})

// router.route("/update/:id").put(async (req, res) => {
//     let PID = req.params.id;
//     const {SID,Date,Amount,DepositSlip,Status,Module,Year,Semester} = req.body;

//     const updateModulePay = {
//         SID,
//         Amount,
//         DepositSlip,
//         Status,
//         Module,
//         Year,
//         Semester
//     }

//     const update = await modulePay.findByIdAndUpdate(PID, updateModulePay).then(()=>{
//         res.status(200).send({status:"payment updated"})
//     }).catch((err)=>{
//         console.log(err);
//     })

// })

router.route("/delete/:id").delete(async (req,res)=>{
    let PID = req.params.id;

    await modulePay.findByIdAndDelete(PID).then(()=>{
        res.status(200).send({status:"payment deleted"})
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/updatePending").put(upload.single("DepositSlip"), async (req, res)=>{
    let PID = req.body.pid;
    const SID = req.body.SID;
    const Amount = Number(req.body.Amount);
    const Module = req.body.Module;
    const Year = req.body.Year;
    const Semester = req.body.Semester;
    const Email = req.body.Email;
    const DepositSlip = req.file.originalname;
    const date = new Date().toISOString().slice(0, 10);
    

    const update = await modulePay.findByIdAndUpdate(PID,{
        SID:SID,
        Amount:Amount,
        Module:Module,
        Year:Year,
        Semester:Semester,
        DepositSlip:DepositSlip,
        Email:Email,
        date:date
        }).then((p)=>{
        res.status(200).send({status:"status updated"})
    }).catch((err)=>{
        console.log(err.message);
    })



    

})


module.exports = router;

