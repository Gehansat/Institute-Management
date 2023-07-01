import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "./nav";

export default function AllFeedback() {
  const [feedBack, setFeedback] = useState([]);

  useEffect(() => {
    function getFD() {
      axios
        .get("http://localhost:8070/fd/getfduR")
        .then((res) => {
          setFeedback(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getFD();
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
              <th scope="col">Topic of Discussioon</th>
              <th scope="col">Question</th>
              <th scope="col">Lecturer</th>
              <th scope="col">Status</th>
              <th scope="col">Date requested</th>
              <th scope="col">Answer</th>
            </tr>
          </thead>
          <tbody>
            {feedBack.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.lecturer}</td>
                <td>{item.status}</td>
                <td>{item.DateR}</td>
                <td>
                  <a href={`/answer/${item._id}`}>
                    <button>Answer</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}
