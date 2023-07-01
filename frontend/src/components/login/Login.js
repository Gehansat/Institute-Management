import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserViewHeader from "../CommonComponents/UserViewHeader";
import UserViewFooter from "../CommonComponents/UserViewFooter";


export default function Login(){

    const [ID, setID] = useState("");
    const [Password, setPassword] = useState("");
    let navigate = useNavigate();
    // const [User, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const User = JSON.parse(localStorage.getItem("profile"));
    


    const handleSubmit = (e) => {
        e.preventDefault();
        var Role = "";

        if (ID[0] == "s" || ID[0] == "S"){
            Role = "Student"
        }
        else{
            Role = "Admin"
        }

        const formData = {
                ID,
                Password,
                Role
            }

        localStorage.setItem("profile",JSON.stringify(formData));
        alert("Signed in");
        navigate("/accessControl");

        // const formData = {
        //     Email,
        //     Password
        // }

           // has 3 args with authentication
        //    axios.post("http://localhost:8070/user/signin",formData).then((res)=>{
        //     localStorage.setItem("profile",JSON.stringify(res.data));

        //     alert("Signed in");
        //     navigate("/accessControl");
            
        //     }).catch((err)=>{
                
        //     alert(err)
        // })


    }

    const handleId = (e) => {

        setID(e.target.value);

    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }


    return (
        <div>

            <UserViewHeader/>
            <div className="container" style={{display:"flex", flexDirection:"column", alignItems:"center", width:"500px", height:"400px", marginTop:"50px", padding:"50px, 0 ,50px, 0", border:"1px solid blue"}}>

            <form style={{maxWidth:"500px", padding:"20px 0 20px 0"}} onSubmit={handleSubmit}>
                <h5 style={{marginLeft:"100px", marginBottom:"20px"}}>Login</h5>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">ID</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleId}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" onChange={handlePassword}/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
            <br></br>
            </form>

        </div>
        <UserViewFooter/>
        </div>
    )
}