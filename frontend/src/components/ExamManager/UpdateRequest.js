import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import FileBase64 from "react-file-base64";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "./nav";

export default function UpdateStudent() {
  const [attempts, setattempts] = useState({});
  const [requestR, setRequestR] = useState("");

  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    function getAttempts() {
      axios
        .get(`http://localhost:8070/attempts/get/${id}`)
        .then((res) => {
          console.log(res);
          setattempts(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAttempts();
  }, []);

  

  function sendData(e) {
    e.preventDefault();
   
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const requestDate = year + "-" + month + "-" + day

    const newRequest = {
      requestR,
      requestDate,
    };

    axios
      .put(`http://localhost:8070/attempts/requestR/${id}`, newRequest)
      .then(() => {
        alert("Request for Feedback is submitted");
        navigate("/allExams");
      })
      .catch((err) => {
        alert(err);
      });

    console.log(newRequest);
  }

  return (
    <div>

      <AdminSideNav/>
      <Head/>

      <div className="container" id="createExam">
      <h3>
          <br/>Grade Request Feedback{" "}
        </h3>

        <div className="exam">

          <hr/>

          <div class="section">
            <div className="section-head">
              <h6> Attempt Details</h6>
            </div>
            <div class ="head">
              <label for="name">Name of Test</label>
            </div>
            <div class ="input">
              <label for="name" className="gen">{attempts.examName}</label>
            </div>
          </div>

          <div class="section">
            <div className="section-head"></div>
            <div class ="head">
              <label for="age">Student ID</label>
            </div>
            <div class ="input">
              <label for="name" className="gen">{attempts.SID}</label>
            </div>
          </div>

          <div class="section">
            <div className="section-head"></div>
            <div class ="head">
              <label for="age">Batch</label>
            </div>
            <div class ="input">
              <label for="name" className="gen">{attempts.batch}</label>
            </div>
          </div>

          <div class="section">
            <div className="section-head"></div>
            <div class ="head">
              <label for="age">Submission Date</label>
            </div>
            <div class ="input">
              <label for="name" className="gen">{attempts.attemptDate}</label>
            </div>
          </div>
          <div class="section">
            <div className="section-head"></div>
            <div class ="head">
              <label for="age">Submission Time</label>
            </div>
            <div class ="input">
              <label for="name" className="gen">{attempts.attemptTime}</label>
            </div>
          </div>
          <hr/>
          <div class="section">
            <div className="section-head"><h6>Submitted AnswerPaper</h6></div>
            
            <div class ="input" id="paper">
              <img src={attempts.uploadAnswer}/>
            </div>
            <div className="input">
             <button id="downBtn">
                <a download={attempts.SID} href={attempts.uploadAnswer}>
                  Download
                </a>
              </button>
              </div>
          </div>
          <hr/>

          
          {/* Form to attempt EXAM */}

          <h3>
          <br/> Grade Exam Attempt{" "}
          </h3>

          <form onSubmit={sendData} className="exam">

            <div class="section">
              <div className="section-head"></div>
              <div class ="head">
                <label for="name">Marks</label>
              </div>
              <div class ="input">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  placeholder="Enter Student ID"
                  onChange={(e) => {
                    setRequestR(e.target.value);
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
    </div>
  );
}
