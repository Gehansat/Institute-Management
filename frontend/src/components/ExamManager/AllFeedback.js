import axios from "axios";
import React, { useState, useEffect,useRef } from "react";
import "./style.css";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "./nav";

export default function AllFeedback() {
  const [feedBack, setFeedback] = useState([]);
  const [feedBackR, setFeedbackR] = useState([]);


  useEffect(() => {
    function getFD() {
      axios
        .get("http://localhost:8070/fd/getfdR")
        .then((res) => {
          setFeedback(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    function getFDR() {
      axios
        .get("http://localhost:8070/fd/getfduR")
        .then((res) => {
          setFeedbackR(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    
    getFDR();
    getFD();

  }, []);
  
  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:8070/fd/delete/${id}`)
      .then((res) => {
        alert(`deleted successfully`);
        window.location.reload(false);
      })
      .catch((err) => {
        alert(err);
      });
  };
  

  return (
    <div>
        <AdminSideNav/>
      <Head/>
      
    <div className="container" id="all" >
      <div className="allExams">
      <div className="listE">
        <h1>All Exams</h1></div>
        <a href={`/addFD`}>
            <button id="redirect">Add New Discussion</button>
          </a>

        <h4 id="fd">Resolved</h4>
        <table class="table" id="tExam">
          <thead>
            <tr>
              <th scope="col">Topic of Discussioon</th>
              <th scope="col">Question</th>
              <th scope="col">Lecturer</th>
              <th scope="col">Answer</th>
            </tr>
          </thead>
          <tbody>
            {feedBack.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.lecturer}</td>
                <td>{item.answer}</td>
                <td>
                  <button onClick={() => deleteUser(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <br/>
        <h4 id="fd">Unresolved</h4>
        <table class="table" id="tExam">
          <thead>
            <tr>
              <th scope="col">Topic of Discussioon</th>
              <th scope="col">Question</th>
              <th scope="col">Lecturer</th>
              <th scope="col">Date requested</th>
            </tr>
          </thead>
          <tbody>
            {feedBackR.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.lecturer}</td>
                <td>{item.DateR}</td>
                <td>
                  <button onClick={() => deleteUser(item._id)}>Delete</button>
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
