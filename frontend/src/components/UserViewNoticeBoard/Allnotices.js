import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./notice.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserViewHeader from "../CommonComponents/UserViewHeader";
import UserViewFooter from "../CommonComponents/UserViewFooter";
import UpdateNotice from "./updateNotice";
import { Icon } from "@mui/material";





export default function AllNotices() {
  const [notices, setNotices] = useState([]);
  const Navigate=useNavigate()

  useEffect(() => {
    function getNotices() {
      axios
        .get("http://localhost:8070/notice/")
        .then((res) => {
          setNotices(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getNotices();
  }, []);


  const UpdateNotice=(noticeId)=>{
    console.log("erroe")
     Navigate('updateNotice',{ state: { id: noticeId } }
     )
    

  }

  return (
      
    <div>
    <UserViewHeader/>
   
    
  <div className="headertop">
  
    
</div >
<div className="toptopic">
<div class="card">
  <div class="card-header">
    <Icon> </Icon>
   Latest Annoucement
  </div>
</div>
</div>

    <div className="container">
        
        <div style={{padding:"5px 0px 5px 0px",width:"150vh"}}>
        <table class="table-striped" id="notice">
        <thead>
            <tr>
            
              
            </tr>
            </thead>

            <tbody>
            {notices.map((item) => (
              <tr>
                <td>{item.NoticeType}</td>
                <td>{item.NoticeTopic}</td>
                <td>{item.ModuleId}</td>
                <td>
                <button onClick={() => UpdateNotice(item._id)}>View</button>
                {/* /*<Link color="warning" className="btn btn-warning mr-1" to={`/updateNotice/${item._id}`}> <i className="fas fa-edit"></i>&nbsp;Update</Link>&nbsp;&nbsp; */}
                </td>
                
              </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
    <div className="addnew">
  
  
  
</div>
    <UserViewFooter/>
</div>
  );
}