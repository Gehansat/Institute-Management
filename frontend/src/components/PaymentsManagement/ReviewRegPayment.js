import React,{useState, useEffect} from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import PaymentsHeader from "./PaymentsHeader";

export default function ReviewRegPayments(){
    const [payment, setPayment] = useState("");
    const [stateToBeUpdated, setNewState] = useState("");

    const {state} = useLocation();
    const {pid} = state;

    const [currentState, setCurrentStatus] = useState("");

    let navigate = useNavigate();

    function download() {
        let a = document.createElement("a");
        a.href = require(`./DepositSlips/${payment.DepositSlip}`);
        a.setAttribute("download", payment.SID);
        a.click();
       }

    useEffect(()=>{
        function getPayment(){
            axios.get(`http://localhost:8070/registrationPayments/displayOne/${pid}`).then((res)=>{
                setPayment(res.data);

            }).catch((err)=>{
                // alert(err.message)
                console.log(err.message)
            })
        }
        getPayment();
    },[])

    function acceptPayment(e){
        e.preventDefault();
        setCurrentStatus(payment.Status);

        const statusData = {
            stateToBeUpdated,
            currentState
        }

        axios.put(`http://localhost:8070/registrationPayments/update/${pid}`, statusData).then(()=>{
            alert('payment '+ stateToBeUpdated)
            navigate("/ShowRegistrationPayments");
        }).catch((err)=>{
           
        alert(err)
    })
}

    return(
        <div>
            <PaymentsHeader/>
            <a href="/ShowRegistrationPayments"><button className="btn btn-primary" style={{marginTop:"50px", marginLeft:"100px", width:"100px"}}>&larr; Back</button></a>
            <div className="container" style={{maxWidth:"1000px", marginTop:"50px", marginBottom:"50px",border: "3px solid #0d6efd",borderRadius:"10px", padding:"10px 40px 40px 40px"}}>
                
                <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>Payment Details</h4>
                <div style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                <p>Student ID: {payment.SID}</p>
                <p>Email: {payment.Email}</p>
                <p>Amount: Rs. {payment.Amount}</p>
                <p>Date: {payment.date}</p>
                <p>Deposit Slip: </p>

                <button style={{width:"100px"}} class="btn btn-success" onClick={download}>Download</button>
                
                    <div style={{display:"flex", marginTop:"40px"}}>
                        
                    <form style={{margin:"20px"}} onSubmit={acceptPayment}>
                    <button type="submit" class="btn btn-primary" onClick={(e)=>{

                    setNewState("accepted");

                }}>Accept</button>
                </form>
                
                <form style={{margin:"20px"}} onSubmit={acceptPayment}>
                    <button type="submit" class="btn btn-danger" onClick={(e)=>{

                setNewState("rejected");

                    }}>Reject</button>
                </form>
                    </div>

                </div>
            </div>
        </div>
    )
}