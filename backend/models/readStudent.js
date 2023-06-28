const mongoose =require ("mongoose");
const Schema = mongoose.Schema;

const readStdSchema= new Schema(
    {
        StdName:{
            type : String,
            required:true
            
        },  
        StdId:{
          type : String,
          required:true
          
          
      }
    }
)
const readStd = mongoose.model("readStudent",readStdSchema);

module.exports=readStd;