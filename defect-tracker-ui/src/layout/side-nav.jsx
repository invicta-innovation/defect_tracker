import React, { Component } from "react";
import { Link } from 'react-router-dom';

class SideNav extends Component {
  render() {
    return (
      <div id="sidebar" class="sidebar py-3">
        <ul class="sidebar-menu list-unstyled">
          <li class="sidebar-list-item"><a href="#" class="sidebar-link text-muted"><i class="fas fa-home mr-3 text-gray"></i><span>Dashboard</span></a></li>

          <li class="sidebar-list-item"><a href="#" data-toggle="collapse" data-target="#page1" aria-expanded="false" aria-controls="page1" class="sidebar-link text-muted"><i class="fas fa-th-large mr-3 text-gray"></i><span>Defect</span></a>
            <div id="page1" class="collapse">
              <ul class="sidebar-menu list-unstyled border-left border-primary border-thick">
                <li class="sidebar-list-item">
                    {/* <span class="sidebar-link text-muted pl-lg-5">dashboard</span> */}
                    <Link to="/example" class="sidebar-link text-muted pl-lg-5">dashboard</Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
export default SideNav;