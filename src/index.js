import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";
import Img_gallery from "./assets/components/Imagegallery";
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
    <Img_gallery></Img_gallery>
    <About></About>
    <Contact></Contact>
    </>
)
