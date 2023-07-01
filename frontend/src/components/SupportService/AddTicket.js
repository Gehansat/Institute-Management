import React, {useState} from "react"
import axios from "axios";
//import { useLocation, useNavigate } from "react-router-dom";
import UserViewHeader from "../CommonComponents/UserViewHeader";
import UserViewFooter from "../CommonComponents/UserViewFooter";


export default function AddTicket(){

    const [st_id , setRegNo] = useState("");
    const [st_name , setName] = useState("");
    const [st_contact_no , setContactNo] = useState("");
    const [st_email , setEmail] = useState("");
    const [question_type , setQtype] = useState("");
    const [description , setDescription] = useState("");

    //const navigate = useNavigate();

    function sendData(event){

        event.preventDefault();

        const newTicket ={
            st_id,
            st_name,
            st_contact_no,
            st_email,
            question_type,
            description
        }

        axios.post("http://localhost:8070/ticket/addTicket",newTicket).then(()=>{
            alert("Ticket opened successfully !!!")
            window.location.reload(false);
            //navigate("/viewTicket");

        }).catch((err)=>{
            alert(err)
        })

    }


    return(
        <div>
        <UserViewHeader/>
        <div className="container">
            <div><h1 className="text-center"> Support service </h1></div>
        <form className="container" style={{border:"1px solid black"}}  onSubmit={sendData}>

            <br/><br/>
            <div className="form-group row">
                <label for="text" className="col-sm-2 col-form-label">Reg. No.</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="text" placeholder="S1234" required onChange={(event)=>{
                        setRegNo(event.target.value);
                    }}/>
                </div>
            </div>
            <div className="form-group row">
                <label for="name" className="col-sm-2 col-form-label"> Name</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" placeholder="A.B.C. Perera" required onChange={(event)=>{
                        setName(event.target.value);
                    }} />
                </div>
            </div>
            <div className="form-group row">
                <label for="contact" className="col-sm-2 col-form-label"> Contact No.</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="contact" placeholder="071 234 567 8" required onChange={(event)=>{
                        setContactNo(event.target.value);
                    }}  />
                </div>
            </div>
            <div className="form-group row">
                <label for="inputEmail3" className="col-sm-2 col-form-label"> Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputEmail3" placeholder="abcdef@gmail.com" required onChange={(event)=>{
                        setEmail(event.target.value);
                    }}  />
                </div>
            </div>
            <fieldset className="form-group">
                <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0"> Question Type</legend>
                    <div className="col-sm-10">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="registration" onChange={(event)=>{
                        setQtype(event.target.value);
                    }} />
                            <label className="form-check-label" for="gridRadios1">
                                Registration
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="timetable" onChange={(event)=>{
                        setQtype(event.target.value);
                    }} />
                            <label className="form-check-label" for="gridRadios2">
                                Timetable
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="examination" onChange={(event)=>{
                        setQtype(event.target.value);
                    }} />
                            <label className="form-check-label" for="gridRadios3">
                                Examination
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="lesson" onChange={(event)=>{
                        setQtype(event.target.value);
                    }} />
                            <label className="form-check-label" for="gridRadios4">
                                Lesson
                            </label>
                        </div>
                        <div className="form-check ">
                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios5" value="other" onChange={(event)=>{
                        setQtype(event.target.value);
                    }} />
                            <label className="form-check-label" for="gridRadios5">
                                Other
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1"> Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" required onChange={(event)=>{
                        setDescription(event.target.value);
                    }}  ></textarea>
                </div>
            </fieldset>
            <div className="form-group row">
                <div className="col-sm-10">
                    
                        <button type="submit" className="btn btn-outline-primary btn" >Submit</button>
                    
                    
                    
                </div>
            </div>
        </form>
        </div>
        <br/><br/><br/>
        <UserViewFooter/>
        </div>
    )
}
