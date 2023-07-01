import React from "react";
import {Link} from 'react-router-dom';

function Header() {
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            
            <Link to="/" className="nav-link">Dashboard</Link>
            <button className="navbar-toggler" type="button" 
            data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item ">
                        <a className="nav-link" href="#">Notice Board <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Payments</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Subjects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Results</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"> Attendance <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item ">
                        
                        <Link to="/viewTicket" className="nav-link">Support Service</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header ;