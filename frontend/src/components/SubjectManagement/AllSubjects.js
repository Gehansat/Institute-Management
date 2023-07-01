import React, {useState,useEffect} from "react";
import axios from "axios";
import { renderMatches } from "react-router-dom";
import { Link } from "react-router-dom";
//import "./subject.css";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import SubjectSearch from "./SubjectSearch";
import SubjectsHeader from "./SubjectsHeader";
function AllSubjects()
{
   
    const [subjects, setSubjects] = useState([]);
    const [SubjectId,  setSubjectID] = useState("");
    const [Name,  setName] = useState("");
    const [Lecturer,  setLecturer] = useState("");
    const [ID,  setID] = useState("");

    let navigate = useNavigate();
    
    useEffect(() => {
        function getSubjects(){
              axios.get("http://localhost:8070/subject/displaySubject").then((res)=>{
                setSubjects(res.data);
              }).catch((err)=> {
                  alert(err.message);
              })
        }
        getSubjects();
    }, [])

    
    const deleteUser = (SubjectId) => {
        axios
          .delete(`http://localhost:8070/subject/delete/${SubjectId}`)
          .then((res) => {
            alert(`deleted successfully`);
            window.location.reload(false);
          })
          .catch((err) => {
            alert(err);
          });
      };
     function updateUser(e) {
         e.preventDefault();
         navigate("/updateSubject",{ state: {SubjectId: SubjectId , prevID: ID,prevName:Name, prevLecturer:Lecturer} }); 
        }

        function updateSearchTerms (newSearchTerm){
            function getSearchedSubjects(){
                axios.get(`http://localhost:8070/subject/displayss/${newSearchTerm}`).then((res)=>{
                    setSubjects(res.data);
        
                }).catch((err)=>{
                   console.log()
                })
            }
            function getSubjects(){
                axios.get("http://localhost:8070/subject/displaySubject").then((res)=>{
                  setSubjects(res.data);
        
                }).catch((err)=>{
                    console.log(err.message)
                    alert(err.message)
                })
            }
        
            if (newSearchTerm != ''){
                getSearchedSubjects();
            }
            else{
                getSubjects();
            }
            
            
        }
    
    return(

        <>
        <AdminSideNav/>
        <SubjectsHeader/>
        <div style={{display: "flex",  justifyContent:"flex-end", margin:"1rem"}}>
        
        <div className="container" id="all">
        <SubjectSearch
            refreshFunction={updateSearchTerms}
            />
        <div style={{padding:"5px 0px 5px 0px",width:"150vh"}}>
            <div className="allExams">

            <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>All Subjects</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Module ID</th>
                            <th scope="col">Module Name</th>
                            <th scope="col">Lecturer</th>

                        </tr>
                    </thead>
                    <tbody>
                        {subjects.map((item) => (
                            <tr>
                                <td>{item.ID}</td>
                                <td>{item.Name}</td>
                                <td>{item.Lecturer}</td>
                                <td>
                                    <button  onClick={() => deleteUser(item._id)}>Delete</button>

                                    <form onSubmit={updateUser}>
                                    <button type="submit" value={item._id} class="btn btn-warning" onClick={(e)=>{
                                setSubjectID(e.target.value);
                                setLecturer(item.Lecturer);
                                setName(item.Name);
                                setID(item.ID);                    
                                }}>Update</button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div><div className="addnew">

                <a href="./addS"><button class="btn btn-info">Add New Subject</button></a>

            </div>
            <AdminViewFooter/>
            </div>
            </div>
            </>
            
    )
}

export default AllSubjects;