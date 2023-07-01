import React, {useState , useEffect} from "react";
import axios from "axios";
import '../StaffManagment/AddStaff.css';
import { Heading } from "./Heading";
import { Link } from "react-router-dom";
import './Background.css';
import {Button} from "reactstrap";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import StaffHeader from "./StaffHeader";
import { useNavigate } from "react-router-dom";
import StaffSearch from "./StaffSearch";
function AllStaff() {

	const [staffs, setStaffs] = useState([]);
	const [subjects, setSubjects] = useState([]);
    const [SubjectId,  setSubjectID] = useState("");
    const [Name,  setName] = useState("");
    const [Lecturer,  setLecturer] = useState("");
    const [ID,  setID] = useState("");

	const Navigate=useNavigate()

//delete member by ID
const deletemember = id => {
	axios.delete(`http://localhost:8070/Staff/delete/${id}`)
	.then(res => alert(res.data))
	setStaffs(staffs.filter(elem => elem._id !== id))
}

   const updateStaff = (id) => {

	Navigate("updateStaff",{state:{id:id}})
   }
useEffect(()=>{
        function getStaffs() {
            axios.get("http://localhost:8070/Staff/").then((res)=> {
            console.log(res)     
            setStaffs(res.data);
            }).catch((err) => {

                alert(err.message);
            })
        }
        getStaffs();
    }, [setStaffs])

  console.log("check",setStaffs);

  //serch
  function updateSearchTerms (newSearchTerm){
	function getSearchedSubjects(){
		axios.get(`http://localhost:8070/Staff/displaysss/${newSearchTerm}`).then((res)=>{
			setStaffs(res.data);

		}).catch((err)=>{
		   console.log()
		})
	}
	function getStaffs(){
		axios.get("http://localhost:8070/Staff/").then((res)=>{
		   setStaffs(res.data);

		}).catch((err)=>{
			console.log(err.message)
			alert(err.message)
		})
	}

	if (newSearchTerm != ''){
		getSearchedSubjects();
	}
	else{
	   getStaffs();
	}
	
	
}
	
  
  


    return(
		<div className="backgroundImage">
		<><><>
			
			<AdminSideNav/>
			<StaffHeader/>

			<div style={{display: "flex",  justifyContent:"flex-end", margin:"1rem"}}></div>
		</>
		</>
		
		<div>
			<div className="container">
			<StaffSearch
            refreshFunction={updateSearchTerms}
            />
			<div style={{padding:"5px 22px 5px 0px",width:"200vh"}}>

				<table className="table">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Job Title</th>
								<th scope="col">Staff ID</th>
								<th scope="col">Phone No.</th>
								<th scope="col">JobTitle</th>
								<th scope="col">Experience</th>
								<th scope="col">Gender</th>
								<th scope="col">Email</th>
								<th scope="col">Address</th>
								<th scope="col">Date of Birth</th>
                                <th scope="col">MANAGE</th>
								


							</tr>
						</thead>
						<tbody>
								{staffs.map(staffs => <tr>
								<td>{staffs.name}</td>
								<td>{staffs.JobTitle}</td>
								<td>{staffs.ID}</td>
								<td>{staffs.Phone}</td>
								<td>{staffs.JobTitle}</td>
								<td>{staffs.Experience}</td>
								<td>{staffs.gender}</td>
								<td>{staffs.Email}</td>
								<td>{staffs.Address}</td>
								<td>{staffs.DoB}</td>
								<td>
								
										{/* <Link color="warning" className="btn btn-warning mr-1" to={`update/${staffs._id}`}> <i className="fas fa-edit"></i>&nbsp;View</Link>&nbsp;&nbsp; */}
										<Button onClick ={() => updateStaff(staffs._id)} color="warning"> <i className="fas fa-trash-alt"></i>&nbsp;View</Button>&nbsp;&nbsp;
										<Button onClick ={() => deletemember(staffs._id)} color="danger"> <i className="fas fa-trash-alt"></i>&nbsp;Delete</Button>&nbsp;&nbsp;
										{/* <Link color="green" className="btn btn-success" to={`/post`}>Genarate Report</Link> */}
									
								</td>		
							</tr>
							)}
						</tbody>
					</table>
					</div>
			</div>
			
			<a href="/addStaff"><button class="btn btn-outline-dark">Add New Staff Member</button></a>
			<div>
				break 

			</div>
			<a href="/SalCal"><button class="btn btn-success">Salary Report</button></a>
	</div>

		 <AdminViewFooter/>		
				</>
</div>        

		
		)
	}
export default AllStaff;