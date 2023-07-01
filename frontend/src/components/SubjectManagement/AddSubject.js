import React,{useState} from "react"
import axios from "axios";
import AdminSideNav from "../CommonComponents/AdminSideNav"; 
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import SubjectsHeader from "./SubjectsHeader";


export default function AddSubject(){

    const [ID, setID] = useState("");
    const [Name, setName] = useState("");
    const [Lecturer, setLecturer] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newSubject = {

            ID,
            Name,
            Lecturer

           }

        axios.post("http://localhost:8070/subject/addS",newSubject).then(() => {

            alert("Subject Added")
        }).catch((err)=> {
            alert(err)
        })
           
        
    }

    return(
        <div>
             <AdminSideNav/>
             <SubjectsHeader/>
            
        <div className="container" style={{maxWidth:"700px",height:"100%", marginLeft:"30%",borderRadius:"10px", padding:"10px 40px 40px 40px",border:"1px solid black"}}>
        <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>Create New Subject</h4>
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={sendData}>
  <div class="mb-3">
    <label for="name" >Subject Id</label>
    <input type="" class="form-control" id="ID" placeholder="Enter Subject Id" required
    onChange={(e)=> {
        setID(e.target.value);
    }}/>
  </div>

  <div class="mb-3">
    <label for="name" >Subject Name</label>
    <input type="text" class="form-control" id="Name" placeholder="Enter Subject Name" required
     onChange={(e)=> {
        setName(e.target.value);
    }}/>
  </div>

  <div class="mb-3">
    <label for="name" >Lecturer Name</label>
    <input type="text" class="form-control" id="Lecturer" placeholder="Enter Lecturer Name" required
    onChange={(e)=> {
        setLecturer(e.target.value);
    }}/>
  </div>

  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
<AdminViewFooter/>
</div>

    )
}