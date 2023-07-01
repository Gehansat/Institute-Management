import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div
        class="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
        id="navigation"
      >
        <div class="navi">
          <ul>
            <li class="active">
              <i class="fa fa-home" aria-hidden="true"></i>
              <span class="hidden-xs hidden-sm">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </span>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-tasks" aria-hidden="true"></i>
                <span class="hidden-xs hidden-sm">Workflow</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-bar-chart" aria-hidden="true"></i>
                <span class="hidden-xs hidden-sm">Statistics</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-user" aria-hidden="true"></i>
                <span class="hidden-xs hidden-sm">Calender</span>
              </a>
            </li>
            <li>
              <a href="/attempt">
                <i class="fa fa-calendar" aria-hidden="true"></i>
                <span class="hidden-xs hidden-sm">Users</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-cog" aria-hidden="true"></i>
                <span class="hidden-xs hidden-sm">Setting</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Header;
