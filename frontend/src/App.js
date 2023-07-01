/*<<<<<<< HEAD
import "./App.css";
import Sidebar from "../src/components/CommonComponents/sidebar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import StudentDetails from "./studentManager/StudentDetails";
import Profile from "./profile/Profile";
import EditStudent from "./studentManager/editStudent/editStudent";
//=======*/
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AddStudent from './studentManager/addStudent/AddStudent';
import StudentDetails from './studentManager/StudentDetails';
import Profile from './profile/Profile';
import EditStudent from './studentManager/editStudent/editStudent';
//>>>>>>> a3bb2f9970fdfef42371fc4c33888b5f9ca2194b

// payment management imports
import AddRegPayment from "./components/PaymentsManagement/AddRegPayment";
import AddSubjectPayment from "./components/PaymentsManagement/AddSubjectPayment";
import MyPendingPayments from "./components/PaymentsManagement/MyPendingPayments";
import ShowRegistrationPayments from "./components/PaymentsManagement/ShowRegistrationPayments";
import ShowSubjectPayments from "./components/PaymentsManagement/ShowSubjectPayments";
import ReviewRegPayment from "./components/PaymentsManagement/ReviewRegPayment";
import ReviewSubPayment from "./components/PaymentsManagement/ReviewSubPayment";
import PaymentsDashboard from './components/PaymentsManagement/PaymentsDashboard';
import PaymentsReport from './components/PaymentsManagement/PaymentsReport';
import AcceptedRegPayments from './components/PaymentsManagement/AcceptedRegPayments';
import AcceptedSubPayments from './components/PaymentsManagement/AcceptedSubPayments';
import UpdatePendingPayments from './components/PaymentsManagement/UpdatePendingPayments';

//login imports
import AccessControl from './components/login/AccessControl';
import Signup from './components/login/Signup';
import Login from './components/login/Login';

//NoticeBoard Management
import Notices from './components/NoticeBoardManagement/notice';
import AddNotice from './components/NoticeBoardManagement/addnotice';
import UpdateNotice from './components/NoticeBoardManagement/updateNotice';
import AllNotices from './components/UserViewNoticeBoard/Allnotices';
import ViewNotice from './components/UserViewNoticeBoard/updateNotice';
import AddReadStd from './components/UserViewNoticeBoard/addfrom';
import Stdlist from './components/NoticeBoardManagement/readstdrepo';

//classRoom Management
import AddClassroom from "./components/ClassroomManagement/AddClassroom";
import AllClassrooms from './components/ClassroomManagement/AllClassrooms';
import AddAttendance from './components/AttendanceManagement/AddAttendance';
import ViewAttendance from './components/AttendanceManagement/ViewAttendance';
import AllprAttendance from './components/AttendanceManagement/AllprAttendance';
// result management imports
import Results from "./components/ExamManager/AllexamResults"
import GradeExam from "./components/ExamManager/UpdateResults";
import AddSExam from "./components/ExamManager/AddExam";
import AllStudents from "./components/ExamManager/AllStudents";
import UpdateE from "./components/ExamManager/UpdateExam"
import StudentDash from "./components/ExamManager/dashbaordStudent";
import Dashbaord from "./components/ExamManager/dashbaord";
import Elist from "./components/ExamManager/examList";
import AllExamsAtt from "./components/ExamManager/AllexamAttempt";
import TakeExam from "./components/ExamManager/createEAttempt";
import RequestR from "./components/ExamManager/UpdateRequest";
import AnswerFD from "./components/ExamManager/updateFd";
import ResultsS from "./components/ExamManager/AllresultsS";
import AddFd from "./components/ExamManager/AddFeedback";
import AllFd from "./components/ExamManager/AllFeedback";
import ReportS from "./components/ExamManager/ReportS";
import AllFdL from "./components/ExamManager/AllFeedbackL";

// support service management imports
import AddTicket from './components/SupportService/AddTicket';
import ViewTicket from './components/SupportService/ViewTicket';
import UpdateTicket from './components/SupportService/UpdateTicket';
import AdminViewTicket from './components/SupportService/AdminViewTicket';


// subject management imports
import AddSubject from './components/SubjectManagement/AddSubject';
import AllSubjects from './components/SubjectManagement/AllSubjects';
import AddMaterial from './components/SubjectManagement/AddMaterial';
import AllMaterials from './components/SubjectManagement/AllMaterials';
import UpdateSubject from  './components/SubjectManagement/UpdateSubject';
import UpdateMaterial from './components/SubjectManagement/updateMaterial';
//import UpdateStudent from  './components/UpdateSubject';
import AllLecs from './components/SubjectManagement/StudentViewDisplay';
import SubjectsDashboard from './components/SubjectManagement/SubjectsDashboard';




//StaffManagement Imports
import AllStaff from './components/StaffManagment/AllStaff';
import AddStaff from './components/StaffManagment/AddStaff';
import UpdateStaff from './components/StaffManagment/UpdateStaff';
import Salcall from './components/StaffManagment/SalaryCal';






function App() {
  return (
    <div className="App">
      <>
        {/* This is the alias of BrowserRouter i.e. Router */}
        <BrowserRouter>
          <Routes>

            {/* login routes */}
            <Route path="/signup" exact element={<Signup/>} />
            <Route path="/accessControl" exact element={<AccessControl/>} />
            <Route path="/login" exact element={<Login/>} />
            <Route exact path="/studentDetails" element={<StudentDetails />} />
            <Route exact path="/" element={<Signup />} />
            <Route path="/addStudent" element={<AddStudent />} />
            <Route path="/profile" element={<Profile />} />
            <Route exact path="/editStudent" element={<EditStudent />} />


            {/* payment management routes */}
            <Route path="/regPayment" exact element={<AddRegPayment />} />
            <Route path="/subPayment" exact element={<AddSubjectPayment />} />
            <Route path="/pendingPayments" exact element={<MyPendingPayments />}/>
            <Route path="/ShowRegistrationPayments"exact element={<ShowRegistrationPayments />}/>
            <Route path="/ReviewRegPayment" exact element={<ReviewRegPayment />}/>
            <Route path="/ShowSubjectPayments" exact element={<ShowSubjectPayments />}/>
            <Route path="/ReviewSubPayment" exact element={<ReviewSubPayment />} />
            <Route path='/PaymentsDashboard' exact element={<PaymentsDashboard/>}/>
            <Route path='/PaymentsReport' exact element={<PaymentsReport/>}/>
            <Route path='/AcceptedRegPayments' exact element={<AcceptedRegPayments/>}/>
            <Route path='/AcceptedSubPayments' exact element={<AcceptedSubPayments/>}/>
            <Route path='/updatePendingPayment' exact element={<UpdatePendingPayments/>}/>

            {/* support service management routes */}
            <Route path="/addTicket" element={<AddTicket />} />
            <Route path="/viewTicket" element={<ViewTicket />} />
            <Route path="/updateTicket/:id" exact element={<UpdateTicket/>}/>
            <Route path="/adminViewTicket" element={<AdminViewTicket />} />



            {/* NoticeBoard Management routes */}
            <Route path="/notice" exact element={<Notices/>} /> 
            <Route path="/NewNotice" exact element={<AddNotice/>} /> 
            <Route path="/notice/updateNotice" exact element={<UpdateNotice/>} /> 
            <Route path="/Allnotices/updateNotice" exact element={<ViewNotice/>} /> 
            <Route path="/mark" exact element={<AddReadStd/>} /> 
            <Route path="/Allnotices" exact element={<AllNotices/>} />
            <Route path="/notice/stdlist" exact element={<Stdlist/>} />  


             {/* Satff Management routes */}
             <Route path="/Staff" exact element={<AllStaff/>} /> 
             <Route path="/addStaff" exact element={<AddStaff/>} /> 
             {/* <Route path="/update/:id" exact element={<UpdateStaff/>} /> */}
             <Route path="/Staff/updateStaff" exact element={<UpdateStaff/>} />
             <Route path="/SalCal" exact element={<Salcall/>}/>
            

        

             {/* subject management routes */}
             <Route path="/addS" exact element={<AddSubject/>} />   
             <Route path="/displaySubject" exact element = {<AllSubjects/>} /> 
             <Route path="/addMaterial" exact element={<AddMaterial/>} />
             <Route path="/displayMaterial" exact element={<AllMaterials/>} />
             <Route path="/updateSubject" exact element={<UpdateSubject/>}/>
             <Route path="/updateMaterial" exact element={<UpdateMaterial/>}/>
             {/*<Route path="/update:SubjectId" exact element={<UpdateStudent/>}/>*/}
             <Route path="/display" exact element={<AllLecs/>}/>  
             <Route path="/SubjectsDashboard" exact element={<SubjectsDashboard/>}/>


                {/* classroom management routes */} 
                <Route path="/add" exact element = {<AddClassroom />}/>
                <Route path="/viewcls" exact element= {<AllClassrooms/>}/>
                {/* Attendance management routes */} 
              <Route path="/addAttendance" exact element= {<AddAttendance/>}/>
              <Route path="/view" exact element={<ViewAttendance/>}/>
              <Route path="/new" exact element={<AllprAttendance/>}/>
              {/*Exam Management Routers*/}
              <Route path="/ExamDashboard" exact element={<Dashbaord/>} />  
              <Route path="/addExam" exact element={<AddSExam/>}/> 
              <Route path="/allExams" exact element={<AllStudents/>}/>
              <Route path="/UpdateExam/:id" exact element={<UpdateE/>}/> 
              <Route path="/studentDash" exact element={<StudentDash/>}/> 
              <Route path="/studentElist" exact element={<Elist/>}/>
              <Route path="/takeExam/:id" exact element={<TakeExam/>}/> 
              <Route path="/listExamAttempt" exact element={<AllExamsAtt/>}/> 
              <Route path="/updateResult/:id" exact element={<GradeExam/>}/> 
              <Route path="/request/:id" exact element={<RequestR/>}/> 
              <Route path="/results" exact element={<Results/>}/> 
              <Route path="/resultsS" exact element={<ResultsS/>}/> 
              <Route path="/addFD" exact element={<AddFd/>}/> 
              <Route path="/allFD" exact element={<AllFd/>}/>  
              <Route path="/allFDL" exact element={<AllFdL/>}/> 
              <Route path="/answer/:id" exact element={<AnswerFD/>}/> 
              <Route path="/reportS" exact element={<ReportS/>}/> 

          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
