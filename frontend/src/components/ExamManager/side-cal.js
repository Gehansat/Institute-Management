import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  const [lecturers, setLecturers] = useState([]);

  useEffect(() => {
    function getlects() {
      axios
        .get("http://localhost:8070/lects/getlect")
        .then((res) => {
          setLecturers(res.data);
          console.log(lecturers);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getlects();
  }, []);

  // useEffect(() => {
  //   console.log(lecturers);
  //   if (lecturers?.name) {
  //     setName(lecturers.name);
  //   }
  //   if (lecturers?.course) {
  //     setCourse(lecturers.course);
  //   }
  //   if (lecturers?.telephone) {
  //     setTelephone(lecturers.telephone);
  //   }
  // }, [lecturers]);

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [telephone, setTelephone] = useState("");

  return (
    <nav class="new">
      <div class="container" id="cal">
        <div class="calendar">
          <div class="front">
            <div class="current-date">
              <h1>Friday 15th</h1>
              <h1>January 2016</h1>
            </div>

            <div class="current-month">
              <ul class="week-days">
                <li>MON</li>
                <li>TUE</li>
                <li>WED</li>
                <li>THU</li>
                <li>FRI</li>
                <li>SAT</li>
                <li>SUN</li>
              </ul>

              <div class="weeks">
                <div class="first">
                  <span class="last-month">28</span>
                  <span class="last-month">29</span>
                  <span class="last-month">30</span>
                  <span class="last-month">31</span>
                  <span>01</span>
                  <span>02</span>
                  <span>03</span>
                </div>

                <div class="second">
                  <span>04</span>
                  <span>05</span>
                  <span class="event">06</span>
                  <span>07</span>
                  <span>08</span>
                  <span>09</span>
                  <span>10</span>
                </div>

                <div class="third">
                  <span>11</span>
                  <span>12</span>
                  <span>13</span>
                  <span>14</span>
                  <span class="active">15</span>
                  <span>16</span>
                  <span>17</span>
                </div>

                <div class="fourth">
                  <span>18</span>
                  <span>19</span>
                  <span>20</span>
                  <span>21</span>
                  <span>22</span>
                  <span>23</span>
                  <span>24</span>
                </div>

                <div class="fifth">
                  <span>25</span>
                  <span>26</span>
                  <span>27</span>
                  <span>28</span>
                  <span>29</span>
                  <span>30</span>
                  <span>31</span>
                </div>
              </div>
            </div>
          </div>

          <div class="back">
            <input placeholder="What's the event?" />
            <div class="info">
              <div class="date">
                <p class="info-date">
                  Date: <span>Jan 15th, 2016</span>
                </p>
                <p class="info-time">
                  Time: <span>6:35 PM</span>
                </p>
              </div>
              <div class="address">
                <p>
                  Address: <span>129 W 81st St, New York, NY</span>
                </p>
              </div>
              <div class="observations">
                <p>
                  Observations: <span>Be there 15 minutes earlier</span>
                </p>
              </div>
            </div>

            <div class="actions">
              <button class="save">
                Save <i class="ion-checkmark"></i>
              </button>
              <button class="dismiss">
                Dismiss <i class="ion-android-close"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="LectureContacts">
        <div className="lects">
          <h3>Contact Your lecturers</h3>
          <div className="conts">
            {lecturers.map((item) => (
              <div className="contact">
                <div className="image-divide">
                  <img src={require("../../img/phone-call.png")} />
                </div>
                <div className="content-divide">
                  <h5>
                    {item.name} - {item.course}
                  </h5>
                  <h5>{item.telephone}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
