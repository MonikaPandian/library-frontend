import React from 'react';
import { useNavigate } from "react-router-dom";

const SidebarLib = () => {

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
          <a href="#" onClick={() => { navigate("/dashboard") }} className="menu-link">
            <i className="menu-icon tf-icons bx bx-home-circle"></i>
            <div>Dashboard</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="#" onClick={() => { navigate("/e-books") }} className="menu-link menu-toggle">
            <i className="fa-solid fa-pager"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>E-books</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="#" onClick={() => { navigate("/add-ebooks") }} className="menu-link menu-toggle">
          <i class="fa-solid fa-plus"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>Add E-books</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="#" onClick={() => { navigate("/add-members") }} className="menu-link menu-toggle">
          <i className="fa-solid fa-user-plus"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div >Add Members</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="#" onClick={() => { navigate("/add-books") }} className="menu-link menu-toggle">
            <i className="fa-solid fa-book-open"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>Add Books</div>
          </a>
        </li>

        <li className="menu-item">
          <a href="#" onClick={() => { navigate("/fine") }} className="menu-link menu-toggle">
            <i className="fa-solid fa-square-check"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>Approve Book requests</div>
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default SidebarLib;
