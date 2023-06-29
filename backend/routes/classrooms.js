const router = require("express").Router();
let Classroom = require("../models/classroom");

router.route("/add").post((req,res)=>{
    const id = req.body.id;
    const classroomid = req.body.classroomid;
    const module = req.body.module;
    const time = req.body.time;
    const date = req.body.date;

    const newClassroom = new Classroom({
        classroomid,
        module,
        time,
        date
    })

    newClassroom.save().then(()=>{
         res.json("Classroom Added")
    }).catch((err)=>{
         console.log(err);
    })
})

router.route("/").get((req,res)=>{
     Classroom.find().then((classrooms)=>{
        res.json(classrooms)
     }).catch((err)=>{
         console.log(err)
     })
})



router.route("/update").put(async(req, res) => {
   const module = req.body.module;
   const id = req.body.id;
   console.log(module,id);
   try{
       await Classroom.findById(id, (error, updateClassroom)=>{
           updateClassroom.module = module;
           updateClassroom.save();
       });
   } catch (err){
       console.log(err);
   }

   res.send("updated");
});



router.route("/delete/:id").delete(async(req,res) => {
    const id = req.params.id;
 await Classroom.findByIdAndDelete(id).exec()
        res.send("Deleted");
      
})

router.route("/get/:id").get(async (req, res) =>{
    let id = req.params.id;
    const user = await Classroom.findById(id)
    .then((classroom)=>{
        res.status(200).send({status: "User fetched" , classroom})
     }).catch((err)=>{
         console.log(err.message);
         res.status(500).send({status: "Error with get user", error: err.message});
     })
})

router.route("/display").get(async (req,res)=>{
    await Classroom.find().sort({ createdAt: 'asc'}).then((classroom)=>{
        res.json(classroom)
    }).catch((err)=>{
        console.log(err);
    })

})


router.route("/displaySearch/:id").get((req,res)=>{
    let classroomid = req.params.id;
    Classroom.find({classroomid:classroomid}).then((classroom)=>{
        res.json(classroom)
    }).catch((err)=>{
        console.log(err);
    })

})

module.exports = router;