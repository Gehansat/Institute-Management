const router = require ("express").Router();
const { response } = require("express");
const { find, findByIdAndDelete } = require("../models/Staff");
const Staff = require("../models/Staff");
let staff = require("../models/Staff");

router.route("/add").post((req,res)=>{

const name = req.body.name;
const age = req.body.age;
const gender = req.body.gender;

const newStaff = new Staff({

    name,
    age,
    gender

})

newStaff.save().then(()=>{

    res.json("Staff Added")
}).catch((err)=>{
     
    console.log(err);

})

})
router.route("/").get((req,res)=>{

     Staff.find().then((staff)=>{
         res.json(staff)
     }).catch((err)=>{
         console.log(err)

     })
})

router.route("/update/:staffid").put(async(req,res) =>{

    let  userID = req.params.staffid;
    const {name,age,gender} = req.body; //destructur

    const updateStaff = {

        name,
        age,
        gender,
    }

    const update = await staff.findByIdAndUpdate(userID, updateStaff).then(() =>{

 res.status(200).send({status: "User updated"})
}).catch((err) =>{

    console.log(err);
    res.status(500).send({status: "Error with updating date",error: err.message});

})
  
 })

 //delete
router.route("/delete/:id").delete(async(req,res) => {
  let userID = req.params.id;

  await staff,findByIdAndDelete(userID)
  .then(()=> {  
      console.log(err.message);
      res.status(500).send({status: "error with delete user", error: err.message})      
  })
})

router.route("/get/:id").get(async(req,res) =>{

    let userID = req.params.id;
    const user = await Staff.findById(userID)
    await Staff.findById(userID)
    .then(() => {

        res.status(200).send({status: "User fetched", user: user})
    }).catch(() => {

        console.log(err.message);
        res.status(500).send({status: "Erro with get user", error: err.message});
    })
})


module.exports = router;