const router = require("express").Router();
const notice= require("../models/notice");
const addstd= require("../models/readStudent")



//create
router.route("/NewNotice").post((req,res)=>{
    const NoticeTopic= req.body.NoticeTopic;``
    const NoticeType= req.body.NoticeType;
    const AuthorName=req.body.AuthorName;
    const AuthorId=req.body.AuthorId;
    const Email=req.body.Email;
    const ModuleId=req.body.ModuleId;
    const Content=req.body.Content;
    const Photo=req.body.Photo;
    
 
    const newNotice= new notice({
        NoticeTopic,
        NoticeType,
        AuthorName,
        AuthorId,
        Email,
        ModuleId,
        Content,
        Photo
    })
    newNotice.save().then(()=>{
        res.json("New Notice Creaated") 
    }).catch((error)=>{
        console.log(error);
    })
 })
 //addreadStudent
 router.route("/mark").post((req,res)=>{

    const StdName=req.body.StdName;
    const StdId =req.body.StdId;

    const newstdread= new addstd(
        {
            StdName,
            StdId
        }
    )
    newstdread.save().then(()=>{
        res.json("submited") 
    }).catch((error)=>{
        console.log(error);
    })
 })
 //readStdList
 router.route("/stdlist").get((req,res)=>{
    addstd.find().then((readstudents)=>{
        res.json(readstudents)
    }).catch((error)=>{
        console.log(error);
    })
})


//read
router.route("/").get((req,res)=>{
        notice.find().then((notices)=>{
            res.json(notices)
        }).catch((error)=>{
            console.log(error);
        })
})

//update
router.route("/updateNotice/:noticeId").put(async(req,res)=>{

    let noticeId= req.params.noticeId;
    const{NoticeTopic,NoticeType,Role,AuthorName,AuthorId,module,ModuleId,Content}= req.body; 

    const updateNotice={
        NoticeTopic,
        NoticeType,
        AuthorName,
        Role,
        AuthorId,
        module,
        ModuleId,
        Content

    }
    const update=  await notice.findByIdAndUpdate(noticeId,updateNotice)
    .then(()=>{
        res.status(200).send({status:"notice updated"})
    }).catch((error)=>{
        console.log(error);
        res.status(500).send({status:"Task Not Completed"});
    })
    
    
})


//delete
router.route("/deleteNotice/:noticeId").delete(async(req,res)=>{
    let noticeId= req.params.noticeId;

    await notice.findByIdAndDelete(noticeId).then(()=>{
        res.status(200).send({status:"notice Deleted successfully" });

    }).catch((error)=>{
        console.log(error);
        res.status(500).send({status:"Task Not Completed"});
    })
})


//get a noticeDetail
router.route("/get/:noticeId").get(async(req,res)=>{
    try{
        let noticeId = req.params.noticeId;
    const Data =await notice.findById(noticeId)
            .then((Data)=>{
                res.status(200).send({status:"notice fetch",Data})

    }).catch((error)=>{
        console.log(error);
        res.status(500).send({status:"error with get user",error:error});
    })
    }
    catch(error){
        console.log(error);
        res.status(500).send({status:"error with get user",error:error});
    }

    


});
//search
router.route("/displayssz/:AuthorId").get((req,res)=>{
    let AuthorId  = req.params.AuthorId;
    notice.find({AuthorId :AuthorId}).then((notices)=>{
        res.json(notices)
    }).catch((err)=>{
        console.log(err);
    })

})




module.exports= router;