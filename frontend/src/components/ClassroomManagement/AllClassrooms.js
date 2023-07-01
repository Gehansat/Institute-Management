import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../PaymentsManagement/paymentStyles.css'
import AdminSideNav from "../CommonComponents/AdminSideNav"; 
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import Search from "./Search";
import { NavLink} from 'react-router-dom';
 export default function AllClassrooms() {

    const updateClassroom = (id) => {
        const classroomid = prompt("Enter new classroomid:");
        

        axios.put("http://localhost:8070/classroom/update",{classroomid: classroomid, id:id}).then(()=>{
            setAllClassrooms(AllClassrooms.map((val)=>{
                return val._id === id ? {_id: id, classroomid: classroomid, module: val.module, time: val.time, date: val.date } : val;
            }))
        })
    };

    const deleteClassroom = (id) =>{
        axios.delete(`http://localhost:8070/classroom/delete/${id}`).then(()=>{
            setAllClassrooms(AllClassrooms.filter((val)=>{
                return val._id !== id;
            }))
        });
    };


    const [AllClassrooms, setAllClassrooms] = useState([]);

    useEffect(()=> {
         axios.get("http://localhost:8070/classroom/").then((response)=>{
                console.log(response)
                 setAllClassrooms(response.data)
            })
            .catch(()=>{
                console.log("ERR");
            } );
            }

    , []);

    function updateSearchTerms (newSearchTerm){
        console.log(newSearchTerm);
        function getSearchedClassrooms(){
            axios.get(`http://localhost:8070/classroom/displaySearch/${newSearchTerm}`).then((res)=>{
                setAllClassrooms(res.data);
    
            }).catch((err)=>{
               console.log(err.message)
            })
        }
        function getAllClassrooms(){
            axios.get("http://localhost:8070/classroom/").then((res)=>{
                setAllClassrooms(res.data);
    
            }).catch((err)=>{
                console.log(err.message)
                alert(err.message)
            })
        }
    
        if (newSearchTerm !== ''){
            getSearchedClassrooms();
        }
        else{
            getAllClassrooms();
        }
        
        
    }
    

   
    return(
        <div> <AdminSideNav/>

        <div className="container" id="all">

        <div className="allExams">      
            
       
                
                
                    
                    <h2 style= {{textAlign: "center",display: "flex", margin:"20px"}}>All Classrooms</h2>
                    <div style={{ margin:"2rem"}}>
                        <br></br>
                    <Search
                        refreshFunction={updateSearchTerms}
                        />
                    </div>
                    <br/>
                    <div style={{padding: "5px 0px 5px opx",display: "block"}}>

                    <table class="table table-striped table-light">
                        <thead>
                            <tr>
                                <th scope="col">ClassroomID</th>
                                <th scope="col">Module</th>
                                <th scope="col">Time</th>
                                <th scope="col">Date</th>
                                <th scope="col">Option</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {AllClassrooms.map((val) => (
                                <tr class="bg-primary">
                                     <td class="bg-primary">{val.classroomid}</td>
                                    <td class="bg-primary">{val.module}</td>
                                    <td class="bg-primary">{val.time}</td>
                                    <td class="bg-primary">{val.date}</td>
                                    <td className="d-flex justify-content-between">

                                    <button className="btn btn-primary" onClick={()=>{
                            updateClassroom(val._id);
                                        }}
                                >
                                    Update
                                        </button>  
                            <NavLink to="/add" className="btn btn-success">Add Classroom</NavLink>
                            {/* <button className="btn btn-success">Read</button>  */}
                                    <button className="btn btn-danger" onClick={() => deleteClassroom(val._id)}>Delete</button>
                                    
                                    
                           

                                    </td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                
               </div><AdminViewFooter/>
            </div>
            </div>
            </div>
    )
 
}
