import React, {useState,useEffect} from "react";
import axios from "axios";
import { renderMatches } from "react-router-dom";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AdminSideNav from "../CommonComponents/AdminSideNav";
import AdminViewFooter from "../CommonComponents/AdminViewFooter";
import SubjectsHeader from "./SubjectsHeader";
function AllMaterials()
{
   
    const [materials, setMaterials] = useState([]);
    const [id,  setMaterialID] = useState("");
    const [LecMaterialID,  setid] = useState("");
    const [SupportedLinks,  setSupLink] = useState("");
    const [Message,  setmsg] = useState("");
    const [LectureMaterial,  setMat] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        function getMaterials(){
              axios.get("http://localhost:8070/material/displayMaterial")
                .then((res)=>{
                setMaterials(res.data);
                console.log (materials);

              }).catch((err)=> {
                  alert(err.message);
              })
              
        }
        getMaterials();
    }, [])


    const deleteUser = (id) => {
        axios
          .delete(`http://localhost:8070/material/delete/${id}`)
          .then((res) => {
            alert(`deleted successfully`);
            window.location.reload(false);
          })
          .catch((err) => {
            alert(err);
          });
      };
    
      function updateMat(e) {
        e.preventDefault();
        navigate("/updateMaterial",{ state: {id:id, prevId: LecMaterialID,prevLink:SupportedLinks, prevMsg:Message , prevMat:LectureMaterial} }); 
       }
    return(
        <div>
        <AdminSideNav/>
        <SubjectsHeader/>
        <div style={{display: "flex",  justifyContent:"flex-end", margin:"1rem"}}>

        <><div className="container" id="all">
        <div style={{padding:"5px 0px 5px 0px",width:"150vh"}}>
            <div className="allExams">

            <h4 style={{textAlign: "center", margin:"10px 5px 40px 5px"}}>All Lectures</h4>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Lecture No.</th>
                            <th scope="col">Supported Material</th>
                            <th scope="col">Message</th>
                            <th scope="col">Lecture Material</th>

                        </tr>
                    </thead>
                    <tbody>
                        {materials.map((item) => (
                            <tr>
                                {/*console.log ({item.LecMaterialID});*/}
                                <td>{item.LecMaterialID}</td>
                                <td>{item.SupportedLinks}</td>
                                <td>{item.Message}</td>
                                <td>{item.LectureMaterial}</td>
                                <td>
                                    <button onClick={() => deleteUser(item._id)}>Delete</button>

                                    <form onSubmit={updateMat}>
                                    <button type="submit" value={item._id} class="btn btn-warning" onClick={(e)=>{
                                setMaterialID(e.target.value);
                                setMat(item.LectureMaterial);
                                setmsg(item.Message);
                                setSupLink(item.SupportedLinks); 
                                setid(item.LecMaterialID);                   
                                }}>Update</button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div><div className="addnew">

                <a href="./addMaterial"><button class="btn btn-info">Add New Material</button></a>

            </div>
            </div>
            </>
            <AdminViewFooter/>
            </div>
            </div>

    )
}

export default AllMaterials;