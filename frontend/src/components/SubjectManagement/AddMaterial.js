import React,{useState} from "react"
import axios from "axios"; 
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import SubjectsHeader from "./SubjectsHeader";

export default function AddMaterial(){

    const [LecMaterialID, setID] = useState("");
    const [SupportedLinks, setLink] = useState("");
    const [Message, setMessage] = useState("");
    const [LectureMaterial, setMaterial] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newSubject = {

            LecMaterialID,
            SupportedLinks,
            Message,
            LectureMaterial

           }

        axios.post("http://localhost:8070/material/addMaterial",newSubject).then(() => {

            alert("Lecture Added")
        }).catch((err)=> {
            alert(err)
        })
           
        
    }

    return(
       <div>
            <AdminSideNav/>
        <SubjectsHeader/>
        <div className="container" style={{maxWidth:"700px",height:"100%", marginLeft:"30%",borderRadius:"10px", padding:"10px 40px 40px 40px",border:"1px solid black"}}>
          <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>New Material</h4>
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={sendData}>
  <div class="mb-3">
    <label for=" LecMaterialID" >Lecture No.</label>
    <input type="" class="form-control" id="LecMaterialID" placeholder="Enter Lecture No" required
    onChange={(e)=> {
        setID(e.target.value);
    }}/>
  </div>

  <div class="mb-3">
    <label for="SupportedLinks" >Supported Material</label>
    <input type="text" class="form-control" id="SupportedLinks" placeholder="Enter Supported Material link" required
     onChange={(e)=> {
        setLink(e.target.value);
    }}/>
  </div>

  <div class="mb-3">
    <label for=" Message" >Message</label>
    <input type="text" class="form-control" id="Message" placeholder="Enter Message" required
    onChange={(e)=> {
        setMessage(e.target.value);
    }}/>
  </div>
  
  <div class="mb-3">
    <label for="LectureMaterial" >Lecture Material</label>
    <input type="text" class="form-control" id="LectureMaterial" placeholder="Paste one-drive link" required
    onChange={(e)=> {
        setMaterial(e.target.value);
    }}/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
<AdminViewFooter/>
</div>
    )
}