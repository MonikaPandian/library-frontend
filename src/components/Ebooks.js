import React from 'react';
import { useState, useEffect } from 'react';
import SidebarLib from './SidebarLib';
import Navbar from './Navbar';
import Footer from './Footer';
import Sidebar from './Sidebar';

const Ebooks = () => {

  const [ebooks, setEbooks] = useState([]);

  useEffect(() => {
    fetch(`https://library-mgmt-backend.vercel.app/ebooks`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => setEbooks(res));
  }, []);

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <SidebarLib />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <h1 className='text-center'>List of Ebooks</h1>
            <div className='row row-cols-1 row-cols-md-4 row-cols-xl-4 row-cols-sm-2 ms-5'>
              {ebooks.map((ebook) => {
                return (
                  <div className="card text-center mb-5 p-0 me-4" style={{ width: "20rem" }}>
                    <img src={ebook.image} className="card-img-top" style={{ height: "275px" }} alt="image" />
                    <div className="card-body">
                      <h5 className="card-title">{ebook.title}</h5>
                      <p className="card-text"><b>category :</b>&nbsp;&nbsp;&nbsp;{ebook.category}</p>
                      <p className='card-text'><b>Author :</b>&nbsp;&nbsp;&nbsp;{ebook.author}</p>
                      <p className='card-text'><b>Stock :</b>&nbsp;&nbsp;&nbsp;{ebook.stock}</p>
                      <a href={ebook.link} target="_blank" class="btn btn-primary">Download</a>
                    </div>
                  </div>
                )
              })}
            </div>
            <Footer />
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  )
}

export default Ebooks;
