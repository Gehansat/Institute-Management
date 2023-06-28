const mongoose =require ("mongoose");
const Schema = mongoose.Schema;

const noticeSchema= new Schema(
    {
      NoticeTopic:{
          type : String,
          required:true
          
      },  
      NoticeType:{
        type : String,
        required:true
        
        
    }, 
    AuthorName:{
        type : String,
        required:true
       
    },
    Email:{
        type : String,
        required:true
       
    },
    AuthorId:{
        type : String,
        required:true
      
    },
    ModuleId:{
        type : String,
       
    },
    Photo:{
        type : String,
       
    },
    Content:{
        type : String,
        required:true
        
    }
    }
)
const notice = mongoose.model("NoticeBoard",noticeSchema);

module.exports=notice;