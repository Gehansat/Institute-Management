const router = require("express").Router();
let modulePay = require("../models/subjectPay");
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mad2022project@gmail.com',
      pass: 'project2022@mobile'
    }
  });


router.route("/displayPending").get(async (req,res)=>{
    await modulePay.find({Status:{ $in: ["pending", "reviewing" ] }}).sort({Status:'-1', createdAt: 'asc'}).then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/displayAccepted").get(async (req,res)=>{
    await modulePay.find({Status:"accepted"}).sort({Status:'-1', createdAt: 'asc'}).then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/display").get(async (req,res)=>{
    await modulePay.find().sort({ createdAt: 'asc'}).then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/displayOne/:pid").get((req,res)=>{
    let PID = req.params.pid;
    modulePay.findOne({_id:PID}).then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})


router.route("/update/:pid").put(async (req, res) => {
    let PID = req.params.pid;
    const stateToBeUpdated = req.body.stateToBeUpdated;
    const currentState = req.body.currentState;

    if (stateToBeUpdated != currentState){
        const update = await modulePay.findByIdAndUpdate(PID,{Status:stateToBeUpdated}).then((p)=>{

            if (stateToBeUpdated == "accepted"){
                // send mail
                var mailOptions = {
                    from: 'mad2022project@gmail.com',
                    to: p.Email,
                    subject: 'Payment Accepted',
                    html: `<h3>Your Payment for module ${p.Module} has been accepted</h3>

                            <p style="font-size:1.1em;">Details:</p>

                            <p style="font-size:1.1em;">Student ID: ${p.SID}</p>
                            <p style="font-size:1.1em;">Date: ${p.date}</p>
                            <p style="font-size:1.1em;">Amount(Rs.): ${p.Amount}</p>
                            <p style="font-size:1.1em;">Year: ${p.Year}</p>
                            <p style="font-size:1.1em;">Semester: ${p.Semester}</p>
                            <br>
                            <p>- Shilpa Institue</>`       
                  };

                  transporter.sendMail(mailOptions, function(error, info){
                    if (error) {
                      console.log(error);
                    } else {
                      console.log('Email sent: ' + info.response);
                    }
                  });
            }

            res.status(200).send({status:"status updated"})
        }).catch((err)=>{
            console.log(err);
        })

            res.status(200).send()

    }
    
})

router.route("/display/:sid").get((req,res)=>{
    let SID = req.params.sid;
    modulePay.find({SID:SID, Status:{ $in: ["pending", "reviewing" ] }}).then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/displayAcceptedSearch/:sid").get((req,res)=>{
    let SID = req.params.sid;
    modulePay.find({SID:SID, Status:"accepted"}).then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/reportSubPay/:year").get((req, res)=>{
        let year = req.params.year;

        modulePay.find({Status:"accepted"}).then((payments)=>{

            let totSubPay = 0;
            let numSubPay = 0;

            payments.map((p)=>{
                if (p.date.slice(0,4) === year){
                    totSubPay += p.Amount;
                    numSubPay += 1;
                }
            })

            const subReport = {
                totSubPay,
                numSubPay
            }
            res.json(subReport)
        }).catch((err)=>{
            console.log(err);
        })

})



module.exports = router;