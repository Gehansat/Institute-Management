import React, { useState, useEffect } from 'react';
import axios from "axios";
import UserViewHeader from "../CommonComponents/UserViewHeader";
import UserViewFooter from "../CommonComponents/UserViewFooter";


export default function AddAttendace() {

    const [StudentID, setStudentID] = useState("");
    const [Module, setModule] = useState("");
    const [Batch, setBatch] = useState("");
    const [Date, setDate] = useState("");
    

    function sendData(e){

        e.preventDefault();
        
        const newAttendance ={
            StudentID,
            Module,
            Batch,
            Date
        }

       axios.post("http://localhost:8070/attendance/add",newAttendance).then(()=>{
           alert("Attendance Added")
           
       }).catch((err)=>{
           alert(err)
       })

    }


    return(
       
        <div>
             <UserViewHeader/>
          
            <div className="container" style={{maxWidth:"700px",height:"100%", marginLeft:"30%",borderRadius:"10px", padding:"10px 40px 40px 40px",border:"1px solid black"}}>
        <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>Attendance</h4>
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={sendData}>
         
            
  <div className="at-form">
    <label for="StudentID">StudentID</label>
    <input type="text" className="form-control" id="StudentID" required placeholder="Enter StudentID" 
     onChange={(e)=>{

        setStudentID(e.target.value);
     }}
    />
    </div>

   
    <div className="at-form">
    <label for="Module">Module</label>
    <input type="text" className="form-control" id="Module" required placeholder="Enter Module"
    onChange={(e)=>{

        setModule(e.target.value);
     }}/>
    </div>

    <div className="at-form">
    <label for="Batch">Batch</label>
    <input type="text" className="form-control" id="Batch" required placeholder="Enter Batch"
    onChange={(e)=>{

        setBatch(e.target.value);
     }}/>

<div className="at-form">
    <label for="Date">Date</label>
    <input type="text" className="form-control" id="Date" required placeholder="Enter Date"
    onChange={(e)=>{

        setDate(e.target.value);
     }}/>
    </div>

    

<button type="submit" className="atbotton">Submit</button>
    </div>

  
  
</form>  
<UserViewFooter/>
        </div>
       
</div>


    )
}