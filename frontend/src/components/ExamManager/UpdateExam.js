import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FileBase64 from "react-file-base64";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "./nav";

export default function UpdateStudent() {
  const [students, setStudents] = useState({});
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [title, setTitle] = useState("");
  const [status, setstatus] = useState("");
  const [uploadPaper, setuploadPaper] = useState("");

  const navigate = useNavigate();

  let { id } = useParams();

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

  useEffect(() => {
    console.log(students);
    if (students?.name) {
      setName(students.name);
    }
    if (students?.duration) {
      setDuration(students.duration);
    }
    if (students?.title) {
      setTitle(students.title);
    }
    if (students?.status) {
      setstatus(students.status);
    }
    if (students?.uploadPaper) {
      setuploadPaper(students.uploadPaper);
    }
  }, [students]);

  function sendData(e) {
    e.preventDefault();
    const newExam = {
      name,
      duration,
      title,
      status,
      uploadPaper,
    };
    axios
      .put(`http://localhost:8070/exams/update/${id}`, newExam)
      .then(() => {
        alert("Exam is updated");
        navigate("/allExams");
      })
      .catch((err) => {
        alert(err);
      });

    console.log(newExam);
  }

  return (
    <div>

      <AdminSideNav/>
      <Head/>

      <div className="container" id="createExam">

        <h3>
          <br/>Update Exam{" "}
        </h3>

        <form onSubmit={sendData} className="exam">

          <hr/>

          <div class="section">
            <div className="section-head">
              <h6> Exam Updation</h6>
            </div>
            <div class ="head">
              <label for="name">Name of Test</label>
            </div>
            <div class ="input">
              <input
                type="text"
                class="form-control"
                id="name"
                Value={students.name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
          </div>

          <div class="section">
            <div className="section-head"></div>
            <div class ="head">
              <label for="age">Duration of Exam</label>
            </div>
            <div class ="input">
              <input
                type="text"
                class="form-control"
                id="age"
                placeholder="Enter Duration of the Exam"
                Value={students.duration}
                onChange={(e) => {
                  setDuration(e.target.value);
                }}
              />
            </div>
          </div>

          <div class="section">
            <div className="section-head"></div>
            <div class ="head">
              <label for="age">Topic Tested</label>
            </div>
            <div class ="input">
              <input
                type="text"
                class="form-control"
                id="gender"
                placeholder="Enter Topic Tested on"
                Value={students.title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
          </div>

          <div class="section">
            <div className="section-head"></div>
            <div class ="head">
              <label for="gender">Status   </label>
             
            </div>
            <div class ="input">
              <select
                    id="status"
                    placeholder="Enter Status of Exam"
                    class="form-control"
                    onChange={(e) => {
                      setstatus(e.target.value);
                    }}
                  >
                    <option value="none" ></option>
                    <option value="active" >Active</option>
                    <option value="deactive">Deactive</option>
              </select>
              <label>{students.status}</label>
            </div>
          </div>

          <div class="section">
            <div className="section-head"></div>
            <div class ="head">
              <label for="gender">Existing paper   </label>
            </div>
            <div class ="input">
              <button id="downBtn">
                <a download={name} href={students.uploadPaper}>
                  Download
                </a>
              </button>
            </div>
          </div>

          <div class="section">
            <div className="section-head"></div>
            <div class ="head">
              <label for="depositSlip" class="form-label">
                Upload Paper{" "}
              </label>
            </div>
            <div class ="input">
              <FileBase64
              multiple={false}
              onDone={({ base64 }) => setuploadPaper(base64)}
              />
            </div>
          </div>

          <br/>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
