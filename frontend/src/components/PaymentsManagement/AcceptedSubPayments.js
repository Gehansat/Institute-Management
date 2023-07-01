import React, {useState, useEffect} from "react";
import axios from "axios";
import PaymentsHeader from "./PaymentsHeader";
import RegPaySearch from "./RegPaySearch";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";

export default function AcceptedSubPayments(){

    const [payments, setPayments] = useState([]);

    useEffect(()=>{
        function getPayments(){
            axios.get("http://localhost:8070/subjectPayments/displayAccepted/").then((res)=>{
                setPayments(res.data);

            }).catch((err)=>{
                console.log(err.message)
                alert(err.message)
            })
        }
        getPayments();
    },[])

    

function updateSearchTerms (newSearchTerm){
    function getSearchedPayments(){
        axios.get(`http://localhost:8070/subjectPayments/displayAcceptedSearch/${newSearchTerm}`).then((res)=>{
            setPayments(res.data);

        }).catch((err)=>{
           console.log()
        })
    }
    function getPayments(){
        axios.get("http://localhost:8070/subjectPayments/displayAccepted/").then((res)=>{
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
            <div className="container">
                <h2 style={{textAlign: "center", margin:"20px"}}> Accepted Subject Payments</h2>
                <div style={{padding:"5px 0px 5px 0px"}}>
                <table class="table table-striped table-dark paytable" style={{marginBottom:"10px", marginLeft:"0"}}>
                    <thead>
                        <tr>
                            <th scope="col">SID</th>
                            <th scope="col">Module Code</th>
                            <th scope="col">Year</th>
                            <th scope="col">Semester</th>
                            <th scope="col">Amount(Rs.)</th>
                            <th scope="col">Date</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {payments.map((payment) => (
                            <tr class="bg-primary">
                                <td class="bg-primary">{payment.SID}</td>
                                <td class="bg-primary">{payment.Module}</td>
                                <td class="bg-primary">{payment.Year}</td>
                                <td class="bg-primary">{payment.Semester}</td>
                                <td class="bg-primary">{payment.Amount}</td>
                                <td class="bg-primary">{payment.date}</td>
                                <td class="bg-primary">{payment.Status}</td>
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