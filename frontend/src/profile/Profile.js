import 'bootstrap/dist/css/bootstrap.min.css';
import './../css/studentDetails.css';
import React from 'react';
import axios from 'axios';
import UserViewHeader from '../components/CommonComponents/UserViewHeader';
import UserViewFooter from '../components/CommonComponents/UserViewFooter';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.sid = 0;
    this.state = {
      data : [],
    }
  }

  callAPI(){
    let paramString = window.location.href.split('?')[1];
    let queryString = new URLSearchParams(paramString);
    
    for (let pair of queryString.entries()) {
      this.sid = pair[1];
    }

    this.getData();
    
  }

  componentWillMount(){
    this.callAPI();
  }

  getData(){
    axios.get("http://localhost:8070/editStudent?sid="+this.sid).then(res => {
      this.setState({
        data:res.data.studentData
      });
      console.log(this.state.data);
    })
    
  }
  

  render(){
    return (
      <div>
  
        <UserViewHeader />
  
        <div class="container-fluid">
          <div class="row">
  
            <div class="col-lg-12 p-4 text-center">
  
              <h5 class="text-center">Student Details</h5>
  
              <img src={'http://localhost:8070/download?sid=' + this.sid} height="120px" class="mt-4" />
  
              <div class="text-center">
  
                <div class="row">
                  <div class="col-lg-4"></div>
                  <div class="col-lg-2 text-left m-4">
  
                    <p>Name:</p>
                    <p>Student ID:</p>
                    <p>NIC:</p>
                    <p>Birthday:</p>
                    <p>Gender:</p>
                    <p>Address:</p>
                    <p>E-Mail:</p>
                    <p>Guardian's name:</p>
                    <p>Contact number:</p>
  
                  </div>
                  <div class="col-lg-2 text-left m-4">
                    
                    <p>{this.state.data.fname + " " + this.state.data.lname}</p>
                    <p>{this.state.data.sid}</p>
                    <p>{this.state.data.nic}</p>
                    <p>{this.state.data.bdate}</p>
                    <p>{this.state.data.gender}</p>
                    <p>{this.state.data.address}</p>
                    <p>{this.state.data.email}</p>
                    <p>{this.state.data.guardian}</p>
                    <p>{this.state.data.telephone}</p>
  
                  </div>
                  <div class="col-lg-4"></div>
                </div>
  
              </div>
  
            </div>
  
          </div>
        </div>
  
        <UserViewFooter />

      </div>
    );
  }
  
}

export default Profile;
