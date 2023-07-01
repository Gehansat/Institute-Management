import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
//import { useNavigate, useParams } from "react-router-dom";
import AdminSideNav from "../CommonComponents/AdminSideNav"; 
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import SubjectsHeader from "./SubjectsHeader";


export default function UpdateSubject() {
  const [subject, setSubject] = useState("");
  


  const navigate = useNavigate();

  //let { SubjectId } = useParams();
  const {state} = useLocation();
    const {SubjectId} = state;
  
    const {prevName} = state;
    const {prevLecturer} = state;
    const {prevID} = state;

    const [ID, setID] = useState(prevID);
  const [Name, setName] = useState(prevName);
  const [Lecturer, setLecturer] = useState(prevLecturer);




 /* useEffect(() => {
    function getSubjects() { 
      axios
        .get(`http://localhost:8070/subject/get/${SubjectId}`)
        .then((res) => {
        
          setSubjects(res.data);
         
          
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getSubjects();
  }, [])*/
//   useEffect(()=>{v
//     function getSubject(){
//         axios.get(`http://localhost:8070/subject/get/${SubjectId}`).then((res)=>{
//           console.log(res.data);
//           setSubject(res.data);
//           console.log(subject);

//         }).catch((err)=>{
//             // alert(err.message)
//             console.log(err.message)
//         })
//     }
//     getSubject();
// },[])

 
function sendData(e) {
    
    e.preventDefault();

  
    const newSubject = {
      ID,
      Name,
      Lecturer
    };
    axios
      .put(`http://localhost:8070/subject/update/${SubjectId}`, newSubject)
      .then(() => {
        alert("Subject Details Updated");
        navigate("/displaySubject");
      })
      .catch((err) => {
        alert(err);
      });

    console.log(newSubject);
  }

  return (
    <div>
      <AdminSideNav/>
      <SubjectsHeader/>
    <div className="container" style={{maxWidth:"700px",height:"100%", marginLeft:"30%",borderRadius:"10px", padding:"10px 40px 40px 40px",border:"1px solid black"}}>
      <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>Update Subject</h4>
      <form style={{display:"flex", flexDirection:"column"}} onSubmit={sendData}>
        <div class="mb-3">
          <label for="ID">Subject ID</label>
          <input
            type="text"
            required
            class="form-control"
            //SubjectId="ID"
            defaultValue={prevID}
            onChange={(e) => {
          
              setID(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="Name">Module Name</label>
          <input
           required
            type="text"
            class="form-control"
            SubjectId="Name"
            placeholder="Enter Module Name"
            defaultValue={prevName} 
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="Lecturer">Lecturer Name</label>
          <input
           required
            type="text"
            class="form-control"
            SubjectId="Lecturer"
            placeholder="Enter Lecturer Name"
            defaultValue={prevLecturer}
            onChange={(e) => {
              
              setLecturer(e.target.value);
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