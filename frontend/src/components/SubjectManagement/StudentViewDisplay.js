import React, {useState,useEffect} from "react";
import axios from "axios";
import { renderMatches } from "react-router-dom";
import { Link } from "react-router-dom";
import UserViewHeader from "../CommonComponents/UserViewHeader";
import UserViewFooter from "../CommonComponents/UserViewFooter";
import ReactToPrint from 'react-to-print';

function AllLecs()
{
   
    const [materials, setMaterials] = useState([]);
    const componentRef = React.createRef();

    useEffect(() => {
        function getMaterials(){
              axios.get("http://localhost:8070/material/display")
                .then((res)=>{
                setMaterials(res.data);
              }).catch((err)=> {
                  alert(err.message);
              })
        }
        getMaterials();
    }, [])


    return(
        <div>
         <UserViewHeader/>
         <ReactToPrint
          trigger={() => {
            // NOTE: could just as easily return <SomeComponent />. Do NOT pass an `onClick` prop
            // to the root node of the returned component as it will be overwritten.
            return <button id="rep">Print this out!</button>;
          }}
          content={() => componentRef.current}
        />

        <div className="container" id="all"  style={{maxWidth:"700px",height:"100%",marginRight:"30%", marginLeft:"30%",borderRadius:"10px", padding:"10px 40px 40px 40px",border:"1px solid black"}}>
                <div className="allExams" ref={componentRef}
>
                    
                    <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>Welcome To Business Studies Module</h4>
                    {materials.map((item) => (
                                
                                <div>
                                    <h4><b>Lecutre: {item.LecMaterialID}</b></h4>
                                
                                    <p>{item.Message}</p>  
                                    <p><b>Lecture Materials:</b></p>                                     
                                    <p>{item.LectureMaterial}</p>
                                    <p><b>Additional References:</b></p>
                                    <p>{item.SupportedLinks}</p>
                                <hr></hr>
                                </div>
                            
                        ))}
                        
                    {/*<table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Lecture No.</th>
                                <th scope="col">Supported Material</th>
                                <th scope="col">Message</th>
                                <th scope="col">One-drive link for the lecture</th>
                               
                            </tr>
                        </thead>
                        <tbody>
                            {materials.map((item) => (
                                <tr>
                                    <td>{item.LecMaterialID}</td>
                                    <td>{item.SupportedLinks}</td>
                                    <td>{item.Message}</td>
                                    <td>{item.LectureMaterial}</td>
                                </tr>
                            ))}
                        </tbody>
                            </table>*/}
                </div>
               
            </div>
            <UserViewFooter/>
            </div>
    )
}

export default AllLecs;