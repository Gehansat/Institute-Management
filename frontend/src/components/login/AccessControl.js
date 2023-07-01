import React,{useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

export default function AccessControl(){

    
    const [User, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    let navigate = useNavigate();


    useEffect(()=>{
        function acess(){
            if (User.Role === "Admin")  {
                navigate("/studentDetails")
            }
            else{
                navigate("/Allnotices")
            }
        }
        acess();
    },[])
   
   


    return (
        <div></div>
    )
}