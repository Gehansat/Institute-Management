import React from "react";
import './UserHeaderStyles.css';
import { useNavigate,Link } from "react-router-dom";

function UserViewHeader(){

    let navigate = useNavigate();

    const logout = (e) => {

        localStorage.removeItem("profile");
        navigate("/signup");

    }
    const User = JSON.parse(localStorage.getItem("profile"));
    console.log(User.ID)
    return(
        <div class="header">
            <div style={{display:"flex", justifyContent:"space-between",alignItems:"center", padding:"5px"}}>
                <div>
                <img width={220} height={100} src="../../logo.png"/>
                </div>
                <div>
                    <button style={{marginRight:"20px", width:"100px"}} onClick={logout} class="btn btn-warning">Logout</button>
                    <Link to={"/profile?sid="+User.ID}><img width={48} height={48} src="../../user.png"/></Link>
                    
                </div>
            </div>

            <nav className="hbar navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="hcontainer" className="container-fluid">
                
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">

                    <a  style={{padding:"15px"}} className="h-link nav-link active" href="/Allnotices">Notice Board</a>

                    <a style={{padding:"15px"}} className="h-link nav-link active payments" href="">Payments
                    <div class="payments-dropdown-content">
                        <a href="/regPayment">Registration Payment</a>
                        <a href="/subPayment">Subject Payments</a>
                        <a href="/pendingPayments">Pending Payments</a>
                    </div>
                    </a>
                    
                    <a style={{padding:"15px"}} className="h-link nav-link active" href="/display">Subjects</a>

                    <a style={{padding:"15px"}} className="h-link nav-link active" href="/addAttendance">Attendance</a>

                    <a style={{padding:"15px"}} className="h-link nav-link active" href="/studentDash">Results</a>

                    <a style={{padding:"15px"}} className="h-link nav-link active" href="/viewTicket">Support Service</a>
                </div>
                </div>
            </div>
        </nav>
        </div>

    )
}

export default UserViewHeader;