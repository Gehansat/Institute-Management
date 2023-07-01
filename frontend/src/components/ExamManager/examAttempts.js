import axios from "axios";
import React, { useState, useEffect } from "react";
import { renderMatches } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import Calender from "./side-cal";
import Dash from "./dashbaord";

export default function AllAttempts() {
  const [Attempts, setAttempts] = useState([]);

  useEffect(() => {
    function getAttempts() {
      axios
        .get("http://localhost:8070/attempts/geteAttempt")
        .then((res) => {
          setAttempts(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAttempts();
  }, []);

  return (
    <div className="container" id="all">
      <div className="allExams">
        <div className="listE">
        <h1>All Exams</h1>
        </div>
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
            {Attempts.map((item) => (
              <tr>
                <td>{item.examname}</td>
                <td>{item.SID}</td>
                <td>{item.batch}</td>
                <a download={item.name} href={item.uploadAnswer}>
                  Download
                </a>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
