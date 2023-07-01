import React, { useState, useEffect } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";
import "./header.css";
import { useNavigate, useParams } from "react-router-dom";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "./nav";

export default function AddStudent() {
  let { id } = useParams();

  const [students, setStudents] = useState({});




  useEffect(() => {
    function getStudents() {
      axios
        .get(`http://localhost:8070/exams/get/${id}`)
        .then((res) => {
          console.log(res);
          setStudents(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getStudents();

  }, []);

  const [batch, setbatch] = useState("");
  const [SID, setSID] = useState("");
  const [uploadAnswer, setuploadAnswer] = useState("");

  function sendData(e) {

    e.preventDefault();

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const attemptDate = year + "-" + month + "-" + day
    const hour = date.getHours();
    const min = date.getMinutes();
    const milli = date.getMilliseconds();
    const attemptTime = hour + ":" + min + ":" + milli;
    const marks = 0;
    const grade = "Not Graded";

    const examName = students.name;
    const newStudent = {
      examName,
      SID,
      batch,
      uploadAnswer,
      attemptDate,
      attemptTime,
      marks,
      grade,
    };
    console.log(newStudent);

    axios
      .post("http://localhost:8070/attempts/add", newStudent)
      .then(() => {
        alert("Exam Attempted Successfully");
        console.log(newStudent);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <div>

      <AdminSideNav />
      <Head />

      <div className="container" id="createExam">

        <h3>
          <br />Attempt Exam{" "}
        </h3>

        <div className="exam">

          <hr />

          <div class="section">
            <div className="section-head">
              <h6> Exam Details</h6>
            </div>
            <div class="head">
              <label for="name">Name of Test</label>
            </div>
            <div class="input">
              <label for="name" className="gen">{students.name}</label>
            </div>
          </div>

          <div class="section">
            <div className="section-head"></div>
            <div class="head">
              <label for="age">Duration of Exam</label>
            </div>
            <div class="input">
              <label for="name" className="gen">{students.duration}</label>
            </div>
          </div>

          <div class="section">
            <div className="section-head"></div>
            <div class="head">
              <label for="age">Topic Tested</label>
            </div>
            <div class="input">
              <label for="name" className="gen">{students.title}</label>
            </div>
          </div>

          <div class="section">
            <div className="section-head"></div>
            <div class="head">
              <label for="age">Deadline Date</label>
            </div>
            <div class="input">
              <label for="name" className="gen">{students.deadline}</label>
            </div>
          </div>
          <div class="section">
            <div className="section-head"></div>
            <div class="head">
              <label for="age">Deadline Time</label>
            </div>
            <div class="input">
              <label for="name" className="gen">{students.deadlineTime}</label>
            </div>
          </div>
          <hr />
          <div class="section">
            <div className="section-head"><h6>Paper</h6></div>

            <div class="input" id="paper">
              <img src={students.uploadPaper} />
            </div>
            <div className="input">
              <button id="downBtn">
                <a download={students.name} href={students.uploadPaper}>
                  Download
                </a>
              </button>
            </div>
          </div>
          <hr />



          {/* Form to attempt EXAM */}

          <h3>
            <br />Submit Attempt{" "}
          </h3>

          <form onSubmit={sendData} className="exam">

            <div class="section">
              <div className="section-head"></div>
              <div class="head">
                <label for="name">Student ID</label>
              </div>
              <div class="input">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  pattern="[A-Z]{1}[0-9]{3}"
                  placeholder="Enter Student ID"
                  onChange={(e) => {
                    setSID(e.target.value);
                  }}
                />
              </div>
            </div>

            <div class="section">
              <div className="section-head"></div>
              <div class="head">
                <label for="name">Batch ID</label>
              </div>
              <div class="input">
                <input
                  type="text"
                  class="form-control"
                  id="BID"
                  pattern="[A-Z]{1}[0-9]{3}"
                  placeholder="Enter Batch ID"
                  onChange={(e) => {
                    setbatch(e.target.value);
                  }}
                />
              </div>
            </div>

            <div class="section">
              <div className="section-head"></div>
              <div class="head">
                <label for="depositSlip" class="form-label">
                  Upload Answer{" "}
                </label>
              </div>
              <div class="input">
                <FileBase64
                  multiple={false}
                  onDone={({ base64 }) => setuploadAnswer(base64)}
                />
              </div>
            </div>
            <br />

            <button type="submit" class="btn btn-primary" id="exam">
              Submit
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
