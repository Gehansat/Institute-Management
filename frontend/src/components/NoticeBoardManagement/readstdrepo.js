
import { useReactToPrint } from "react-to-print";
import React, { useRef,useState, useEffect } from 'react';
import axios from "axios";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import NoticeBoardHeader from "./NoticeBoardHeader";

const Stdlist= () => {  
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });


 // export default function Stdlist() {
    const [readstudents, setList] = useState([]);
    useEffect(() => {
        function getList() {
          axios
            .get("http://localhost:8070/notice/stdlist")
            .then((res) => {
              setList(res.data);
            })
            .catch((err) => {
              alert(err.message);
            });
        }
        getList();
      }, []);

  return (<>
  <div>
  <AdminSideNav/>
    <NoticeBoardHeader/>
    
    <div className="container" id="all">
  <div className="allExams"> 

  <div class="print_section"> 
  <div class="col-md-9">
  <div class="float_start">
  <div ref={componentRef} className="card">  
  <h4 style={{textAlign: "center", margin:"10px 5px 40px -80px"}}> Read Student List</h4>
  <div style={{padding: "5px 0px 5px opx"}}>
  <table class="table table-striped table-light">
      <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">Student Id</th>
             
             
          </tr>
      </thead>
      <tbody>
          {readstudents.map((item) => (
              <tr class="bg-primary">
                    <td>{item.StdName}</td>
                    <td>{item.StdId}</td>
                  
                 
       

               
              </tr>
          ))}
      </tbody>
  </table>
  </div>
  </div>
  </div>
  <button onClick={handlePrint} className="print__button"style={{textAlign: "center", margin:"10px"}}> Download List </button> 
       
  </div> 
  </div>
  </div>
  <AdminViewFooter/>
 
  
  </div>
  
  </div></>
  )
}
export default Stdlist;