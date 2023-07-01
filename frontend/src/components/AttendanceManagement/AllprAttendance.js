
import { useReactToPrint } from "react-to-print";
import React, { useRef,useState, useEffect } from 'react';
import axios from "axios";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";

const AllprAttendance= () => {  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


 // export default function AllprAttendance() {
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


  return (<>
  <div>
  <AdminSideNav/>
  <div className="container" id="all">
  <div className="allExams"> 

  <div class="print_section"> 
  <div class="col-md-12">
  <div class="float_start">
  <div ref={componentRef} className="card">  
  <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}> Attendance Report</h4>
  <div style={{padding: "5px 0px 5px opx"}}>
  <table class="table table-striped table-dark">
      <thead>
          <tr>
              <th scope="col">StudentID</th>
              <th scope="col">Module</th>
              <th scope="col">Batch</th>
              <th scope="col">Date</th>
             
             
          </tr>
      </thead>
      <tbody>
          {ViewAttendance.map((val) => (
              <tr class="bg-primary">
                   <td class="bg-primary">{val.StudentID}</td>
                  <td class="bg-primary">{val.Module}</td>
                  <td class="bg-primary">{val.Batch}</td>
                  <td class="bg-primary">{val.Date}</td>
                  
                 
       

               
              </tr>
          ))}
      </tbody>
  </table>
  </div>
  </div>
  </div>
  <button onClick={handlePrint} className="print__button">  Print </button> 
       
  </div> 
  </div>
  </div>
  <AdminViewFooter/>
 
  
  </div>
  
  </div></>
  )
}
export default AllprAttendance