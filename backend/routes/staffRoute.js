const { getInfo } = require("../controller/staffController");
const { addInfo } = require("../controller/staffController");
const { getInfoById } = require("../controller/staffController");
const { updateInfo } = require("../controller/staffController");
const { deleteInfo } = require("../controller/staffController");
const router = require("express").Router();
const Staff = require("../models/Staff");

//create
router.route("/addStaff").post(addInfo);
   
//read
router.route("/").get(getInfo);
  
//update
router.route("/updateStaff/:id").put(updateInfo);
  
//delete
router.route("/delete/:id").delete(deleteInfo);
   
//get a staff details
router.route("/get/:id").get(getInfoById);

//search
router.route("/displaysss/:ID").get((req,res)=>{
    let ID  = req.params.ID;
    Staff.find({ID :ID}).then((staffs)=>{
        res.json(staffs)
    }).catch((err)=>{
        console.log(err);
    })

})
   
module.exports = router;
