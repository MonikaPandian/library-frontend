import React from 'react';
import { useGlobalContext } from "../context";

const Navbar = () => {

  const { profileData, setProfileData } = useGlobalContext(); 

  return (

    <nav className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme" id="layout-navbar">
      <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
        <a className="nav-item nav-link px-0 me-xl-4" href="#">
          <i className="bx bx-menu bx-sm"></i>
        </a>
      </div>

      <div className="navbar-nav-right d-flex align-items-center" id="navbar-collapse">
        {/* <!-- Search --> */}
        <div className="navbar-nav align-items-center">
          <div className="nav-item d-flex align-items-center">
            <i className="bx bx-search fs-4 lh-0"></i>
            <input
              type="text"
              className="form-control border-0 shadow-none"
              placeholder="Search..."
              aria-label="Search..."
            />
          </div>
        </div>
        {/* <!-- /Search --> */}

        <ul className="navbar-nav flex-row align-items-center ms-auto">
          <li><form className="d-flex">
            <button className="btn btn-outline-primary" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Books
              <span className="badge bg-primary text-white ms-1 rounded-pill">{profileData.books}</span>
            </button>
          </form></li>&nbsp;&nbsp;&nbsp;&nbsp;
          <li><h4>{profileData.name}</h4></li>&nbsp;&nbsp;&nbsp;&nbsp;
          {/* <!-- User --> */}
          <li className="nav-item navbar-dropdown dropdown-user dropdown">
            <a className="nav-link dropdown-toggle hide-arrow" href="#" data-bs-toggle="dropdown">
              <div className="avatar avatar-online">
                <span><img src={profileData.profPic} alt="image" className="w-px-40 h-auto rounded-circle" />
                </span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
