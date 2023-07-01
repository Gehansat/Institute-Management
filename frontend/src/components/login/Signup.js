import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./signup.css";

export default function Signup(){

    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [ID, setID] = useState("");
    const [Role, setRole] = useState("");
    const [User, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    let navigate = useNavigate();

   
    const logout = (e) => {

        localStorage.removeItem("profile");

    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            ID,
            Email,
            Password,
            Role
        }

           // has 3 args with authentication
           axios.post("http://localhost:8070/user/signup",formData).then((res)=>{
            localStorage.setItem("profile",JSON.stringify(res.data));

                alert("Signed up");
                navigate("/accessControl");

        
            }).catch((err)=>{
                
            alert("Sign up failed")
        })

        
        

    }

    const handleEmail = (e) => {

        setEmail(e.target.value);

    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleId = (e) => {
        setID(e.target.value);
    }

    const handleRole = (e) => {
        setRole(e.target.value);
    }


    return (
        <div className="login">

        
        <div className="container" style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
            {/* {isUser?(<p>user.Email</p>):<p></p>} */}

            <form style={{maxWidth:"500px", marginTop:"50px"}} onSubmit={handleSubmit}>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">ID</label>
                <input class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleId}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleEmail}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Role</label>
                <input  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleRole}/>
            </div>
            {/* <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Role</label>
                <select class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleRole}>
                                    <option value="Admin">Admin</option>
                                    <option value="student">Student</option>
                            
                </select>
            </div> */}
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" onChange={handlePassword}/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            </form>

            <form onSubmit={logout}>
                <button type="submit" class="btn btn-danger"style={{margin:"10px"}}>Cancel</button>
            </form>

        </div>
        </div>

    )
}