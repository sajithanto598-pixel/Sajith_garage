import React from "react";
import ReactDom from "react-dom/client";
import "./style.css";
import Img_gallery from "./assets/components/Imggal";
import Navbar from "./assets/components/Navbar";
import About from "./assets/components/About";
import Contact from "./assets/components/Contact";

const root = ReactDom.createRoot(document.getElementById("root"));




root.render(
    <>
    <Navbar></Navbar>
    <Img_gallery></Img_gallery>
    <About></About>
    <Contact></Contact>
    </>
)


