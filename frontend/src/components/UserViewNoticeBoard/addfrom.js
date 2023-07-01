import React, {useState} from "react";
import axios from "axios";
import FileBase64 from 'react-file-base64';

import { useNavigate,useLocation } from "react-router-dom";



export default function AddReadStd(){
    


    const [StdName, setNoticeTopic] = useState("");
    const [StdId, setNoticeType] = useState("");
   
    const navigate = useNavigate();

    function sendData(e){
        
        e.preventDefault();

        
        
        const NewReadStd = {
            StdName,
            StdId
        }
        
        console.log (NewReadStd);
        axios.post("http://localhost:8070/notice/mark",NewReadStd).then(()=>{
        alert("Submited")
        navigate("/Allnotices");
        }).catch((err)=>{  
            console.log (err);
        alert(err)
    })

    }

    

    return(
            <div>
                
              
                <div className="container" style={{maxWidth:"700px",height:"100%", marginLeft:"30%",borderRadius:"10px", padding:"10px 40px 40px 40px"}}>
                <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>Mark As Read</h4>
                <form style={{display:"flex", flexDirection:"column"}} onSubmit={sendData}>
                    <div className="mb-3">
                        <label for="NoticeTopic" className="form-label">Student Name: </label>
                        <input type="text" placeholder=""  className="form-control" id="NoticeTopic" required
                        onChange={(e)=>{

                            setNoticeTopic(e.target.value);

                        }}/>          
                    </div>
                    <div className="mb-3">
                        <label for="NoticeType" className="form-label">Student Id: </label>
                        <input type="text" placeholder=""  className="form-control" id="NoticeType" required
                        onChange={(e)=>{

                            setNoticeType(e.target.value);

                        }}/>          
                    </div>
                    
                    <button style={{alignSelf:"center", marginTop:"20px"}} type="submit" class="btn btn-outline-dark">Submit</button>
                </form>
            </div>
            </div>
    )
}