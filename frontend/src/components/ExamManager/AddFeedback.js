import React, { useState } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";
import "./header.css";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "./nav";
import UserViewHeader from "../CommonComponents/UserViewHeader";
import Navs from "./side-nav";

export default function AddStudent() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [SID, setSID] = useState("");
  const [DateA, setDateA] = useState("");
  const [answer, setAnswer] = useState("");

  function sendData(e) {

    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const DateR = year + "-" + month + "-" + day;
    const status = "Not resolved"

    e.preventDefault();
    const newFD= {
      name,
      description,
      lecturer,
      status,
      SID,
      DateR,
      DateA,
      answer,
    };
    console.log(newFD);
    axios
      .post("http://localhost:8070/fd/add", newFD)
      .then(() => {
        alert("FeedBack is Added");
        console.log(newFD);
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  }

  return (
    <div>
     <Navs />
      <UserViewHeader />
    
    <div className="container" id="createExam">
      
      <h3>
        <br />
        Create a New Exam{" "}
      </h3>
      <form onSubmit={sendData} className="exam">
        <hr/>
        <div class="section">
          <div className="section-head"><h6> Discussion Creation</h6></div>
          <div class ="head">
          <label for="name">Topic of Discussion</label>
          </div>
          <div class ="input">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Enter Topic of discussion"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          </div>
        </div>
        <div class="section">
          <div className="section-head"></div>
          <div class ="head">
            <label for="gender">Discussion</label>
            </div>
            <div class ="input">
          <textarea
            type="text"
            class="form-control"
            id="gender"
            placeholder="Give problem"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          </div>
        </div>
       
       <hr/>
        <div class="section">
          <div className="section-head"><h6>About</h6></div>
          <div class ="head">
          <label for="duration">Student ID</label>
          </div>
          <div class ="input">
            <input
            class="form-control"
            id="duration"
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
          <div class ="head">
            <label for="title">To Lecturer</label>
          </div>
          <div class ="input">
            <input
              type="text"
              class="form-control"
              id="title"
              pattern="[A-Z]{1}[0-9]{3}"
              placeholder="Directed Lecturer"
              onChange={(e) => {
                setLecturer(e.target.value);
              }}
            />
          </div>
        </div>
          
      <br/>
      
        <button type="submit" class="btn btn-primary" id="exam">
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
