import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import "./report.css";
import { useReactToPrint } from 'react-to-print';
import ReactToPrint from 'react-to-print';

export default function ReportS() {
  const [eAttempts, seteAttempts] = useState([]);

  const componentRef = React.createRef();
  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  let id = "B001";
  let batch = "S001";

  useEffect(() => {
    function getAttempts() {
      console.log(id);
      axios
        .get(`http://localhost:8070/attempts/getresultsS/${id}`)
        .then((res) => {
          seteAttempts(res.data);
          console.log(eAttempts);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getAttempts();
  }, []);

  const RenderComponent = React.forwardRef((props, ref) => {
    return (
      <div className="container" id="report" ref={ref}>
        <div className="report">
          <div className="HeadR">
            <img src="../../logo_circle.png" id="repI" />
            <h1 id="repHead">
              <b>Shilpa Institute</b><br />
              <b>Student Report Card</b>
            </h1>
          </div>

          <div className="repBody">
            <div class="section">
              <div class="head">
                <label for="name">Student ID</label>
              </div>
              <div class="input">
                <label for="name" className="gen">{id}</label>
              </div>
            </div>
            <div class="section">
              <div class="head">
                <label for="name">Batch</label>
              </div>
              <div class="input">
                <label for="name" className="gen">{batch}</label>
              </div>
            </div>
            <hr />
            <div className="repBodyIn">
              <div class="section">
                <div class="head">
                  <label for="name" className="rn"><h5><b>Subject</b></h5></label>
                </div>
                <div class="input">
                  <label for="name" className="rm"><h5><b>Marks</b></h5></label>
                </div>
                <div class="input">
                  <label for="name" className="rg"><h5><b>Grade</b></h5></label>
                </div>
              </div>
              {eAttempts.map((item) => (
                <>
                  <div class="section">
                    <div class="head">
                      <label for="name" className="rn">{item.examName}</label>
                    </div>
                    <div class="input">
                      <label for="name" className="rm">{item.marks}</label>
                    </div>
                    <div class="input">
                      <label for="name" className="rg">{item.grade}</label>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  )


  return (
    <div>
      <br />
      {/* <button onClick={handlePrint}>Print this out!</button> */}
      <ReactToPrint
        trigger={() => {
          // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
          // to the root node of the returned component as it will be overwritten.
          return <button>Print this out!</button>;
        }}
        content={() => componentRef.current}
      />
      <RenderComponent ref={componentRef} />
    </div>
  );
}

