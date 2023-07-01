import React, {useEffect, useState} from "react"
import axios from "axios";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import { UseNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TicketSearch from "./TicketSearch";


function AdminViewTicket(){

    const[tickets, setTicket] = useState([]);
    const [ticketId , setTicketID] = useState("");


    useEffect(()=>{
       function getTicket(){
            axios.get(`http://localhost:8070/ticket/adminViewTicket`).then((res)=>{
                setTicket(res.data);
            }).catch((err)=>{
                console.log(err.message)
            })
        }
        getTicket();
        
    },[]);

    function UpdateStatus(){
        console.log(ticketId);
        axios.put(`http://localhost:8070/ticket/updateStatus/${ticketId}`).then((res)=>{
                setTicket(res.data);
                alert("Status updated!!!")
            }).catch((err)=>{
                alert(err.message)
            })
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
        <>
        <AdminSideNav/>
        <br/>
        
        <div style={{display: "flex",  justifyContent:"flex-end", margin:"1rem"}}>
        
            <div className="container" id="all">
                <TicketSearch
                    refreshFunction={updateSearchTerms}
                />
                <div style={{padding:"5px 0px 5px 0px",width:"150vh"}}>
                <div className="allTicket">
                   
                    <h2 className="text-center"> All Tickets </h2>
                    <br/>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Student ID</th>
                                <th scope="col">Student Name</th>
                                <th scope="col">Student Contact No.</th>
                                <th scope="col">Student Email</th>
                                <th scope="col">Question Type</th>
                                <th scope="col">Description</th>
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
                                    <form onSubmit={UpdateStatus}>
                                        <button type="submit" class="btn btn-info" onClick={(e)=>setTicketID(item._id)}> Solved </button>
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
            
        

        <AdminViewFooter/>
    </div>
        </>
    )


}

export default AdminViewTicket;