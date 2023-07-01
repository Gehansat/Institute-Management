import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Logo from './../img/logo.png';

class StudentManagerNav extends React.Component {

  render(){
    return (

    <nav class="navbar navbar-expand-sm navbar-dark" style={{backgroundColor:'#fbf4cd'}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{width:'0px'}}>
            <img src={Logo} alt="Logo" width={'115px'} class="rounded-pill" />
          </a>
          <div class="container-fluid text-center">
            <h5 class="navbar-text" style={{color:'#000000'}}>Student Registration Management</h5>
          </div>
        </div>
    </nav>

      
    );
  }
}

export default StudentManagerNav;
