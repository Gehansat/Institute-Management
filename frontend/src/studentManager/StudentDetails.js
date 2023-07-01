import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './../css/studentDetails.css';
import axios from 'axios';
import React from 'react';
import AdminSideNav from '../components/CommonComponents/AdminSideNav';
import AdminViewFooter from '../components/CommonComponents/AdminViewFooter';
import StudentManagerNav from './StudentManagerNav';

class StudentDetails extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data : []
    }

    this.searchHandler = this.searchHandler.bind(this);

  }

  componentDidMount(){
    this.getData();
  }

  getData(){
    axios.get("http://localhost:8070/student").then(res => {
      this.setState({
        data:res.data.studentData
      });
      console.log(this.state.data);
      
    })
  }

  searchHandler(){
    var search = document.getElementById("search").value;

    axios.get("http://localhost:8070/searchStudent?sname="+search).then(res => {
      this.setState({
        data:res.data.studentData
      });
      console.log(this.state.data);
    })
  }

  deleteHandler(event){
    fetch('http://localhost:8070/deleteStudent', {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({sid:event.target.value})
    })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      document.getElementById('alert').style.display='block';
      this.getData();
    })
    event.preventDefault();
  }

  render(){
    return (
      <div>

        <StudentManagerNav />

        <div class="container-fluid pl-0 navPadding">
          <div class="row">
          
            <div class="col-lg-1">
              <AdminSideNav />
            </div>

            <div class="col-lg-11 p-3 pl-0">
              <div className='text-right'>
                <Link to="/signup"><button class="btn btn-warning">Logout</button></Link>
              </div>
              <div className='text-center mb-4'>
                <input type="text" class="form-control" placeholder='Search by name' style={{width:'20%',display:'inline-block'}} name='search' id='search'/>
                <button class="btn btn-info" onClick={this.searchHandler}>Search</button>
              </div>
              <h5 class="text-center">Student Details</h5>
              <div class="table-responsive">
                <table class="table table-hover table-dark table-striped">
                  <thead>
                    <tr>
                      <th>SID</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Photo</th>
                      <th>NIC</th>
                      <th>DOB</th>
                      <th>Gender</th>
                      <th>Address</th>
                      <th>Mobile</th>
                      <th>Email</th>
                      <th>Guardian's name</th>
                      <th>Username</th>
                      <th>Password</th>
                      <th>Manage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map(data => (
                      <tr>
                        <td>{data.sid}</td>
                        <td>{data.fname}</td>
                        <td>{data.lname}</td>
                        <td>
                          <a href={'http://localhost:8070/download?sid=' + data.sid} target='_blank'>
                            <img src={'http://localhost:8070/download?sid=' + data.sid} height='50px' />
                          </a>
                        </td>
                        <td>{data.nic}</td>
                        <td>{data.bdate}</td>
                        <td>{data.gender}</td>
                        <td>{data.address}</td>
                        <td>{data.telephone}</td>
                        <td>{data.email}</td>
                        <td>{data.guardian}</td>
                        <td>{data.uname}</td>
                        <td>{data.psw}</td>
                        <td><Link to={"/editStudent?sid="+data.sid}><button type="button" class="btn btn-warning" value={data.sid}>Edit</button></Link><button type="button" value={data.sid} onClick={(e) => this.deleteHandler(e)} class="btn btn-danger">Delete</button></td>
                      </tr>
                    ))}

                  </tbody>
                </table>
              </div>

              <div class="text-right pt-3 mb-5">
                <Link to="/addStudent"><button class="btn btn-info">Add Student</button></Link>
                <br/><br/>
                <a href="http://localhost:8070/studentReport" target='_blank'><button class="btn btn-info">Generate a Report</button></a>
                <br/><br/>
                <Link to="/profile?sid=S001"><button class="btn btn-info mb-1">Profile</button></Link>
              </div>

              <div class="alert alert-warning mt-3" id="alert" style={{display:'none'}}>
                  <b>Student Deleted!</b>
              </div>

            </div>

          </div>
          
        </div>
        <div class="footerBottom">
          <AdminViewFooter />
        </div>
      </div>
    );
  }
}

export default StudentDetails;
