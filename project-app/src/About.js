import React from "react";
import { NavLink } from "react-router-dom";
import he from "../src/img/image.png";
import About from "./Common";
import Common from "./Common";
const Home = () => {
    return (
        <>
       <Common  name="Welcome to About page " imgsrc ={he} visit="/contact" btname="Contact Now" />
        </>
    )
}
export default About;