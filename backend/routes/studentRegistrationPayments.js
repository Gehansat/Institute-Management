const router = require("express").Router();
const multer = require("multer");
let registrationPay = require("../models/registrationPay");

const storage = multer.diskStorage({
    destination: function(req, file,cb){
        cb(null, '../frontend/src/components/PaymentsManagement/DepositSlips');
    },
    filename: function(req, file,cb){
        cb(null, file.originalname);

    }

});

let upload = multer({storage:storage});

router.route("/add").post(upload.single("DepositSlip"), (req, res)=>{

    const SID = req.body.SID;
    const Amount = Number(req.body.Amount);
    const DepositSlip = req.file.originalname;
    const Status = "pending";
    const Email = req.body.Email;
    const date = new Date().toISOString().slice(0, 10);
    

    const newRegistrationPay = new registrationPay({
        SID,
        Amount,
        date,
        Email,
        DepositSlip,
        Status
    })

    newRegistrationPay.save().then(()=>{
        res.json("payment added")
    }).catch((err)=>{
        console.log(err);
    })

})


module.exports = router;