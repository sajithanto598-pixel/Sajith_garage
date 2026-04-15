import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";
import ImgGallery from "./assets/components/ImgGallery";
import Navbar from "./assets/components/Navbar";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";

const root = ReactDom.createRoot(document.getElementById("root"));



root.render(
    <>
    <Navbar></Navbar>
        <div className="hero">
        <h1>Ultimate Driving Experience</h1>
        <p>Precision. Power. Performance.</p>
    </div>
    <ImgGallery></ImgGallery>
    <About></About>
    <Contact></Contact>
    </>
)
