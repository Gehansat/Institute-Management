import React, { useState, useEffect } from 'react';
import axios from "axios";
import { NavLink} from 'react-router-dom';
import AdminSideNav from "../CommonComponents/AdminSideNav"; 
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import '../PaymentsManagement/paymentStyles.css'
 export default function ViewAttendance() {

    
    const [ViewAttendance, setViewAttendance] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:8070/attendance/").then((response)=>{
               console.log(response)
                setViewAttendance(response.data)
           })
           .catch(()=>{
               console.log("ERR");
           } );
           }

   , []);


   const deleteAttendance = (id) =>{
    axios.delete(`http://localhost:8070/attendance/delete/${id}`).then(()=>{
        setViewAttendance(ViewAttendance.filter((val)=>{
            return val._id !== id;
        }))
    });
};


   return(
       <div>
           <AdminSideNav/>

       <div className="container" id="all">
       <div className="allExams">      
      
       <h4 style={{textAlign: "center", margin:"5px 0px 5px 0px"}}>All Attendance</h4>      
       <div style={{padding: "5px 0px 5px opx"}}>       
                  
                 
                   <table class="table table-striped table-dark paytable">
                       <thead>
                           <tr>
                               <th scope="col">StudentID</th>
                               <th scope="col">Module</th>
                               <th scope="col">Batch</th>
                               <th scope="col">Date</th>
                               <th scope="col">Option</th>
                              
                           </tr>
                       </thead>
                       <tbody>
                           {ViewAttendance.map((val) => (
                               <tr class="bg-primary">
                                    <td class="bg-primary">{val.StudentID}</td>
                                   <td class="bg-primary">{val.Module}</td>
                                   <td class="bg-primary">{val.Batch}</td>
                                   <td class="bg-primary">{val.Date}</td>
                                   
                                    < NavLink to="/new"  className="btn btn-primary">View the Attendance</NavLink>
                                    <button   className="btn btn-danger"  onClick={() => deleteAttendance(val._id)}>Delete</button>
                        

                                
                               </tr>
                           ))}
                       </tbody>
                   </table>
               </div>
              <AdminViewFooter/>
           </div></div>
           </div>
   )


















 }