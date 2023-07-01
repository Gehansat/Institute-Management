import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import UserViewHeader from "../CommonComponents/UserViewHeader";
import UserViewFooter from "../CommonComponents/UserViewFooter";

export default function UpdateTicket(){

  const [tickets, setTicket] = useState("");

  const navigate = useNavigate();

  
  const {state} = useLocation();
  const {TicketId} = state;

  const {prevStId} = state;
  const {prevStName} = state;
  const {prevStContactNo} = state;
  const {prevStEmail} = state;
  const {prevQType} = state;
  const {prevDescription} = state;

  const [st_id, setStID] = useState(prevStId);
  const [st_name, setStName] = useState(prevStName);
  const [st_contact_no, setStContactNo] = useState(prevStContactNo);
  const [st_email, setStEmail] = useState(prevStEmail);
  const [question_type, setQType] = useState(prevQType);
  const [description, setDescription] = useState(prevDescription);

  
  function sendData(e) {
    
    e.preventDefault();

  
    const newTicket = {
      st_id,
      st_name,
      st_contact_no,
      st_email,
      question_type,
      description
    };

    axios
      .put(`http://localhost:8070/ticket/update/${TicketId}`, newTicket)
      .then(() => {
        alert("Ticket Updated successfully!!!");
        navigate("/viewTicket");
      })
      .catch((err) => {
        alert(err);
      });

    console.log(newTicket);
  }

  return (

    <div>
        <UserViewHeader/>
    <div className="container">
      <div><h1 className="text-center"> Support service </h1></div>
            <form className="container" style={{border:"1px solid black"}} onSubmit={sendData}>

              <br/>
              <div className="form-group row">
                      <label for="text" className="col-sm-2 col-form-label">Reg. No.</label>
                        <div className="col-sm-10">
                        <input type="text" className="form-control" id="text" 
                          placeholder="S1234" 
                          required 
                          defaultValue={prevStId}
                            onChange={(e) => {          
                              setStID(e.target.value);
                            }}/>
                        </div>
                          
                      
                  </div>
                  <div className="form-group row">
                      <label for="name" className="col-sm-2 col-form-label"> Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="name" 
                          placeholder="A.B.C. Perera" 
                          required 
                          defaultValue={prevStName} 
                          onChange={(e) => {
                            setStName(e.target.value);
                          }}
                          />
                        </div>
                  </div>
                  <div className="form-group row">
                      <label for="contact" className="col-sm-2 col-form-label" id="contact" > Contact No.</label>
                      <div className="col-sm-10">
                          <input type="text" className="form-control" id="contact" 
                          placeholder="071 234 567 8" 
                          required 
                          defaultValue={prevStContactNo}
                          onChange={(e) => {
                            setStContactNo(e.target.value);
                          }}
                          />
                      </div>
                  </div>
                  <div className="form-group row">
                      <label for="inputEmail3" className="col-sm-2 col-form-label"> Email</label>
                      <div className="col-sm-10">
                          <input type="email" className="form-control" id="inputEmail3" 
                          placeholder="abcdef@gmail.com" 
                          required 
                          defaultValue={prevStEmail}
                          onChange={(e) => {
                            setStEmail(e.target.value);
                          }}
                          />
                      </div>
                  </div>
                  <fieldset className="form-group">
                      <div className="row">
                          <legend className="col-form-label col-sm-2 pt-0"> Question Type</legend>
                          <div className="col-sm-10">
                              <div className="form-check">
                                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" 
                                  value="registration" 
                                  defaultValue={prevQType}
                                  onChange={(e) => {
                                    setQType(e.target.value);
                                  }}
                                  />
                                  <label className="form-check-label" for="gridRadios1">
                                      Registration
                                  </label>
                              </div>
                              <div className="form-check">
                                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" 
                                  value="timetable" 
                                  defaultValue={prevQType}
                                  onChange={(e) => {
                                    setQType(e.target.value);
                                  }}
                                  />
                                  <label className="form-check-label" for="gridRadios2">
                                      Timetable
                                  </label>
                              </div>
                              <div className="form-check">
                                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" 
                                  value="examination" 
                                  defaultValue={prevQType}
                                  onChange={(e) => {
                                    setQType(e.target.value);
                                  }}
                                  />
                                  <label className="form-check-label" for="gridRadios3">
                                      Examination
                                  </label>
                              </div>
                              <div className="form-check">
                                 <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" 
                                 value="lesson" 
                                 defaultValue={prevQType}
                                  onChange={(e) => {
                                    setQType(e.target.value);
                                  }}
                                 />
                                 <label className="form-check-label" for="gridRadios4">
                                      Lesson
                                 </label>
                              </div>
                              <div className="form-check ">
                                  <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios5" 
                                  value="other" 
                                  defaultValue={prevQType}
                                  onChange={(e) => {
                                    setQType(e.target.value);
                                  }}
                                  />
                                  <label className="form-check-label" for="gridRadios5">
                                      Other
                                  </label>
                              </div>
                          </div>
                      </div>
                      <div className="form-group">
                          <label for="exampleFormControlTextarea1"> Description</label>
                          <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" 
                          required 
                          defaultValue={prevDescription}
                          onChange={(e) => {
                            setDescription(e.target.value);
                          }}
                          >
                          </textarea>
                      </div>
                  </fieldset>   
                    <button type="submit" className="btn btn-success">Submit</button>
                    <br/><br/>             
            </form>
            <br/>
          </div>
          

          <br/><br/><br/>

          <UserViewFooter/>
        </div>
  );
        
}