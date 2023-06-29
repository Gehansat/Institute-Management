const router = require("express").Router();
let ticket = require("../models/ticket");

router.route("/addTicket").post((req,res)=>{
    const st_id = req.body.st_id;
    const st_name = req.body.st_name;
    const st_contact_no = req.body.st_contact_no;
    const st_email = req.body.st_email;
    const question_type = req.body.question_type;
    const description = req.body.description;
    const ad_status = "Pending";
    
    const newTicket = new ticket({
        st_id,
        st_name,
        st_contact_no,
        st_email,
        question_type,
        description,
        ad_status,
    })

    newTicket.save().then(()=>{
        res.json("Ticket opened")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/viewTicket").get((req,res)=>{
    ticket.find().then((tickets)=>{
        res.json(tickets)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/adminViewTicket").get((req,res)=>{
    ticket.find().then((tickets)=>{
        res.json(tickets)
    }).catch((err)=>{
        console.log(err)
    })
})

// router.route("/updateTicket/:tid").put(async(req,res)=>{
//     let ticketId = req.params.tid;
//     const {st_id, st_name, st_contact_no, st_email, question_type, description} = req.body;

//     const updateTicket = {
//         st_id,
//         st_name,
//         st_contact_no,
//         st_email,
//         question_type,
//         description
//     }
    
//     const update = await ticket.findByIdAndUpdate(ticketId,updateTicket)
//     .then(()=>{
//         res.status(200).send({status:"Ticket updated"})
//     }).catch((err) => {
//         console.log(err);
//         res.status(500).send({status: "Error with updating data",error:err.message});
//     })

// })

//update ticket
router.put("/update/:id",(req,res) => {

    ticket.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) => {

            if(err){
                return res.status(400).json({
                    error:err
                });

            }

            return res.status(200).json({
                success: "Update Succesfully"
            });
        }
    );
});

//Update status
router.put("/updateStatus/:id",(req,res) => {

    ticket.findByIdAndUpdate(
        req.params.id,
        
        {
            ad_status:"Solved"
        },
        (err,post) => {

            if(err){
                return res.status(400).json({
                    error:err
                });

            }

            return res.status(200).json({
                success: "Status Updated Succesfully"
            });
        }
    );
});

router.route("/deleteTicket/:tid").delete(async(req,res) => {
    let ticketId = req.params.tid;

    await ticket.findByIdAndDelete(ticketId).then(()=>{
        res.status(200).send({status: "Ticket deleted"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})
router.route("/get/:tid").get(async (req,res) => {
    let ticketId = req.params.tid;
    const user = await ticket.findById(ticketId)
    .then((ticket)=>{
        res.status(200).send({status: "Ticket fetched", ticket})
    }).catch(()=>{
        console.log(err.message);
        res.status(500).send({status:"Error with user" , error: err.message});
    })
})

router.route("/ticketss/:st_id").get((req,res)=>{
    let st_id = req.params.st_id;
    ticket.find({st_id:st_id}).then((tickets)=>{
        res.json(tickets)
    }).catch((err)=>{
        console.log(err);
    })
})

module.exports = router;