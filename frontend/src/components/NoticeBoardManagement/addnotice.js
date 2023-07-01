import React, {useState} from "react";
import axios from "axios";
import FileBase64 from 'react-file-base64';
import AdminSideNav from "../CommonComponents/AdminSideNav";
import { useNavigate,useLocation } from "react-router-dom";



export default function AddNotice(){
    


    const [NoticeTopic, setNoticeTopic] = useState("");
    const [NoticeType, setNoticeType] = useState("");
    const [AuthorName, setAuthorName] = useState("");
    const [AuthorId, setAuthorId] = useState("");
    const [ModuleId, setModuleId] = useState("");
    const [Email, setEmail] = useState("");
    const [Content, setContent] = useState("");
    const [Photo, setPhoto] = useState("");

    
    const navigate = useNavigate();

    function sendData(e){
        
        e.preventDefault();

        
        
        const NewNotice = {
            NoticeTopic,
            NoticeType,
            AuthorId,
            AuthorName,
            ModuleId,
            Email,
            Content,
            Photo
        }
        
        console.log (NewNotice);
        axios.post("http://localhost:8070/notice/NewNotice",NewNotice).then(()=>{
        alert("Notice Added")
        navigate("/notice");
        }).catch((err)=>{  
            console.log (err);
        alert(err)
    })

    }

    

    return(
            <div>
                
                <AdminSideNav/>
                <div className="container" style={{maxWidth:"700px",height:"100%", marginLeft:"30%",borderRadius:"10px", padding:"10px 40px 40px 40px"}}>
                <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>Create New Notice</h4>
                <form style={{display:"flex", flexDirection:"column"}} onSubmit={sendData}>
                    <div className="mb-3">
                        <label for="NoticeTopic" className="form-label">NoticeTopic: </label>
                        <input type="text" placeholder=""  className="form-control" id="NoticeTopic" required
                        onChange={(e)=>{

                            setNoticeTopic(e.target.value);

                        }}/>          
                    </div>
                    <div className="mb-3">
                        <label for="NoticeType" className="form-label">Date: </label>
                        <input type="date" placeholder=""  className="form-control" id="NoticeType" required
                        onChange={(e)=>{

                            setNoticeType(e.target.value);

                        }}/>          
                    </div>
                    <div className="mb-3">
                        <label for="AuthorName" className="form-label">Author Name: </label>
                        <input type="text" placeholder=""  className="form-control" id="NoticeTopic" 
                        onChange={(e)=>{

                            setAuthorName(e.target.value);

                        }}/>          
                    </div>

                   
                    <div className="mb-3">
                        <label for="AuthorId" className="form-label">Author Id: </label>
                        <input type="text" placeholder="S001" pattern="[S][0-9]{3,}"  className="form-control" id="AuthorId" 
                        onChange={(e)=>{

                            setAuthorId(e.target.value);

                        }}/>          
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email: </label>
                        <input type="email" placeholder="johndoe@gmail.com" className="form-control" id="email" required
                        onChange={(e)=>{

                            setEmail(e.target.value);

                        }}/>          
                    </div>

                    <div className="mb-3">
                        <label for="ModuleId" className="form-label">Module Code: </label>
                        <input type="text" placeholder="M001" pattern="[M][0-9]{3,}" className="form-control" id="ModuleId" required
                        onChange={(e)=>{

                            setModuleId(e.target.value);

                        }}/>          
                    </div>
                    <div className="mb-3">
                        <label for="Content" className="form-label">Content: </label>
                        <textarea placeholder="Description" pattern="[M][0-9]{3,}" className="form-control" id="Content" required
                        onChange={(e)=>{
                            setContent(e.target.value);
                        }}/>          
                    </div>
                    <div class="mb-3">
                        <label for="Photo" className="form-label">Upload A photo </label>      
                    </div>

                    <div class="mb-3">
                    <FileBase64
                        multiple={ false }
                        onDone={ ({base64}) =>setPhoto(base64)} />      
                    </div>
                    <button style={{alignSelf:"center", marginTop:"20px"}} type="submit" class="btn btn-outline-dark">Upload</button>
                </form>
            </div>
            </div>
    )
}