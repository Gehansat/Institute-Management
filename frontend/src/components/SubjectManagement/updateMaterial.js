import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
//import { useNavigate, useParams } from "react-router-dom";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import SubjectsHeader from "./SubjectsHeader";


export default function UpdateMaterial() {
  //const [subject, setSubject] = useState("");
  


  const navigate = useNavigate();

  //let { SubjectId } = useParams();
  const {state} = useLocation();
    const {id} = state;
  
    const {prevId} = state;
    const {prevLink} = state;
    const {prevMsg} = state;
    const {prevMat} = state;

    const [ LecMaterialID, setid] = useState(prevId);
  const [SupportedLinks, setSupLink] = useState(prevLink);
  const [Message,  setmsg] = useState(prevMsg);
  const [LectureMaterial,  setMat] = useState(prevMat);


function sendData(e) {
    
    e.preventDefault();

  
    const newMaterial = {
        LecMaterialID,
        SupportedLinks,
        Message,
        LectureMaterial
    };
    axios
      .put(`http://localhost:8070/material/update/${id}`, newMaterial)
      .then(() => {
        alert(" Updated Successfully!");
        navigate("/displayMaterial");
      })
      .catch((err) => {
        alert(err);
      });

    console.log(newMaterial);
  }

  return (
    <div>
       <AdminSideNav/>
       <SubjectsHeader/>
       <div className="container" style={{maxWidth:"700px",height:"100%", marginLeft:"30%",borderRadius:"10px", padding:"10px 40px 40px 40px",border:"1px solid black"}}>
      <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>Update Material</h4>
      <form style={{display:"flex", flexDirection:"column"}} onSubmit={sendData}>
        <div class="mb-3">
          <label for="ID">Lecture No.</label>
          <input
           required
            type="text"
            placeholder="Enter Lecture No"
            class="form-control"
            defaultValue={prevId}
            onChange={(e) => {
          
                setid(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="Name">Supported Material</label>
          <input
           required
            type="text"
            class="form-control"
            SubjectId="Name"
            placeholder="Enter Supported Material link"
            defaultValue={prevLink} 
            onChange={(e) => {
                setSupLink(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="Lecturer">Message</label>
          <input
           required
            type="text"
            class="form-control"
            SubjectId="Lecturer"
            placeholder="Enter Message"
            defaultValue={prevMsg}
            onChange={(e) => {
              
                setmsg(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="Name">Lecture Material</label>
          <input
            required
            type="text"
            class="form-control"
            SubjectId="Name"
            placeholder="Paste one-drive link"
            defaultValue={prevMat} 
            onChange={(e) => {
                setMat(e.target.value);
            }}
          />
        </div>


        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
    <AdminViewFooter/>
    </div>
  );
}