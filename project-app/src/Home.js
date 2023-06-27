import React from "react";
import { NavLink } from "react-router-dom";
import he from "../src/img/image.png";
import Common from "./Common";
const Home = () => {
    return (
        <>
       <Common name="Grow your business with " imgsrc ={he} visit="/contact" btname="Contact Now" />
        </>
    )
}
export default Home;