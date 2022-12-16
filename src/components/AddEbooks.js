import React from 'react';
import { useState, useEffect } from 'react';
import SidebarLib from './SidebarLib';
import Navbar from './Navbar';
import Footer from './Footer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

const Ebooks = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [category, setCategory] = useState("");
    const [image, setImage] = useState("");
    const [link, setLink] = useState("");
    const [stock, setStock] = useState("");

    return (
        <div className="layout-wrapper layout-content-navbar">
            <div className="layout-container">
                <SidebarLib />
                <div className="layout-page">
                    <Navbar />
                    <div>
                        <div className="add-ebook">
                            <TextField onChange={(event) => setTitle(event.target.value)}
                                label="Title" variant="standard" />
                            <TextField onChange={(event) => setAuthor(event.target.value)}
                                label="Author" variant="standard" />
                            <TextField onChange={(event) => setCategory(event.target.value)}
                                label="Category" variant="standard" />
                            <TextField onChange={(event) => setImage(event.target.value)}
                                label="Image" variant="standard" />
                             <TextField onChange={(event) => setLink(event.target.value)}
                                label="Link" variant="standard" />
                            <TextField onChange={(event) => setStock(event.target.value)}
                                label="Stock" variant="standard" />
                        </div>
                        <Button className="add-button" onClick={() => {
                            const newEbook = {
                                title: title,
                                author: author,
                                category: category,
                                image: image,
                                link: link,
                                stock: stock
                            };

                            fetch("https://library-mgmt-backend.vercel.app/ebooks", {
                                method: "POST",
                                body: JSON.stringify(newEbook),
                                headers: {
                                    "Content-Type": "application/json",
                                }
                            })
                                .then((data) => data.json())
                                .then(() => navigate("/e-books"));
                        }}
                            variant="contained">Add Ebook</Button>
                        <div className='footer'><Footer /></div>

                        <div className="content-backdrop fade"></div>
                    </div>
                </div>
            </div>
            <div className="layout-overlay layout-menu-toggle"></div>
        </div>
    )
}

export default Ebooks;
