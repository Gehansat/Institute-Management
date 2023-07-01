import React from "react";
import {Link} from 'react-router-dom';



function Header() {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div clasNames="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

      <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
       </li>

        <li className="nav-item">
          <Link to="/viewcls" className="nav-link">Classrooms</Link>
        </li>

        <li className="nav-item">
          <Link to="/addcls" className="nav-link">Add Classroom</Link>
         </li>
         <li className="nav-item">
          <Link to="/addAttendance" className="nav-link">Add Attendance</Link>
         </li>

         <li className="nav-item">
          <Link to="/view" className="nav-link">View Attendance</Link>
         </li>

         <li className="nav-item">
          <Link to="/new" className="nav-link"> Attendance Report</Link>
         </li>


       </ul>
    </div>
  </div>
</nav>
    )
    }   
export default Header;
