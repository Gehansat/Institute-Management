import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Calender from "./side-cal";
import "./style.css";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "../ExamManager/nav";

export default function Header() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    function getcourses() {
      axios
        .get("http://localhost:8070/course/getcourse")
        .then((res) => {
          setCourses(res.data);
          console.log(courses);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getcourses();
  }, []);

  return (

    <nav>
      <AdminSideNav />
      <Head />
      <div className="container" id="all">
        <div className="container" id="dash">
          <div className="display-Head">Explore your exams today. </div>
          <div className="display-options">
            <div class="cardExam">
              <p class="title">Attempt</p>
              <p>Attempt an Exam </p>
              <p>
                <Link to="/studentElist">
                  <button>Explore</button>
                </Link>
              </p>
            </div>
            <div class="cardExam">
              <p class="title">View</p>
              <p>View the Results </p>
              <p>
                <Link to="/resultsS">
                  <button>Explore</button>
                </Link>
              </p>
            </div>

            <div class="cardExam">
              <p class="title">Discussion</p>
              <p>Discussion<br /> forum</p>
              <p>
                <Link to="/allFD">
                  <button>Explore</button>
                </Link>
              </p>
            </div>

            <div class="cardExam">
              <p class="title">Report</p>
              <p>Review Exams</p>
              <p>
                <Link to="/reportS">
                  <button>Explore</button>
                </Link>
              </p>
            </div>

          </div>

          <div className="allExams">
            <br />
            <h3>All Courses</h3>
            <table class="tableExam">
              <thead>
                <tr>
                  <th scope="col">Name of Module</th>
                  <th scope="col">Module Code</th>
                  <th scope="col">Lecturer</th>
                  <th scope="col">Credits</th>
                </tr>
              </thead>
              <tbody>
                {courses.map((item) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.moduleCode}</td>
                    <td>{item.lecturer}</td>
                    <td>{item.creduts}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <Calender />
      </div>
    </nav>
  );
}
