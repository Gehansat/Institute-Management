import React,{useState, useEffect} from "react";
import axios from "axios";
import UserViewHeader from "../CommonComponents/UserViewHeader";
import UserViewFooter from "../CommonComponents/UserViewFooter";
import { useNavigate } from "react-router-dom";

export default function MyPendingPayments(){


    const [payments, setPayments] = useState([]);
    const [PID, setPID] = useState("");
    const [slipToDownload, setSlipToDowload] = useState("");
    let navigate = useNavigate();

    const [SID, setSID] = useState("");
    const [Email, setEmail] = useState("");
    const [Amount, setAmount] = useState("");
    const [DepositSlip, setDepositSlip] = useState("");
    const [Module, setModule] = useState("");
    const [Year, setYear] = useState("");
    const [Semester, setSemester] = useState("");

    const User = JSON.parse(localStorage.getItem("profile"));

    function download(e) {
        e.preventDefault();
        let a = document.createElement("a");
        console.log(slipToDownload);
        a.href = require(`./DepositSlips/${slipToDownload}`);
        a.setAttribute("download", slipToDownload);
        a.click();
       }


    useEffect(()=>{
        function getPayments(){
            if (User == null){
                navigate("/login");
                window.location.reload(false);
            }
            axios.get(`http://localhost:8070/studentSubjectPayment/display/${User.ID}`).then((res)=>{
                setPayments(res.data);

            }).catch((err)=>{
                alert(err.message)
            })
        }
        getPayments();
    },[])

    function goToUpdate(e){
        e.preventDefault();
        navigate("/updatePendingPayment",{ state: { 
            pid: PID, 
            pSID:SID, 
            pEmail:Email, 
            pAmount:Amount,
            pModule:Module, 
            pYear:Year, 
            pSemester:Semester} 
        });

    }

    function deleteData(e){
        e.preventDefault();
        axios.delete(`http://localhost:8070/studentSubjectPayment/delete/${PID}`).then(()=>{
        alert("Payment Deleted")
        window.location.reload(false);
        }).catch((err)=>{
            
        alert(err)
    })

    }

    return(
        <div>
            <UserViewHeader/>
            <div className="container">
            <h2 style={{textAlign: "center", margin:"20px"}}>My Pending Payments</h2>

            <div style={{padding:"5px 100px 5px 100px"}}>
            <table class="table table-striped" style={{marginLeft:"0"}}>
            <thead>
                <tr class="table-primary">
                    <th>ID</th>
                    <th>Module Code</th>
                    <th>Year</th>
                    <th>Semester</th>
                    <th>Amount(Rs.)</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Deposit Slip</th>
                    <th></th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                {payments.map((payment) => (
                    <tr>
                        <td>{payment.SID}</td>
                        <td>{payment.Module}</td>
                        <td>{payment.Year}</td>
                        <td>{payment.Semester}</td>
                        <td>{payment.Amount}</td>
                        <td>{payment.date}</td>
                        <td>{payment.Status}</td>
                        <td><form onSubmit={download}>
                            <button style={{width:"100px"}} type="submit" value={payment.DepositSlip} class="btn btn-success" onClick={(e)=>{
                            setSlipToDowload(e.target.value);
                            }}>Download</button>
                            </form>
                        </td>

                        <td><form onSubmit={goToUpdate}>
                            <button style={{width:"100px"}} type="submit" value={payment._id} class="btn btn-warning" onClick={(e)=>{
                            setPID(e.target.value);
                            setSID(payment.SID);
                            setAmount(payment.Amount);
                            setEmail(payment.Email);
                            setModule(payment.Module);
                            setYear(payment.Year);
                            setSemester(payment.Semester);
                            }}>Update</button>
                            </form>
                        </td>

                        <td><form onSubmit={deleteData}>
                            <button style={{width:"100px"}} type="submit" value={payment._id} class="btn btn-danger" onClick={(e)=>{
                            setPID(e.target.value);
                            }}>Delete</button>
                            </form>
                        </td>

        
                    </tr>
          
                ))}
                </tbody>
            </table>
            </div>
        </div>
        <UserViewFooter/>
        </div>
    )
}