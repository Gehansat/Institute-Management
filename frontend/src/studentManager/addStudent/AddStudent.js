import 'bootstrap/dist/css/bootstrap.min.css';
import './../../css/studentDetails.css';
import React from 'react';
import AdminSideNav from '../../components/CommonComponents/AdminSideNav';
import AdminViewFooter from '../../components/CommonComponents/AdminViewFooter';
import axios from 'axios';
import StudentManagerNav from '../StudentManagerNav';

class AddStudent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {apiResponse:[],file:''};
  }

  handleChange(event) {    
    this.setState({[event.target.name]: event.target.value});  
    document.getElementById('alert').style.display='none';
  }

  handleFile(e){
    this.state.file = e.target.files[0];
  }
  
  handleSubmit(event){
    let fileInput = this.state.file;
    const formData = new FormData(event.target);

    const data = new FormData();
    data.append("sid", formData.get('sid'));
    data.append("fname", formData.get('fname'));
    data.append("lname", formData.get('lname'));
    data.append("bdate", formData.get('bdate'));
    data.append("gender", formData.get('gender'));
    data.append("photo", fileInput);    
    data.append("address", formData.get('address'));
    data.append("email", formData.get('email'));
    data.append("nic", formData.get('nic'));
    data.append("guardian", formData.get('guardian'));
    data.append("telephone", formData.get('telephone'));
    data.append("uname", formData.get('uname'));
    data.append("psw", formData.get('psw'));


    const config = {
        headers: {'content-type' : 'multipart/form-data'},
        onUploadProgress: function(progressEvent){
            var completed = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        }
    }
    const url = "http://localhost:8070/addStudent";

    axios.post(url , data, config)
        .then(response => {
            document.getElementById('alert').style.display='block';
            console.log(response);
        })
        .catch(error => {
            alert("e - " + error);
        })
        
    event.preventDefault();
  }


  render(){
    return (
      <div>

        <StudentManagerNav />

        <div class="container-fluid navPadding">
          <div class="row">

            <div class="col-lg-1">
              <AdminSideNav />
            </div>

            <div class="col-lg-11 p-3">
              <div className='text-right'>
                <button class="btn btn-warning">Logout</button>
              </div>
              <h5 class="text-center">Add Student</h5>

              <form class="p-5 pt-0" onSubmit={(e)=>this.handleSubmit(e)}>

                <div class="form-group">
                  <label>Student ID</label>
                  <input type="text" pattern="[s|S][0-9]{3}" class="form-control"   name="sid" id="sid" required placeholder="SID" />
                </div>

                <div class="form-group">
                  <label>First Name</label>
                  <input type="text" class="form-control"   name="fname" id="fname" required placeholder="First Name" />
                </div>

                <div class="form-group">
                  <label>Last Name</label>
                  <input type="text" class="form-control"   name="lname" id="lname" required placeholder="Last Name" />
                </div>

                <div class="form-group">
                  <label>Birthday</label>
                  <input type="date" class="form-control"    name="bdate" id="bdate" required placeholder="Birthday" />
                </div>

                <div class="form-group">
                  <label>Gender</label>
                  <input type="text" class="form-control"   name="gender" id="gender" required placeholder="Gender" />
                </div>

                <div class="form-group">
                  <label>Picture</label>
                  <input type="file" class="form-control" onChange={(e)=>this.handleFile(e)}  name="photo" id="photo" placeholder="Gender" />
                </div>

                <div class="form-group">
                  <label>Address</label>
                  <input type="text" class="form-control"   name="address" id="address" required placeholder="Address" />
                </div>

                <div class="form-group">
                  <label>E-mail</label>
                  <input type="email" class="form-control"   name="email" id="email" required placeholder="E-mail" />
                </div>

                <div class="form-group">
                  <label>NIC Number</label>
                  <input type="text" class="form-control" pattern="[0-9]{12}|[0-9]{9}[v|V]"   name="nic" id="nic" required placeholder="NIC Number" />
                </div>

                <div class="form-group">
                  <label>Guardian's name</label>
                  <input type="text" class="form-control"   name="guardian" id="guardian" required placeholder="Guardian's name" />
                </div>

                <div class="form-group">
                  <label>Telephone Number</label>
                  <input type="text" class="form-control" pattern="[0-9]{10}"   name="telephone" id="telephone" required placeholder="Telephone Number" />
                </div>

                <div class="form-group">
                  <label>User Name</label>
                  <input type="text" class="form-control"   name="uname" id="uname" required placeholder="User Name" />
                </div>

                <div class="form-group">
                  <label>Password</label>
                  <input type="password" minLength={10} class="form-control"   name="psw" id="psw" required placeholder="Password" />
                </div>

                <div class="alert alert-success mt-3" id="alert" style={{display:'none'}}>
                  <b>Student Added!</b>
                </div>

                <div class="text-center mt-4">
                  <button type="submit" class="btn btn-primary">Submit</button>
                </div>

              </form>

            </div>

          </div>
        </div>

        <div class="footerBottom" style={{position:'absolute',bottom:'inherit'}}>
          <AdminViewFooter />
        </div>

      </div>
    );
  }
}

export default AddStudent;
