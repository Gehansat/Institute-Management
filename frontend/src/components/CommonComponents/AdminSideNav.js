//import useState hook to create menu collapse state
import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";


//import react pro sidebar components
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";

//import icons from react icons
import {FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { BsFillBellFill } from "react-icons/bs";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsBook } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";




//import sidebar css from react-pro-sidebar module and our custom css 
import "react-pro-sidebar/dist/css/styles.css";
import "./AdminSideNavStyles.css";


const AdminSideNav = () => {

  let navigate = useNavigate();

    const logout = (e) => {

        localStorage.removeItem("profile");
        navigate("/signup");

    }
  
    //create initial menuCollapse state using useState hook
    const [menuCollapse, setMenuCollapse] = useState(false)

    //create a custom function that will change menucollapse state from false to true and true to false
  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  return (
    <>
      <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              <p style={{marginBottom:"0", padding:"10px"}}>{menuCollapse ? <img width={50} height={50} src="../../logo_circle.png"/> : <img width={150} height={60} src="../../logo_white.png"/>}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square">
              <MenuItem active={false} icon={<BsFillBellFill />}><Link to="/notice"> Notices</Link></MenuItem>
              <MenuItem icon={<BsFillCreditCard2BackFill />}><Link to="/PaymentsDashboard">Payments</Link></MenuItem>
              <MenuItem icon={<BsFillPeopleFill />}><Link to="/Staff">Staff</Link></MenuItem>
              <MenuItem icon={<BsBook />}><Link to="/studentDetails">Student</Link></MenuItem>
              <MenuItem icon={<GrUserSettings />}><Link to="/adminViewTicket">Support Service</Link></MenuItem>
              <MenuItem icon={<GrUserSettings />}><Link to="/viewcls">Classroom Management</Link></MenuItem>
              <MenuItem icon={<GrUserSettings />}><Link to="/SubjectsDashboard">Subjects</Link></MenuItem>
              <MenuItem icon={<GrUserSettings />}><Link to="/ExamDashboard">Exam Management</Link></MenuItem>
              <MenuItem icon={<GrUserSettings />}><Link to="/studentDash">Exam Management Student</Link></MenuItem>
              <MenuItem icon={<GrUserSettings />}><Link to="/view">Student Attendance</Link></MenuItem>
             
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />} onClick={logout}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
    </>
  );
};

export default AdminSideNav;