import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate,useLocation,Link } from "react-router-dom";
import UserViewHeader from "../CommonComponents/UserViewHeader";
import UserViewFooter from "../CommonComponents/UserViewFooter";



function ViewNotice(props) {



    const [NoticeTopic, setNoticeTopic] = useState("");
    const [NoticeType, setNoticeType] = useState("");
    const [AuthorName, setAuthorName] = useState("");
    const [AuthorId, setAuthorId] = useState("");
    const [ModuleId, setModuleId] = useState("");
    const [Email, setEmail] = useState("");
    const [Content, setContent] = useState("");
    
    const location=useLocation();
    const navigate = useNavigate();
    const[show,setShow]=useState(true);
    

    const handleShow=()=> setShow(true);
    const handleClose=()=> setShow(false);



    const UpdateNotice = {
            NoticeTopic,
            NoticeType,
            AuthorId,
            AuthorName,
            ModuleId,
            Email,
            Content
    }

    

    useEffect(() => {

            console.log(location.state.id)

        axios.get(`http://localhost:8070/notice/get/${location.state.id}`)
        .then((res)=> {
            

            console.log(res.data.Data.NoticeTopic)
            setNoticeTopic(res.data.Data.NoticeTopic)
            setNoticeType(res.data.Data.NoticeType)
            setAuthorId(res.data.Data.AuthorId)
            setAuthorName(res.data.Data.AuthorName)
            setModuleId(res.data.Data.ModuleId)
            setEmail(res.data.Data.Email)
            setContent(res.data.Data.Content)
           
           
            
        })
        .catch((err)=> {
            alert(err)
        })
        console.log(NoticeTopic)
        

    }, [props])

    function updateData(e){
        e.preventDefault();
        axios.put(`http://localhost:8070/notice/updateNotice/${location.state.id}`,UpdateNotice)
        .then(()=> {
            alert("Notice Updated")
            navigate("/notice");
        
        }).catch((err)=> {
            alert(err)
        })
       
    } 

    return(
        <div className="">
             <UserViewHeader/>
            <div className = "container">

           <form >
                <div className="form-group">
                    <label for="name" ><b>Notice Topic</b></label>
                    <input type="text" className="form-control" id="name" readOnly
                    value = {NoticeTopic}
                    onChange= {(e) =>{
                        setNoticeTopic(e.target.value);
                    }}
                     />
                </div>

                <div className="form-group">
                    <label for="DoB"><b>Date</b></label>
                    <input type="date" className="form-control" id="age" readOnly
                    value = {NoticeType}
                    onChange= {(e) =>{
                        NoticeType(e.target.value);
                    }}
                    />
                </div>

                <div className="form-group">
                    <label for="NIC"><b>Author Name</b></label>
                    <input type="text" className="form-control" id="NIC" readOnly
                     value = {AuthorName}
                     onChange= {(e) =>{
                        setAuthorName(e.target.value);
                    }}
                    />
                </div>    

                <div className="form-group">
                    <label for="Address"><b>Module Id</b></label>
                    <input type="text" className="form-control" id="Address" readOnly
                      value = {ModuleId}
                      onChange= {(e) =>{
                        setModuleId(e.target.value);
                    }}
                     />
                </div>    

                <div className="form-group">
                    <label for="email"><b>Email</b></label>
                    <input type="email" className="form-control" id="name" readOnly
                      value = {Email}
                      onChange= {(e) =>{
                        setEmail(e.target.value);
                    }}
                     />
                </div>    

                <div className="form-group">
                    <label for="Phone"><b>Content</b></label>
                    <textarea className="form-control" id="Phone"  readOnly
                      value = {Content}
                      onChange= {(e) =>{
                        setContent(e.target.value);
                    }}
                     />
                </div>     
              
         </form>
         
         <div>
             <a href={"/mark"}>
             <button type="button" class="btn btn-primary" >Mark As Read</button>
             </a>
         
        
         </div>  
        </div>
   
        <div>
         <UserViewFooter/>
         
         </div>
    </div>
     )
}

export default ViewNotice;