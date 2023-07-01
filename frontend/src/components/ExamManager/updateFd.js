import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FileBase64 from "react-file-base64";
import "./header.css";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "./nav";

export default function AddStudent() {
  const [fd, setFD] = useState({});

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [lecturer, setLecturer] = useState("");
  const [SID, setSID] = useState("");
  const [answer, setAnswer] = useState("");

  let { id } = useParams();

  useEffect(() => {
    function getFD() {
      axios
        .get(`http://localhost:8070/fd/get/${id}`)
        .then((res) => {
          console.log(res);
          setFD(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getFD();
  }, []);

  function sendData(e) {
    e.preventDefault();
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const DateA = year + "-" + month + "-" + day;
    const status = "resolved"

    const newAnswer = {
      status,
      DateA,
      answer,
    };

    axios
      .put(`http://localhost:8070/fd/update/${id}`, newAnswer)
      .then(() => {
        alert("Answer updated");
      })
      .catch((err) => {
        alert(err);
      });

    console.log(newAnswer);
  }

  return (
    <div>
      <AdminSideNav/>
      <Head/>
    
    <div className="container" id="createExam">
      
      <h3>
        <br />
        Answer the discussion{" "}
      </h3>

      <div class="section">
        <div className="section-head">
          <h6> Discussion </h6>
        </div>
        <div class ="head">
          <label for="name">Topic</label>
        </div>
        <div class ="input">
          <label for="name" className="gen">{fd.name}</label>
        </div>
      </div>
      <div class="section">
        <div className="section-head"></div>
        <div class ="head">
          <label for="name">Student</label>
        </div>
        <div class ="input">
          <label for="name" className="gen">{fd.SID}</label>
        </div>
      </div>
      <div class="section">
        <div className="section-head"></div>
        <div class ="head">
          <label for="name">Discussion</label>
        </div>
        <div class ="input">
          <label for="name" className="gen" id="descript">{fd.description}</label>
        </div>
      </div>

      <form onSubmit={sendData} className="exam">
        <hr/>
        <div class="section">
          <div className="section-head"></div>
          <div class ="head">
            <label for="gender">Answer</label>
          </div>
          <div class ="input">
            <textarea
              type="text"
              class="form-control"
              id="gender"
              placeholder="Give problem"
              Value={fd.description}
              onChange={(e) => {
                setAnswer(e.target.value);
              }}
            />
          </div>
        </div>
       
        <button type="submit" class="btn btn-primary" id="exam">
          Submit
        </button>

      </form>

    </div>
    </div>
  );
}
