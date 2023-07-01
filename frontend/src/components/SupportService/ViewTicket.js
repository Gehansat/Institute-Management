import React, {useEffect, useState} from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserViewHeader from "../CommonComponents/UserViewHeader";
import UserViewFooter from "../CommonComponents/UserViewFooter";
import TicketSearch from "./TicketSearch";


function ViewTicket(){

    const[tickets, setTicket] = useState([]);
    const [_id, setTicketId ] = useState("");
    const [st_id,  setStID] = useState("");
    const [st_name,  setStName] = useState("");
    const [st_contact_no,  setStContactNo] = useState("");
    const [st_email, setStEmail]=useState("");
    const [question_type, setQType]=useState("");
    const [description, setDescription]=useState("");
    //const[status, setStatus] = useState([]);
    
    let navigate = useNavigate();

    useEffect(()=>{
       function getTicket(){
            axios.get(`http://localhost:8070/ticket/viewTicket`).then((res)=>{
                setTicket(res.data);
            }).catch((err)=>{
                console.log(err.message)
            })
        }
        getTicket();

    },[]);

    const deleteTicket=(st_id)=>{
        axios.delete(`http://localhost:8070/ticket/deleteTicket/${st_id}`).then((res)=>{
                alert("Ticket deleted successfully");
                window.location.reload(false);
            }).catch((err)=>{
                console.log(err.message)
            })
    };

    function updateUser(e) {
        e.preventDefault();
        navigate(`/updateTicket/${_id}`,{ state: {TicketId: _id , prevStId:st_id , prevStName:st_name, prevStContactNo:st_contact_no, prevStEmail:st_email, prevQType:question_type, prevDescription:description} }); 
    }

    function updateSearchTerms(newSearchTerm){
        function getSearchedTicket(){
            axios.get(`http://localhost:8070/ticket/ticketss/${newSearchTerm}`).then((res)=>{
                setTicket(res.data);
            }).catch((err)=>{
                console.log()
            })
        }
        function getTicket(){
            axios.get("http://localhost:8070/ticket/adminViewTicket").then((res)=>{
                setTicket(res.data);
            }).catch((err)=>{
                console.log(err.message)
                alert(err.message)
            })
        }
        if (newSearchTerm !=''){
            getSearchedTicket();
        }
        else{
            getTicket();
        }
    }
    
    return(

        <div>
        <UserViewHeader/>

        <br/>

            {/* <div style={{display: "flex",  justifyContent:"flex-end", margin:"1rem"}}> */}
        
            <div className="container" id="all">

                <div className="allTicket">
                   <div style={{padding:"5px 0px 5px 0px",width:"150vh"}}>
                    <h2 className="text-center"> All Tickets </h2>

                    <TicketSearch
                        refreshFunction={updateSearchTerms}
                    />


                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Student ID</th>
                                <th scope="col">Student Name</th>
                                <th scope="col">Student Contact No.</th>
                                <th scope="col">Student Email</th>
                                <th scope="col">Question Type</th>
                                <th scope="col">Description</th>
                                <th scope="col"></th>
                                <th scope="col"></th>
                                <th scope="col">Status</th>

                            </tr>
                        </thead>
                        <tbody>
                            {tickets.map((item)=>(
                                <tr>
                                    <td>{item.st_id}</td>
                                    <td>{item.st_name}</td>
                                    <td>{item.st_contact_no}</td>
                                    <td>{item.st_email}</td>
                                    <td>{item.question_type}</td>
                                    <td>{item.description}</td>
                                    
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>deleteTicket(item._id)}>Delete</button>
                                    </td>
                                    

                                    <td>
                                        <form onSubmit={updateUser}>
                                            <button type="submit" value={item._id} class="btn btn-warning" onClick={(e)=>{
                                                setTicketId(e.target.value);
                                                setStID(item.st_id);
                                                setStName(item.st_name);
                                                setStContactNo(item.st_contact_no);
                                                setStEmail(item.st_email);
                                                setQType(item.question_type);
                                                setDescription(item.description);                     
                                            }}>Update</button>
                                        </form>

                                    </td>
                                    <td>{item.ad_status}</td>

                                    
                                    

                                </tr>
                            ))}

                                

                        </tbody>
                    </table>
                </div>
                </div>
            </div>

            <br/>
            <form>
            <div className="form-group row">
                <a href={`/addTicket`}>
                    <button type="button" className="btn btn-success"> +Create New </button>
                </a>
            </div>
        
           <div>

                <a href={`/Allnotices`}>
                    <button type="button" class="btn btn-link">Back to Home page</button>
                </a>
            </div>
            </form>
            


      <br/><br/><br/>
        <UserViewFooter/>
        </div>
        // </div>
    
    )

}

export default ViewTicket;