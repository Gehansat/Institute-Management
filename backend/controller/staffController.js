let Staff = require("../models/Staff"); 

//create
exports.addInfo = async(req,res)=>{
    const {name, DoB, NIC, Address, Email, Phone, gender, ID, JobTitle, Experience, HireDate, UserName, Password, userType} = req.body;

    if (!name || !DoB || !NIC ||!Address ||!Email ||!Phone ||!gender ||!ID ||!JobTitle ||!Experience ||!HireDate ||!UserName ||!Password ||!userType) {
        
        throw new Error("Please fill all the feilds");
    }else {
    const create = new Staff({
        name, DoB, NIC, Address, Email, Phone, gender, ID, JobTitle, Experience, HireDate, UserName, Password, userType
    });

    console.log(create)
     await create.save()
    .then((addStaff)=>{
        res.status(200).json({addStaff, message: "added"});
    }).catch((err)=>{
        console.log(err)
    })
   
}
    
}

//read
exports.getInfo = (async(req,res)=>{
    const info = await Staff.find()
    .then((info)=>{
        res.json(info)
    }).catch((err)=>{
        console.log(err)
    })
})

//update
exports.updateInfo = async(req,res)=>{
    let userID = req.params.id;
    const {name, DoB, NIC, Address, Email, Phone, gender, ID, JobTitle, Experience, HireDate, UserName, Password, userType} = req.body;
   
    if (!name || !DoB || !NIC ||!Address ||!Email ||!Phone ||!gender ||!ID ||!JobTitle ||!Experience ||!HireDate ||!UserName ||!Password ||!userType) {
        res.status(400);
        throw new Error("Please fill all the feilds");
    }else {

    const update ={
        name, DoB, NIC, Address, Email, Phone, gender, ID, JobTitle, Experience, HireDate, UserName, Password, userType
    }

    const addStaff = await Staff.findByIdAndUpdate(userID, update)
    .then(() => {
        res.status(200).send({status: "Staff member updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    })
}   
   
}


//delete
exports.deleteInfo = async (req,res) => {
    let userID = req.params.id;

    await Staff.findByIdAndDelete(userID)
    .then(()=> {
        res.status(200).send({status: "User deleted"});
    }).catch((err)=> {
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error:err.message});
    })
} 

//get one's details
exports.getInfoById = (async (req, res) => {
    let userID = req.params.id;
    const user = await Staff.findById(userID)
    .then((Staff) => {
        res.status(200).send({status: "User fetched",Staff})
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: err.message});
    })

})
