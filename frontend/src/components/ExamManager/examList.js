import axios from "axios";
import React, { useState, useEffect } from "react";
import { renderMatches } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.css";
import Calender from "./side-cal";
import Dash from "./dashbaord";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "./nav";

export default function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    function getStudents() {
      axios
        .get("http://localhost:8070/exams/studentE")
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
              <th scope="col">Name of Exam</th>
              <th scope="col">Duration</th>
              <th scope="col">Topic tested </th>
              <th scope="col">Deadline </th>
            </tr>
          </thead>
          <tbody>
            {students.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.duration}</td>
                <td>{item.title}</td>
                <td>{item.deadline}</td>
                <td>
                  <a href={`/takeExam/${item._id}`}>
                    <button>Take Test</button>
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
