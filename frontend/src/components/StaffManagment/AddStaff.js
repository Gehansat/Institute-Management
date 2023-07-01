import React, {useState} from "react";
import axios from "axios";
import '../StaffManagment/AddStaff.css';
import './Background.css';
import { Link } from "react-router-dom";

function AddStaff() {

    const [name, setName] = useState("");
    const [DoB, setDoB] = useState("");
    const [NIC, setNIC] = useState("");
    const [Address, setAddress] = useState("");
    const [Email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [ID, setID] = useState("");
    const [JobTitle, setJobTitle] = useState("");
    const [Experience, setExperience] = useState("");
    const [HireDate, setHireDate] = useState("");
    const [UserName, setUserName] = useState("");
    const [Password, setPassword] = useState("");
    const [userType, setuserType] = useState("");

    function sendData(e){
        e.preventDefault();
        
        const newStaff = {
            name, DoB, NIC, Address, Email, Phone, gender, ID, JobTitle, Experience, HireDate, UserName, Password, userType
        }

        axios.post("http://localhost:8070/Staff/addStaff", newStaff)
        .then(()=> {
            alert("Staff member added")
        
        }).catch((err)=> {
            alert(err)
        })
    }

    return(
        <div className="backgroundImage">
        <div className = "container">
            <div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					<h1 class="heading-section">NEW STAFF REGISTRATION</h1>
				</div>
			</div>
            <form onSubmit = {sendData}>
                <div className="form-group">
                    <label for="name"><b>Employee Name</b></label>
                    <input type="text" className="form-control" id="name" placeholder="Enter Name" pattern="[a-z A-Z.]+"
                    onChange= {(e) =>{
                        setName(e.target.value);
                    }} />
                </div>

                <div className="form-group">
                    <label for="DoB"><b>DoB</b></label>
                    <input type="text" className="form-control" id="age" placeholder="Enter DoB"
                    onChange= {(e) =>{
                        setDoB(e.target.value);
                    }} />
                </div>

                <div className="form-group">
                    <label for="NIC"><b>NIC</b></label>
                    <input type="nic" className="form-control" id="NIC" placeholder="Enter NIC"
                    onChange= {(e) =>{
                        setNIC(e.target.value);
                    }} />
                </div>    

                <div className="form-group">
                    <label for="Address"><b>Address</b></label>
                    <input type="text" className="form-control" id="Address" placeholder="Enter Address"
                    onChange= {(e) =>{
                        setAddress(e.target.value);
                    }} />
                </div>    

                <div className="form-group">
                    <label for="email"><b>Email</b></label>
                    <input type="email" className="form-control" id="name" placeholder="Enter email"
                    onChange= {(e) =>{
                        setEmail(e.target.value);
                    }} />
                </div>    

                <div className="form-group">
                    <label for="Phone"><b>Phone</b></label>
                    <input type="phone" className="form-control" id="Phone" placeholder="Enter Phone" pattern="[0-9]{10}"
                    onChange= {(e) =>{
                        setPhone(e.target.value);
                    }} />
                </div>       

                <div className="form-group">
                    <label for="gender"><b>Gender</b></label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter gender"
                    onChange= {(e) =>{
                        setGender(e.target.value);
                    }} />
                </div>

                
                <div className="form-group">
                    <label for="ID"><b>ID</b></label>
                    <input type="text" className="form-control" id="ID" placeholder="Enter ID"
                    onChange= {(e) =>{
                        setID(e.target.value);
                    }} />
                </div> 

                <div className="form-group">
                    <label for="JobTitle"><b>JobTitle</b></label>
                    <input type="text" className="form-control" id="JobTitle" placeholder="Enter JobTitle"
                    onChange= {(e) =>{
                        setJobTitle(e.target.value);
                    }} />
                </div> 

                
                <div className="form-group">
                    <label for="Experience"><b>Experience</b></label>
                    <input type="text" className="form-control" id="Experience" placeholder="Enter Experience"
                    onChange= {(e) =>{
                        setExperience(e.target.value);
                    }} />
                </div> 

    
                <div className="form-group">
                    <label for="HireDate"><b>HireDate</b></label>
                    <input type="text" className="form-control" id="HireDate" placeholder="Enter HireDate"
                    onChange= {(e) =>{
                        setHireDate(e.target.value);
                    }} />
                </div> 

                
                <div className="form-group">
                    <label for="UserName"><b>UserName</b></label>
                    <input type="text" className="form-control" id="UserName" placeholder="Enter UserName"
                    onChange= {(e) =>{
                        setUserName(e.target.value);
                    }} />
                </div>  

  
                <div className="form-group">
                    <label for="Password"><b>Password</b></label>
                    <input type="password" className="form-control" id="Password" placeholder="Enter Password"
                    onChange= {(e) =>{
                        setPassword(e.target.value);
                    }} />
                </div>   

                <div className="form-group">
                    <label for="userType"><b>userType</b></label>
                    <input type="userType" className="form-control" id="userType" placeholder="Enter userType"
                    onChange= {(e) =>{
                        setuserType(e.target.value);
                    }} />
                </div>
               
                <div class="form-submit">
                <button type="submit" className="btn btn-primary" >Submit</button>&nbsp;&nbsp;&nbsp;
                <Link to="/" className="btn btn-danger ml-2">Cancel</Link>&nbsp;&nbsp;&nbsp;
                <Link to="/" className="btn btn-success">View Staff</Link>
                </div>

            </form>
        </div>
    </div>
     )
}

export default AddStaff;