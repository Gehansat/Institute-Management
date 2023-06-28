const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  
  useNewUrlParser: true,
  useUnifiedTopology: true
  
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongodb Connection success!");
});

//login route
const userRoutes = require("./routes/users.js");
app.use("/user", userRoutes);

//routesNoticeBoard
const noticeRouter = require("./routes/notice");
app.use("/notice", noticeRouter);
//routesSubject
const subjectRouter = require("./routes/subject");
app.use("/subject", subjectRouter);

const matRouter = require("./routes/LecturerSubjects.js");
app.use("/material",matRouter);

//routesStaff
//import route
const staffRouter = require("./routes/staffRoute.js");

//route middleware
app.use("/Staff",staffRouter);

//routesTickets
const ticketRouter = require("./routes/tickets");
app.use("/ticket", ticketRouter);

//exams
const studentRouter = require("./routes/exams.js");
const lectRouter = require("./routes/lecturers.js");
const courseRouter = require("./routes/course.js");
const attemptRouter = require("./routes/examAttempts.js");                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
const fdRouter = require("./routes/feedbackA");
app.use("/exams", studentRouter);
app.use("/lects", lectRouter);
app.use("/course", courseRouter);
app.use("/attempts", attemptRouter); app.use("/fd", fdRouter);

//routes classroom
const classroomRouter = require("./routes/classrooms");
app.use("/classroom", classroomRouter);

//routes Attendance
const attendanceRouter = require("./routes/attendances.js")
app.use("/attendance",attendanceRouter);

//routesPayments
const studentRegPaymentsRouter = require("./routes/studentRegistrationPayments");
const studentSubjectPaymentsRouter = require("./routes/studentSubjectPayments");
const regPaymentsRouter = require("./routes/registrationPayments");
const subjectPaymentsRouter = require("./routes/subjectPayments");

app.use("/studentRegistrationPayment", studentRegPaymentsRouter);
app.use("/studentSubjectPayment", studentSubjectPaymentsRouter);
app.use("/registrationPayments", regPaymentsRouter);
app.use("/subjectPayments", subjectPaymentsRouter);

//routes add student
const addStudent = require("./routes/addStudent");
const student = require("./routes/student");

app.post("/addStudent", addStudent);
app.get("/student", student);
app.get("/editStudent", student);
app.get("/searchStudent", student);
app.post("/updateStudent", student);
app.post("/deleteStudent", student);

const downloadManager = require("./routes/downloadManager");
app.get("/download", downloadManager);

const studentReport = require("./routes/studentReport");
app.get("/studentReport", studentReport);

/*const lectRouter = require("./routes/lecturers.js");
app.use("/lects", lectRouter);*/

/*const courseRouter = require("./routes/courses.js");
app.use("/courses", courseRouter);*/

/*const attemptRouter = require("./routes/examAttempts.js");
app.use("/attempts", attemptRouter);*/

app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`);
});
