import React, {useState} from "react";
import axios from "axios";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import PaymentsHeader from "./PaymentsHeader";

export default function PaymentsReport(){
    const [year, setYear] = useState("");
    const [regData, setRegData] = useState([]);
    const [subData, setSubData] = useState([]);
    const [showReport, setShowReport] = useState(false);

    


    function generate(e){
        e.preventDefault();

        axios.get(`http://localhost:8070/registrationPayments/reportRegPay/${year}`).then((res)=>{
            setRegData(res.data);

            }).catch((err)=>{
                // alert(err.message)
                console.log(err.message)
            })

            axios.get(`http://localhost:8070/subjectPayments/reportSubPay/${year}`).then((res)=>{
            setSubData(res.data);

            }).catch((err)=>{
                // alert(err.message)
                console.log(err.message)
            })

            

            setShowReport(true)
    
    }

    return(
        <div>

            <AdminSideNav/>
            <PaymentsHeader/>

            <div className="container">
            <div style={{display:"flex", flexDirection:"column",alignItems:"center",marginTop:"20px"}}>
                <form style={{display:"flex", flexDirection:"column", alignItems:"center"}} className="form-inline" onSubmit={generate}>
                        
                    <select style={{width:"200px"}} class="form-control" name="years" id="year" onChange={(e)=>{

                    setYear(e.target.value);

                    }}>
                        <option value="" selected disabled hidden>Select Year</option>
                        <option value="2022">2022</option>
                        <option value="2021">2021</option>
                    </select>

                    <button  style= {{marginTop:"5px"}} type="submit" className="btn btn-primary mb-2">Generate report</button>
                </form>
            </div>

            {showReport?(<div style={{display:"flex", flexDirection:"column",alignItems:"flex-start",marginTop:"20px", marginLeft:"250px", padding:"20px",border:"1px solid blue"}}>

            <h4 style={{marginBottom:"50px"}}><b><u>Annual Income Report For The Year {year}</u></b></h4>

                    <div style={{display:"flex", width:"800px",flexDirection:"column", justifyContent:"space-between",padding:"0px 50px 0px 50px", fontSize:"18px"}}>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{paddingBottom:"10px",}}>Number of Registrations </p>
                            <p style={{paddingBottom:"10px"}}>{regData.numRegPay}</p>
                        </div>

                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{paddingBottom:"10px"}}>Number of Subject payments</p>
                            <p style={{paddingBottom:"10px"}}>{subData.numSubPay}</p>
                        </div>

                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{paddingBottom:"10px"}}>Total Income from registrations (Rs.)</p>
                            <p style={{paddingBottom:"10px"}}>{regData.totRegPay}</p>
                        </div>

                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{paddingBottom:"10px"}}>Total Income from subject Payments (Rs.)</p>
                            <p style={{paddingBottom:"10px"}}>{subData.totSubPay}</p>
                        </div>

                        <hr></hr>

                        {regData.totRegPay && subData.totSubPay?(
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                            <p style={{paddingBottom:"10px", paddingTop:"10px"}}><b>Total Income (Rs.)</b></p>
                            <p style={{paddingBottom:"10px", paddingTop:"10px"}}><b>{regData.totRegPay +subData.totSubPay }</b></p>
                        </div>
                        ):<p></p>}

                        

                    </div>
                
            </div>):<p></p>}
            </div>

            <AdminViewFooter/>
            
        </div>
    )
}