import React, { useState } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";
import "./header.css";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "./nav";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [batch, setbatch] = useState("");
  const [lecturer, setlecturer] = useState("");
  const [deadline, setdeadline] = useState("");
  const [deadlineTime, setdeadlineT] = useState("");
  const [uploadPaper, setuploadPaper] = useState("");

  function sendData(e) {
    e.preventDefault();
    const newExam = {
      name,
      duration,
      title,
      status,
      batch,
      lecturer,
      deadline,
      deadlineTime,
      uploadPaper,
    };
    axios
      .post("http://localhost:8070/exams/add", newExam)
      .then(() => {
        alert("Exam is Added");
        console.log(newExam);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <div>
      <AdminSideNav/>
      <Head/>
    
    <div className="container" id="createExam">
      
      <h3>
        <br />
        Create a New Exam{" "}
      </h3>
      <form onSubmit={sendData} className="exam">
        <hr/>
        <div class="section">
          <div className="section-head"><h6> Exam Creation</h6></div>
          <div class ="head">
          <label for="name">Name of Exam</label>
          </div>
          <div class ="input">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Name of Exam"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          </div>
        </div>
        <div class="section">
          <div className="section-head"></div>
          <div class ="head">
            <label for="gender">Lecturer ID</label>
            </div>
            <div class ="input">
          <input
            type="text"
            class="form-control"
            id="gender"
            pattern="[A-Z]{1}[0-9]{3}"
            placeholder="Enter Lecturer ID"
            onChange={(e) => {
              setlecturer(e.target.value);
            }}
          />
          </div>
        </div>
       
       <hr/>
        <div class="section">
          <div className="section-head"><h6>About Exam</h6></div>
          <div class ="head">
          <label for="duration">Duration (mins)</label>
          </div>
          <div class ="input">
            <input
            type="number"
            class="form-control"
            id="duration"
            placeholder="Enter Duration of the Exam in minutes"
            onChange={(e) => {
              setDuration(e.target.value);
            }}
          />
        </div>
        </div>
        <div class="section">
          <div className="section-head"></div>
          <div class ="head">
            <label for="title">Topic Tested</label>
          </div>
          <div class ="input">
            <input
              type="text"
              class="form-control"
              id="title"
              placeholder="Enter Topic Tested on"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
        </div>
        <div class="section">
          <div className="section-head"></div>
          <div class ="head">
          <label for="gender">Batch</label>
          </div>
          <div class ="input">
          <input
            type="text"
            class="form-control"
            id="gender"
            pattern="[A-Z]{1}[0-9]{3}"
            placeholder="Enter Batch ID"
            onChange={(e) => {
              setbatch(e.target.value);
            }}
          />
          </div>
        </div>
        <hr/>
        <div class="section">
          <div className="section-head"><h6> Exam Status</h6></div>
          <div class ="head">
            <label for="gender">Status</label>
            </div>
          <div class ="input">
              <select
                id="status"
                class="form-control"
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option value="active" selected>Active</option>
                <option value="deactive">Deactive</option>
              </select>
          </div>
        </div>
        <div class="section">
          <div className="section-head"></div>
          <div class ="head">
            <label for="gender">Deadline</label>
            </div>
          <div class ="input">
          <input
            type="date"
            class="form-control"
            id="dd"
            placeholder="Enter Deadline"
            onChange={(e) => {
              setdeadline(e.target.value);
            }}
          />
          <input
            type="time"
            class="form-control"
            id="dd"
            placeholder="Enter Deadline"
            onChange={(e) => {
              setdeadlineT(e.target.value);
            }}
          />
         
          </div>
        </div>
       <hr/>
       
       <div class="section">
          <div className="section-head"><h6>Submit
            </h6>
          </div>
          <div class ="head">
          <label for="depositSlip" class="form-label">
            Upload Paper{" "}
          </label>
          </div>
          <div class ="input">
          <div class="mb-3">
          <FileBase64
            multiple={false}
            onDone={({ base64 }) => setuploadPaper(base64)}
          />
        </div>
        </div>
          
        </div><br/>
      
        <button type="submit" class="btn btn-primary" id="exam">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
