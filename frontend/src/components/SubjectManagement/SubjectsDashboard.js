import React from "react";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import SubjectsHeader from "./SubjectsHeader";


export default function SubjectsDashboard(){

    return(
        <div style={{background:"#DFF1F7", height:"100vh"}}>

            <AdminSideNav/>
            <SubjectsHeader/>
            

            <div className="container">
        
        <div style={{display:"flex", alignItems:"center", flexDirection:"column", marginTop:"40px", marginLeft:"200px"}}>

        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex"}}>
                <div class="card border-primary" style={{width:"18rem", margin:"20px"}}>
                     <div class="card-body">
                         <h5 class="card-title">Module details</h5> 
                         <a href="/displaySubject" class="btn btn-primary">View</a>
                     </div>
                </div>

                <div class="card border-primary" style={{width:"18rem",  margin:"20px"}}>
                     <div class="card-body">
                         <h5 class="card-title">Lecture Materials</h5> 
                         <a href="/displayMaterial" class="btn btn-primary">View</a>
                     </div>
                </div>
            </div>

        </div>
        
     </div>
     <AdminViewFooter/>
        </div>
        </div>
        

        
    )

}