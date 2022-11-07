import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import SidebarLib from './SidebarLib';
import Footer from './Footer';
import PopularAuthors from './PopularAuthors';
import { useGlobalContext } from "../context";


const Dashboard = () => {

    const { profileData, setProfileData } = useGlobalContext();
   
    const [popularBooks, setPopularBooks] = useState([]);

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            slidesToSlide: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };

    useEffect(() => {
        fetch(`https://library-management1234.herokuapp.com/popular-books`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((res) => setPopularBooks(res));                                                                                                          
    }, []);

    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <SidebarLib />
                <div className="layout-page">
                    <Navbar />
                    <div className="content-wrapper">
                        <div className='popular-books'>
                            <div className='popular-books-heading'><h4>Popular Books from all category</h4></div>
                            <Carousel responsive={responsive}>
                                {popularBooks.map((book) => {
                                    return (
                                        <div className="card h-100" key={book._id} style={{ width: "18rem" }}>
                                            <img src={book.image} className="card-img-top card-image" alt="image" />
                                            <div className="card-body">
                                                <h5 className="card-title">{book.title}</h5>
                                                <p className="card-text"><b>category :</b>&nbsp;&nbsp;&nbsp;{book.category}</p>
                                                <p className='card-text'><b>Author :</b>&nbsp;&nbsp;&nbsp;{book.author}</p>
                                                <p className='card-text'><b>Stock :</b>&nbsp;&nbsp;&nbsp;{book.stock}</p>
                                                <a href="#" onClick={() => { setProfileData(...profileData,profileData.books + 1) }} className="btn btn-primary">Request book</a>
                                            </div>
                                        </div>
                                    )
                                })}
                            </Carousel>
                        </div>
                        <PopularAuthors />
                        <Footer />
                        <div className="content-backdrop fade"></div>
                    </div>
                </div>
            </div>
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
    )
}

export default Dashboard;
