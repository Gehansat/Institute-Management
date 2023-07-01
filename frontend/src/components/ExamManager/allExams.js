import axios from "axios";
import React, { useState, useEffect } from "react";
import { renderMatches } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import Calender from "./side-cal";
import Dash from "./dashbaord";

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

  return (
    <div className="container" id="all">
      <div className="allExams">
        <br />
        <h1>All Exams</h1>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name of Exam</th>
              <th scope="col">Duration</th>
              <th scope="col">tested Topic</th>
              <th scope="col">Remove</th>
              <th scope="col">Update</th>
            </tr>
          </thead>
          <tbody>
            {students.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.gender}</td>
                <a download={item.name} href={item.uploadPaper}>
                  Download
                </a>
                <td>
                  <a href={`/takeExam/${item.name}`}>
                    <button>Take Test</button>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
