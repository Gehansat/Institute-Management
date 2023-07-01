import React, {useState} from "react";
import axios from "axios";
import UserViewHeader from "../CommonComponents/UserViewHeader";
import UserViewFooter from "../CommonComponents/UserViewFooter";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdatePendingPayments(){

    const {state} = useLocation();
    const {pid} = state;
    const {pSID} = state;
    const {pEmail} = state;
    const {pAmount} = state;
    const {pModule} = state;
    const {pYear} = state;
    const {pSemester} = state;


    const [SID, setSID] = useState(pSID);
    const [Email, setEmail] = useState(pEmail);
    const [Amount, setAmount] = useState(pAmount);
    const [Module, setModule] = useState(pModule);
    const [Year, setYear] = useState(pYear);
    const [Semester, setSemester] = useState(pSemester);
    const [DepositSlip, setDepositSlip] = useState("");

    let navigate = useNavigate();

    function sendData(e){
        e.preventDefault();


        const formData = new FormData();
        formData.append("pid", pid);
        formData.append("SID", SID);
        formData.append("Email", Email);
        formData.append("Amount", Amount);
        formData.append("DepositSlip", DepositSlip);
        formData.append("Module", Module);
        formData.append("Year", Year);
        formData.append("Semester", Semester);
        
        axios.put(`http://localhost:8070/studentSubjectPayment/updatePending/`,formData).then(()=>{
            alert("Payment Updated")
            navigate("/pendingPayments");
            }).catch((err)=>{
                
            alert(err)
        })
        

    }

    

    return(
            <div>
                <UserViewHeader/>
                <div className="container" style={{maxWidth:"700px", marginTop:"20px", border: "3px solid #0d6efd",borderRadius:"10px", padding:"10px 40px 40px 40px",marginBottom:"200px"}}>
                <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>Make Subject Payment</h4>
                <form style={{display:"flex", flexDirection:"column"}} onSubmit={sendData}>
                    <div className="mb-3">
                        <label for="SID" className="form-label">Student ID: </label>
                        <input type="text" defaultValue={pSID} required placeholder="S001" pattern="[S][0-9]{3,}" className="form-control" id="SID" 
                        onChange={(e)=>{

                            setSID(e.target.value);

                        }}/>          
                    </div>

                    <div className="mb-3">
                        <label for="email" className="form-label">Email: </label>
                        <input type="email" required defaultValue={pEmail} placeholder="johndoe@gmail.com" className="form-control" id="email"
                        onChange={(e)=>{

                            setEmail(e.target.value);

                        }}/>          
                    </div>

                    <div className="mb-3">
                        <label for="moduleCode" className="form-label">Module Code: </label>
                        <input type="text"  required placeholder="M001" defaultValue={pModule} pattern="[M][0-9]{3,}" className="form-control" id="moduleCode" 
                        onChange={(e)=>{

                            setModule(e.target.value);

                        }}/>          
                    </div>

                    <div className="mb-3">
                        <label for="year" className="form-label">Year: </label>
                        <input type="number" defaultValue={pYear} required placeholder="1" min="1" max="4"className="form-control" id="year" 
                        onChange={(e)=>{

                            setYear(e.target.value);

                        }}/>          
                    </div>

                    <div className="mb-3">
                        <label for="semester" className="form-label">Semester: </label>
                        <input type="number" required defaultValue={pSemester} placeholder="2"  min="1" max="2" className="form-control" id="semester" 
                        onChange={(e)=>{

                            setSemester(e.target.value);

                        }}/>          
                    </div>

                    <div className="mb-3">
                        <label for="amount" className="form-label">Amount (Rs): </label>
                        <input type="number" required defaultValue={pAmount} placeholder="2500.00" min="2500.00" className="form-control" id="amount"
                        onChange={(e)=>{

                            setAmount(e.target.value);

                        }}/>          
                    </div>

                    <div class="mb-3">
                        <label for="depositSlip" class="form-label">Upload bank depost slip </label>      
                    </div>
                    <div class="mb-3">
                    <input required name="DepositSlip" type="file" accept=".png, .jpg, .jpeg" onChange={(e)=>{

                    setDepositSlip(e.target.files[0]);

                        }}/>    
                    </div>

                    <button style={{alignSelf:"center", marginTop:"20px"}} type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            
            <UserViewFooter/>
            </div>
    )
}