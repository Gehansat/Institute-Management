import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "./nav";

export default function AllStudents() {
  const [eAttempts, seteAttempts] = useState([]);

  let  id  = "B001";

  useEffect(() => {
    function getAttempts() {
      console.log(id);
      axios
        .get(`http://localhost:8070/attempts/getresultsS/${id}`)
        .then((res) => {
          seteAttempts(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAttempts();
  }, []);

  return (
    <div>
      <AdminSideNav/>
      <Head/>
    
    <div className="container" id="all">
      <div className="allExams">
      <div className="listE">
        <h1>All Exams</h1></div>
        <table class="table" id="tExam">
          <thead>
            <tr>
              <th scope="col">Exam</th>
              <th scope="col">Student ID</th>
              <th scope="col">Batch</th>
              <th scope="col">Date Submitted</th>
              <th scope="col">Grade</th>
            </tr>
          </thead>
          <tbody>
            {eAttempts.map((item) => (
              <tr>
                <td>{item.examName}</td>
                <td>{item.SID}</td>
                <td>{item.batch}</td>
                <td>{item.attemptDate}</td>
                <td>{item.grade}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
