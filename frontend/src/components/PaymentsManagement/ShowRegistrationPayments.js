import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PaymentsHeader from "./PaymentsHeader";
import RegPaySearch from "./RegPaySearch";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import './paymentStyles.css';


export default function ShowRegistrationPayments(){

    const [payments, setPayments] = useState([]);
    const [PID, setPID] = useState("");
    const stateToBeUpdated = "reviewing"
    const [currentState, setCurrentStatus] = useState("");

    let navigate = useNavigate();


    useEffect(()=>{
        function getPayments(){
            axios.get("http://localhost:8070/registrationPayments/displayPending/").then((res)=>{
                setPayments(res.data);

            }).catch((err)=>{
                console.log(err.message)
                alert(err.message)
            })
        }
        getPayments();
    },[])

    function reviewData(e){
        e.preventDefault();

        const statusData = {
            stateToBeUpdated,
            currentState
        }

        axios.put(`http://localhost:8070/registrationPayments/update/${PID}`, statusData).then(()=>{
        }).catch((err)=>{
           
        alert(err)
    })

    navigate("/ReviewRegPayment",{ state: { pid: PID } });
}

function updateSearchTerms (newSearchTerm){
    function getSearchedPayments(){
        axios.get(`http://localhost:8070/registrationPayments/display/${newSearchTerm}`).then((res)=>{
            setPayments(res.data);

        }).catch((err)=>{
           console.log()
        })
    }
    function getPayments(){
        axios.get("http://localhost:8070/registrationPayments/displayPending/").then((res)=>{
            setPayments(res.data);

        }).catch((err)=>{
            console.log(err.message)
            alert(err.message)
        })
    }

    if (newSearchTerm != ''){
        getSearchedPayments();
    }
    else{
        getPayments();
    }
    
    
}

    return(
        <div>
            <AdminSideNav/>
            <PaymentsHeader/>
            <div style={{display: "flex", justifyContent:"flex-end", margin:"2rem"}}>
            <RegPaySearch
            refreshFunction={updateSearchTerms}
            />
            </div>
            <div className="container" style={{marginBottom:"100px"}}>
                <h2 style={{textAlign: "center", margin:"20px"}}>Registration Payments</h2>
                <div style={{padding:"5px 0px 5px 0px"}}>
                <table class="table table-striped table-dark paytable" style={{marginLeft:"0", background:"#0000"}}>
                <thead>
                    <tr>
                        <th scope="col">SID</th>
                        <th scope="col">Amount (Rs.)</th>
                        <th scope="col">Date</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>

                    <tbody>
                    {payments.map((payment) => (
                        <tr class="bg-primary">
                            <td class="bg-primary">{payment.SID}</td>
                            <td class="bg-primary">{payment.Amount}</td>
                            <td class="bg-primary">{payment.date}</td>
                            <td class="bg-primary">{payment.Status}</td>
                            <td class="bg-primary"><form onSubmit={reviewData}>
                                <input value={payment.Status} hidden="true" onChange={(e)=>{
                                setCurrentStatus(e.target.value);
                                }}/>
                                <button type="submit" style={{width:"100px"}} value={payment._id} class="btn btn-warning" onClick={(e)=>{
                                setPID(e.target.value);                           
                                }}>Review</button>
                                </form>
                            </td>
                        </tr>
            
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            <AdminViewFooter/>
        </div>

    )
}