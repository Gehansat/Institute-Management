import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./notice.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import NoticeBoardHeader from "./NoticeBoardHeader";
import UpdateNotice from "./updateNotice";
import NoticeSearch from "./searchNo";



export default function Notices() {
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


  function updateSearchTerms (newSearchTerm){
    function getSearchedSubjects(){
      axios.get(`http://localhost:8070/notice/displayssz/${newSearchTerm}`).then((res)=>{
        setNotices(res.data);
  
      }).catch((err)=>{
         console.log()
      })
    }
    function getNotices(){
      axios.get("http://localhost:8070/notice/").then((res)=>{
        setNotices(res.data);
  
      }).catch((err)=>{
        console.log(err.message)
        alert(err.message)
      })
    }
  
    if (newSearchTerm != ''){
      getSearchedSubjects();
    }
    else{
      getNotices();
    }
    
    
  }






  const deleteNotice = (noticeId) => {
    axios
      .delete(`http://localhost:8070/notice/deleteNotice/${noticeId}`)
      .then((res) => {
        alert(`deleted successfully`);
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const UpdateNotice=(noticeId)=>{
    console.log("error")
     Navigate('updateNotice',{ state: { id: noticeId } }
     )
    

  }

  return (
      
    <div>
    <AdminSideNav/>
    <NoticeBoardHeader/>
    
    <div style={{display: "flex",  justifyContent:"flex-end", margin:"1rem"}}>
    
    </div>
    <div className="container">
            <NoticeSearch
            refreshFunction={updateSearchTerms}
            />
        
        <div style={{padding:"5px 0px 5px 0px",width:"150vh"}}>
        <table class="table-striped" id="notice">
        <thead>
            <tr>
            <th scope="col">Notice Topic</th>
              <th scope="col">Date</th>
              <th scope="col">Author Id</th>
              <th scope="col">Author Name</th>
              <th scope="col">Module Id</th>
              <th scope="col">Remove</th>
              <th scope="col">Update</th>
              <th scope="col">Get Count</th>
            </tr>
            </thead>

            <tbody>
            {notices.map((item) => (
              <tr>
                <td>{item.NoticeTopic}</td>
                <td>{item.NoticeType}</td>
                <td>{item.AuthorId}</td>
                <td>{item.AuthorName}</td>
                <td>{item.ModuleId}</td>
                <td>
                  <button onClick={() => deleteNotice(item._id)}>Delete</button>
                </td>

                <td>
                <button onClick={() => UpdateNotice(item._id)}>Update</button>
                {/* /*<Link color="warning" className="btn btn-warning mr-1" to={`/updateNotice/${item._id}`}> <i className="fas fa-edit"></i>&nbsp;Update</Link>&nbsp;&nbsp; */}
                </td>
                <td>
                  <a href={`/notice/stdlist`}>
                    <button>Genarate</button>
                  </a>
                </td>
              </tr>
            ))}
            </tbody>
        </table>
        </div>
    </div>
    <div className="addnew">
  
  <a href="./NewNotice"><button class="btn btn-outline-dark">Add New Notice</button></a>
  
</div>
    <AdminViewFooter/>
</div>
  );
}