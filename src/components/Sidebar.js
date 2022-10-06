import React from 'react';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (

    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
      <div className="app-brand demo">
        <a href="#" className="app-brand-link">
          <i className="fa-solid fa-book-open-reader fa-xl"></i>
          <span className="app-brand-text demo menu-text fw-bolder ms-2">Library</span>
        </a>

        <a href="#" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
          <i className="bx bx-chevron-left bx-sm align-middle"></i>
        </a>
      </div>

      <ul className="menu-inner py-1">        
        <li className="menu-item">
          <a href="javascript:void(0)" onClick={() => { navigate("/dashboard") }} className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div>Dashboard</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="#" onClick={() => { navigate("/ebooks") }} className="menu-link menu-toggle">
            <i className="menu-icon tf-icons bx bx-layout"></i>
            <div>E-books</div>
          </a>         
        </li>

        <li className="menu-header small text-uppercase">
          <span className="menu-header-text">Members</span>
        </li>

        <li className="menu-item">
          <a href="#" onClick={() => { navigate("/Profile") }} className="menu-link menu-toggle">
            <i class="fa-solid fa-user"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div >Edit Profile</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="#" onClick={() => { navigate("/issued-books") }} className="menu-link menu-toggle">
            <i class="fa-solid fa-book-open"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div >View Issued Books</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="#" onClick={() => { navigate("/book-request") }} className="menu-link menu-toggle">
            <i class="fa-solid fa-book-open"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div >Send Book requests</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="#" onClick={() => { navigate("/fine") }} className="menu-link menu-toggle">
            <i class="fa-solid fa-indian-rupee-sign"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>Pay fines</div>
          </a>
        </li>
      </ul>
    </aside>

  )
}

export default Sidebar;
