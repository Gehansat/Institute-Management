import axios from "axios";
import React, { useState, useEffect } from "react";
import "./style.css";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "./nav";

export default function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/exams/")
        .then((res) => {
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();
  }, []);

  const deleteUser = (id) => {
    axios
      .delete(`http://localhost:8070/exams/delete/${id}`)
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
    
    <div className="container" id="all">
      <div className="allExams">
      <div className="listE">
        <h1>All Exams</h1></div>
        <a href={`/addExam`}>
            <button id="redirect">Add New Exam</button>
          </a>
        <table class="table" id="tExam">
          <thead>
            <tr>
              <th scope="col">Name of Exam</th>
              <th scope="col">Duration</th>
              <th scope="col">Tested Topic</th>
              <th scope="col">Status</th>
              <th scope="col">Deadline</th>
              <th scope="col">Paper</th>
              <th scope="col">Remove</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.duration}</td>
                <td>{item.title}</td>
                <td>{item.status}</td>
                <td>{item.deadline}</td>
                <td>
                  <a download={item.name} href={item.uploadPaper}>
                    <button id="down">Download</button>
                  </a>
                </td>
                <td>
                  <button onClick={() => deleteUser(item._id)}>Delete</button>
                </td>
                <td>
                  <a href={`/UpdateExam/${item._id}`}>
                    <button>Update</button>
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
