// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./notice.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import AdminSideNav from "../CommonComponents/AdminSideNav";
// import AdminViewFooter from "../CommonComponents/AdminViewFooter";
// import NoticeBoardHeader from "./NoticeBoardHeader";
// import UpdateNotice from "./updateNotice";
// import jsPDF from "jspdf";
// import ReactToPrint, { PrintContextConsumer } from 'react-to-print';




// export default function Stdlist() {
//   const [readstudents, setList] = useState([]);
//   const Navigate=useNavigate()






//   useEffect(() => {
//     function getList() {
//       axios
//         .get("http://localhost:8070/notice/stdlist")
//         .then((res) => {
//           setList(res.data);
//         })
//         .catch((err) => {
//           alert(err.message);
//         });
//     }
//     getList();
//   }, []);


//   const UpdateNotice=(noticeId)=>{
//     console.log("erroe")
//      Navigate('updateNotice',{ state: { id: noticeId } }
//      )
    

//   }
//   //jspdfgen

//   const jsPdfGen=()=>{

//     var doc =new jsPDF('p','pt');

//     doc.text(20,20,'Student Name               Student Id')
//     doc.text(20,40,'Pramuditha Jayawardhana	    S001')
//     doc.text(20,60,'Pramuditha Jayawardhana	    S002')
//     doc.text(20,80,'Jayawardhana	              S003')
  
//     doc.save("gen.pdf")
//   }


//   return (
      
//     <div>
//     <AdminSideNav/>
//     <NoticeBoardHeader/>
    
    
//     <div style={{display: "flex",  justifyContent:"flex-end", margin:"1rem"}}>
    
//     </div>
//     <div className="container">
        
//         <div style={{padding:"5px 0px 5px 0px",width:"150vh"}}>
//         <table class="table-striped" id="notice">
//         <thead>
//             <tr>
//             <th scope="col">Student Id</th>
//             <th scope="col">Student Name</th>
             
              
//             </tr>
//             </thead>

//             <tbody>
//             {readstudents.map((item) => (
//               <tr>
//                 <td>{item.StdName}</td>
//                 <td>{item.StdId}</td>
//               </tr>
//             ))}
//             </tbody>
//         </table>
//                 <br/><br/>
//                 <button onClick={jsPdfGen} class="btn btn-info">Generate a Report</button>
//                 <br/><br/>
//         </div>
//     </div>
 
    
//     <AdminViewFooter/>
// </div>
//   );
// }