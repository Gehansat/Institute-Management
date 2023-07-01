import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import "./style.css";
import "./report.css";
import { useReactToPrint } from 'react-to-print';
import ReactToPrint from 'react-to-print';
import AdminSideNav from "../CommonComponents/AdminSideNav";
import Head from "./nav";

export default function sideNav() {


  return (
    <div class="sidenav">
      <a href="/studentDash" id="top">Dashboard</a>
      <a href="/studentElist">Take Exams</a>
      <a href="/resultsS">Results</a>
      <a href="/allFD">Forum</a>
      <a href="/reportS">Report</a>
    </div>
  );
}

