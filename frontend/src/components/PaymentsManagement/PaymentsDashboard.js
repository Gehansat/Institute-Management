import React from "react";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import PaymentsHeader from "./PaymentsHeader";

export default function PaymentsDashboard(){

    return(
        <div style={{background:"#7ec8e3", height:"100vh"}}>

            <AdminSideNav/>
            <PaymentsHeader/>

            <div className="container">
        
        <div style={{display:"flex", alignItems:"center", flexDirection:"column", marginTop:"40px", marginLeft:"200px"}}>

        <div style={{display:"flex", flexDirection:"column"}}>
            <div style={{display:"flex"}}>
                <div class="card border-primary" style={{width:"18rem", margin:"20px"}}>
                     <div class="card-body">
                         <h5 class="card-title">Registration Payments</h5> 
                         <h6 class="card-subtitle mb-2 text-muted">Pending</h6>
                         <a href="/ShowRegistrationPayments" class="btn btn-primary">View</a>
                     </div>
                </div>

                <div class="card border-primary" style={{width:"18rem",  margin:"20px"}}>
                     <div class="card-body">
                         <h5 class="card-title">Subject Payments</h5> 
                         <h6 class="card-subtitle mb-2 text-muted">Pending</h6>
                         <a href="/ShowSubjectPayments" class="btn btn-primary">View</a>
                     </div>
                </div>
            </div>

            <div style={{display:"flex"}}>
                <div class="card border-primary" style={{width:"18rem",  margin:"20px"}}>
                     <div class="card-body">
                         <h5 class="card-title">Registration Payments</h5> 
                         <h6 class="card-subtitle mb-2 text-muted">Accepted</h6>
                         <a href="/AcceptedRegPayments" class="btn btn-primary">View</a>
                     </div>
            </div>

                <div class="card border-primary" style={{width:"18rem",  margin:"20px"}}>
                     <div class="card-body">
                         <h5 class="card-title">Subject Payments</h5> 
                         <h6 class="card-subtitle mb-2 text-muted">Accepted</h6>
                         <a href="/AcceptedSubPayments" class="btn btn-primary">View</a>
                     </div>
                </div>
            </div>
            
            </div>

        <div class="card border-primary" >
                     <div style={{width:"36rem", display:"flex", flexDirection:"column", alignItems:"center"}} class="card-body">
                         <h5 class="card-title">Annual Income report</h5> 
                         <a href="/PaymentsReport"  class="btn btn-primary">View</a>
                     </div>
                 </div>
        </div>
        
     </div>
     <AdminViewFooter/>
        </div>
        

        
    )

}