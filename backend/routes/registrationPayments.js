const router = require("express").Router();
let registrationPay = require("../models/registrationPay");
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mad2022project@gmail.com',
      pass: 'project2022@mobile'
    }
  });

router.route("/displayPending").get((req,res)=>{
    registrationPay.find({Status:{ $in: ["pending", "reviewing" ] }}).sort({Status:'-1', createdAt: 'asc'}).then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/displayAccepted").get((req,res)=>{
    registrationPay.find({Status:"accepted"}).sort({Status:'-1', createdAt: 'asc'}).then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/display").get((req,res)=>{
    registrationPay.find().sort({ createdAt: 'asc'}).then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/displayOne/:pid").get((req,res)=>{
    let PID = req.params.pid;
    
    registrationPay.findOne({_id:PID}).then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/display/:sid").get((req,res)=>{
    let SID = req.params.sid;
    registrationPay.find({SID:SID, Status:{ $in: ["pending", "reviewing" ] }}).then((payments)=>{
        res.json(payments)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/displayAcceptedSearch/:sid").get((req,res)=>{
    let SID = req.params.sid;
    registrationPay.find({SID:SID, Status:"accepted"}).then((payments)=>{
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
        const update = await registrationPay.findByIdAndUpdate(PID,{Status:stateToBeUpdated}).then((p)=>{

            if (stateToBeUpdated == "accepted"){
                // send mail
                var mailOptions = {
                    from: 'mad2022project@gmail.com',
                    to: p.Email,
                    subject: 'Registration Payment Accepted',
                    html: `<h3>Your Registration Payment has been accepted</h3>

                            <p style="font-size:1.1em;">Details:</p>

                            <p style="font-size:1.1em;">Student ID: ${p.SID}</p>
                            <p style="font-size:1.1em;">Date: ${p.date}</p>
                            <p style="font-size:1.1em;">Amount(Rs.): ${p.Amount}</p>
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


router.route("/reportRegPay/:year").get((req, res)=>{
    let year = req.params.year;

    registrationPay.find({Status:"accepted"}).then((payments)=>{

        let totRegPay = 0;
        let numRegPay = 0;

        payments.map((p)=>{
            if (p.date.slice(0,4) === year){
                totRegPay += p.Amount;
                numRegPay += 1;
            }
        })

        const regReport = {
            totRegPay,
            numRegPay
        }
        res.json(regReport)
    }).catch((err)=>{
        console.log(err);
    })

})


module.exports = router;