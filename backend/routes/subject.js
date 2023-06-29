//subjects.js

const router = require("express").Router();
let Subject = require("../models/subject");


router.route("/addS").post((req,res) => {
    const ID = req.body.ID;
    const Name = req.body.Name;
    const Lecturer = req.body.Lecturer;

    const newSubject = new Subject({
        ID,
        Name,
        Lecturer
    })
    newSubject.save().then(() => {
        res.json("Subject Added")
    }).catch(() =>{
        console.log(err);
    })
})
router.route("/displaySubject").get((req,res)=>{
    Subject.find().then((subjects)=>{
        res.json(subjects)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/displayss/:ID").get((req,res)=>{
    let ID  = req.params.ID;
    Subject.find({ID :ID}).then((subjects)=>{
        res.json(subjects)
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/update/:SubjectId").put(async (req, res) =>{
   let userID = req.params.SubjectId;   
   const{ID,Name , Lecturer} = req.body;

   const updateSubject = {
    ID,   
    Name,
   Lecturer
   }
   const update = await Subject.findByIdAndUpdate(userID, updateSubject)
   .then(() => {
    res.status(200).send({status:"Updated Successfully!"}) 
   }).catch((err) =>{
    res.status(500).send({status:"Error with updating data"}) 
   }) 
})

router.route("/delete/:SubjectId").delete(async (req, res) => {
    let userID = req.params.SubjectId;

    await Subject.findByIdAndDelete(userID)
     .then (() => {
         res.status(200).send({status: "Deleted Successfully"});

     }).catch((err) => {
         console.log(err.message);
         res.status(500).send({status: "Error with the Deletion"});
     })
})
 router.route("/get/:SubjectId").get(async (req,res) => {
     let userID = req.params.SubjectId;
     const user = await Subject.findById(userID)
     .then((subject) => {
         res.status(200).send({status : "Subject fetched", subject})
     }).catch(()=>{
         console.log(err.message);
         res.status(500).send({status: "Error with getting details"});
     })
 })

module.exports = router;