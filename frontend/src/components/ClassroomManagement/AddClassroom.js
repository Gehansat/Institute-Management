import React, { useState, useEffect } from 'react';
import axios from "axios";

import AdminSideNav from "../CommonComponents/AdminSideNav"; 
import AdminViewFooter from "../CommonComponents/AdminViewFooter";



export default function AddClassroom(){
    const [classroomid, setClasroomID] = useState("");
    const [module, setModule] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    

    function sendData(e){

        e.preventDefault();
        
        const newClassroom ={
            classroomid,
            module,
            time,
            date
        }

       axios.post("http://localhost:8070/classroom/add",newClassroom).then(()=>{
           alert("Classroom Added")
           
       }).catch((err)=>{
           alert(err)
       })

    }


    return(

        <div>
            <AdminSideNav/>
            <div className="container" style={{maxWidth:"700px",height:"100%", marginLeft:"30%",borderRadius:"10px", padding:"10px 40px 40px 40px",border:"1px solid black"}}>
        <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>Add Classroom</h4>
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={sendData}>
         
<div className="form-group">
  <label for="classroomid">ClassroomID</label>
  <input type="text" className="form-control" id="classroomid"  required placeholder="Enter ClassroomID" 
   onChange={(e)=>{

      setClasroomID(e.target.value);
   }}
  />
  </div>

      
  <div className="form-group">
    <label for="module">Module</label>
    <input type="text" className="form-control" id="module" required placeholder="Enter Module" 
     onChange={(e)=>{

        setModule(e.target.value);
     }}
    />
    </div>

   
    <div className="form-group">
    <label for="time">Time</label>
    <input type="text" className="form-control" id="time" required placeholder="Enter Time"
    onChange={(e)=>{

        setTime(e.target.value);
     }}/>
    </div>

    <div className="form-group">
    
    <label for="date">Date</label>
    <input type="text" className="form-control" id="date"  required placeholder="Enter Date"
    onChange={(e)=>{

        setDate(e.target.value);
     }}/>

<button type="submit" className="btn-btn-primary">Submit</button>
    </div>

  
  
</form>  <AdminViewFooter/>
        </div>
        
</div>


    )
}