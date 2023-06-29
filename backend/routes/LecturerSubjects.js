const router = require("express").Router();
let Material = require("../models/LecturerSubject");

router.route("/addMaterial").post((req,res)=>{

    const LecMaterialID = req.body.LecMaterialID;
    const SupportedLinks = req.body.SupportedLinks;
    const Message = req.body.Message;
    const  LectureMaterial = req.body. LectureMaterial;

    const newMaterial = new Material({

        LecMaterialID,
        SupportedLinks,
        Message,
        LectureMaterial

    })
    newMaterial.save().then(() => {
        res.json("Material Added")
    }).catch(() =>{
        console.log(err);
    })

    router.route("/displayMaterial").get((req,res)=>{
        Material.find().then((materials)=>{
            res.json(materials)
        }).catch((err)=>{
            console.log(err)
        })
    })

    router.route("/display").get((req,res)=>{
        Material.find().then((materials)=>{
            res.json(materials)
        }).catch((err)=>{
            console.log(err)
        })
    })

    router.route("/update/:id").put(async (req, res) =>{
        let userID = req.params.id;   
        const{LecMaterialID, SupportedLinks ,Message,LectureMaterial} = req.body;
     
        const updateMaterial = {
            LecMaterialID,   
            SupportedLinks,
            Message,
            LectureMaterial
        }
        const update = await Material.findByIdAndUpdate(userID,updateMaterial )
        .then(() => {
         res.status(200).send({status:"Updated Successfully!"}) 
        }).catch((err) =>{
         res.status(500).send({status:"Error with updating data"}) 
        }) 
     })

     router.route("/delete/:id").delete(async (req, res) => {
        let userID = req.params.id;
    
        await Material.findByIdAndDelete(userID)
         .then (() => {
             res.status(200).send({status: "Deleted Successfully"});
    
         }).catch((err) => {
             console.log(err.message);
             res.status(500).send({status: "Error with the Deletion"});
         })
    })
})
  
module.exports = router;
