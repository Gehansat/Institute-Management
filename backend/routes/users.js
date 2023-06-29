const router = require("express").Router();
let user = require("../models/user");

router.route("/signup").post((req, res)=>{

    const {ID, Email, Password, Role} = req.body;

    
    

    const newUser = new user({
        ID, Email, Password, Role
    })

    newUser.save().then((newUser)=>{
        res.json({key:newUser._id,ID:newUser.ID, Role:newUser.Role})
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/signin").post((req,res)=>{
    const {Email, Passowrd} = req.body;

    user.findOne({Email:Email}).then((newUser)=>{
        res.json(newUser)
    }).catch((err)=>{
        console.log(err);
    })

})


module.exports = router;