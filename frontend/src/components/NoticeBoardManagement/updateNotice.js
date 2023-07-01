import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate,useLocation,Link } from "react-router-dom";
import AdminSideNav from "../CommonComponents/AdminSideNav";




function UpdateNotice(props) {



    const [NoticeTopic, setNoticeTopic] = useState("");
    const [NoticeType, setNoticeType] = useState("");
    const [AuthorName, setAuthorName] = useState("");
    const [AuthorId, setAuthorId] = useState("");
    const [ModuleId, setModuleId] = useState("");
    const [Email, setEmail] = useState("");
    const [Content, setContent] = useState("");
    
    const location=useLocation();
    const navigate = useNavigate();


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
            <AdminSideNav/>
            <div className = "container">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center mb-5">
                    <h2 class="heading-section">Update Notice</h2>
                </div>
            </div>

           <form onSubmit={updateData}>
                <div className="form-group">
                    <label for="name"><b>Notice Topic</b></label>
                    <input type="text" className="form-control" id="name" 
                    value = {NoticeTopic}
                    onChange= {(e) =>{
                        setNoticeTopic(e.target.value);
                    }}
                     />
                </div>

                <div className="form-group">
                    <label for="DoB"><b>Date</b></label>
                    <input type="date" className="form-control" id="age" 
                    value = {NoticeType}
                    onChange= {(e) =>{
                        NoticeType(e.target.value);
                    }}
                    />
                </div>

                <div className="form-group">
                    <label for="NIC"><b>Author Name</b></label>
                    <input type="text" className="form-control" id="NIC" 
                     value = {AuthorName}
                     onChange= {(e) =>{
                        setAuthorName(e.target.value);
                    }}
                    />
                </div>    

                <div className="form-group">
                    <label for="Address"><b>Module Id</b></label>
                    <input type="text" className="form-control" id="Address" 
                      value = {ModuleId}
                      onChange= {(e) =>{
                        setModuleId(e.target.value);
                    }}
                     />
                </div>    

                <div className="form-group">
                    <label for="email"><b>Email</b></label>
                    <input type="email" className="form-control" id="name" 
                      value = {Email}
                      onChange= {(e) =>{
                        setEmail(e.target.value);
                    }}
                     />
                </div>    

                <div className="form-group">
                    <label for="Phone"><b>Content</b></label>
                    <textarea className="form-control" id="Phone" 
                      value = {Content}
                      onChange= {(e) =>{
                        setContent(e.target.value);
                    }}
                     />
                </div>       

                

        <div class="form-submit">            
            <button type="submit" className="btn btn-primary">Update Notice</button>&nbsp;&nbsp;&nbsp;&nbsp;
            
        </div>
        <div class="">            
        <Link to="/notice"><button  className="btn btn-danger">Cancel</button></Link> 
        </div>

         </form>
        </div>
    </div>
     )
}

export default UpdateNotice;