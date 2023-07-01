import React, {useState, useEffect} from "react";
import axios from "axios";
import './Background.css';
import { useNavigate,useLocation,Link } from "react-router-dom";


function UpdateStaff(props) {

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

    const location=useLocation();

    const UpdateStaff = {
        name, DoB, NIC, Address, Email, Phone, gender, ID, JobTitle, Experience, HireDate, UserName, Password, userType
    }

    

    useEffect(() => {
        axios.get(`http://localhost:8070/Staff/get/${location.state.id}`)
        .then((res)=> {
            
            setName(res.data.Staff.name)
            setDoB(res.data.Staff.DoB)
            setNIC(res.data.Staff.NIC)
            setAddress(res.data.Staff.Address)
            setEmail(res.data.Staff.Email)
            setPhone(res.data.Staff.Phone)
            setGender(res.data.Staff.gender)
            setID(res.data.Staff.ID)
            setJobTitle(res.data.Staff.JobTitle)
            setHireDate(res.data.Staff.HireDate)
            setUserName(res.data.Staff.UserName)
            setPassword(res.data.Staff.Password)
            setExperience(res.data.Staff.Experience)
            setuserType(res.data.Staff.userType)
            
        })
        .catch((err)=> {
            alert(err)
        })
        

    }, [props])

    function updateData(e){
        e.preventDefault();
        axios.put(`http://localhost:8070/Staff/updateStaff/${location.state.id}`, UpdateStaff)
        .then(()=> {
            alert("Staff member updated")
        
        }).catch((err)=> {
            
            alert(err)
        })
       
       
    } 

    return(
        <div className="backgroundImage">
            <div className = "container">
            <div class="row justify-content-center">
                <div class="col-md-6 text-center mb-5">
                    <h2 class="heading-section">Employee Profile</h2>
                </div>
            </div>

           <form onSubmit={updateData}>
                <div className="form-group">
                    <label for="name"><b>Employee Name</b></label>
                    <input type="text" className="form-control" id="name" 
                    value = {name}
                    onChange= {(e) =>{
                        setName(e.target.value);
                    }}
                     />
                </div>

                <div className="form-group">
                    <label for="DoB"><b>DoB</b></label>
                    <input type="text" className="form-control" id="age" 
                    value = {DoB}
                    onChange= {(e) =>{
                        setDoB(e.target.value);
                    }}
                    />
                </div>

                <div className="form-group">
                    <label for="NIC"><b>NIC</b></label>
                    <input type="nic" className="form-control" id="NIC" 
                     value = {NIC}
                     onChange= {(e) =>{
                        setNIC(e.target.value);
                    }}
                    />
                </div>    

                <div className="form-group">
                    <label for="Address"><b>Address</b></label>
                    <input type="text" className="form-control" id="Address" 
                      value = {Address}
                      onChange= {(e) =>{
                        setAddress(e.target.value);
                    }}
                     />
                </div>    

                <div className="form-group">
                    <label for="email"><b>Email</b></label>
                    <input type="email" className="form-control" id="name" 
                      value = {Email}
                      onChange= {(e) =>{
                        setEmail(e.target.value);
                    }}
                     />
                </div>    

                <div className="form-group">
                    <label for="Phone"><b>Phone</b></label>
                    <input type="phone" className="form-control" id="Phone" 
                      value = {Phone}
                      onChange= {(e) =>{
                        setPhone(e.target.value);
                    }}
                     />
                </div>       

                <div className="form-group">
                    <label for="gender"><b>Gender</b></label>
                    <input type="text" className="form-control" id="gender" 
                        value = {gender}
                       onChange= {(e) =>{
                        setGender(e.target.value);
                    }}
                    />
                </div>

                
                <div className="form-group">
                    <label for="ID"><b>ID</b></label>
                    <input type="text" className="form-control" id="ID" 
                     value = {ID}
                     onChange= {(e) =>{
                        setID(e.target.value);
                    }}
                    />
                </div> 

                <div className="form-group">
                    <label for="JobTitle"><b>JobTitle</b></label>
                    <input type="text" className="form-control" id="JobTitle" 
                     value = {JobTitle}
                     onChange= {(e) =>{
                        setJobTitle(e.target.value);
                    }}
                    />
                </div> 

                
                <div className="form-group">
                    <label for="Experience"><b>Experience</b></label>
                    <input type="text" className="form-control" id="Experience" 
                     value = {Experience}
                     onChange= {(e) =>{
                        setExperience(e.target.value);
                    }}
                    />
                </div> 

    
                <div className="form-group">
                    <label for="HireDate"><b>HireDate</b></label>
                    <input type="text" className="form-control" id="HireDate" 
                     value = {HireDate}
                     onChange= {(e) =>{
                        setHireDate(e.target.value);
                    }}
                    />
                </div> 

                
                <div className="form-group">
                    <label for="UserName"><b>UserName</b></label>
                    <input type="text" className="form-control" id="UserName" 
                     value = {UserName}
                     onChange= {(e) =>{
                        setUserName(e.target.value);
                    }}
                    />
                </div>  

  
                <div className="form-group">
                    <label for="Password"><b>Password</b></label>
                    <input type="password" className="form-control" id="Password" 
                     value = {Password}
                     onChange= {(e) =>{
                        setPassword(e.target.value);
                    }}
                    />
                </div>   

                <div className="form-group">
                    <label for="userType"><b>userType</b></label>
                    <input type="userType" className="form-control" id="userType"
                     value = {userType}
                     onChange= {(e) =>{
                        setuserType(e.target.value);
                    }}
                    />
                </div>

            <div class="form-submit">            
            <button type="submit" className="btn btn-primary">Update Profile</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
            </div>

         </form>
        </div>
    </div>
     )
}

export default UpdateStaff;