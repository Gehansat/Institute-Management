import React, {useState} from "react";
import axios from "axios";
import UserViewHeader from "../CommonComponents/UserViewHeader";
import UserViewFooter from "../CommonComponents/UserViewFooter";

export default function AddRegPayment(){


    const [SID, setSID] = useState("");
    const [Email, setEmail] = useState("");
    const [Amount, setAmount] = useState("");
    const [DepositSlip, setDepositSlip] = useState("");

    function setdata(){
        var id = document.getElementById("SID");
        id.value = "S002";
        setSID("S002");

        var mail = document.getElementById("email");
        mail.value = "mad2022project@gmail.com";
        setEmail("mad2022project@gmail.com");

        var amount = document.getElementById("amount");
        amount.value = 5000;
        setAmount(5000);
    }

    function sendData(e){
        e.preventDefault();

        const formData = new FormData();
        formData.append("SID", SID);
        formData.append("Email", Email);
        formData.append("Amount", Amount);
        formData.append("DepositSlip", DepositSlip);
            
        
        axios.post("http://localhost:8070/studentRegistrationPayment/add",formData).then(()=>{
            alert("Payment Successful")
            window.location.reload(false);
            }).catch((err)=>{
                
            alert("Error adding payment")
        })
        
    }


    return(
    
            <div>
                <UserViewHeader/>
                <div className="container" style={{maxWidth:"500px", marginTop:"20px", border: "3px solid #0d6efd",borderRadius:"10px", padding:"10px 40px 40px 40px", marginBottom:"200px"}}>
                <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>Make Registration Payment</h4>
                <div>
                <form style={{display:"flex", flexDirection:"column"}} onSubmit={sendData}>
                    <div className="mb-3">
                        <label for="SID" className="form-label">Student ID: </label>
                        <input type="text" required className="form-control" placeholder="S001" pattern="[S][0-9]{3,}" id="SID" 
                        onChange={(e)=>{

                            setSID(e.target.value);

                        }}/>          
                    </div>

                    <div className="mb-3">
                        <label for="email" className="form-label">Email: </label>
                        <input type="email" required placeholder="johndoe@gmail.com" className="form-control" id="email"
                        onChange={(e)=>{

                            setEmail(e.target.value);

                        }}/>          
                    </div>

                    <div className="mb-3">
                        <label for="amount" className="form-label">Amount (Rs): </label>
                        <input type="number" required placeholder="5000.00" min="5000.00" className="form-control" id="amount"
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
            </div>
            <button class="btn btn-warning" style={{position:"fixed", bottom:"0", right:"0", margin:"0 300px 200px 0", borderRadius:"50%", height:"100px", width:"100px"}} onClick={setdata}>Demo</button>
            <UserViewFooter/>
            </div>
    )
}