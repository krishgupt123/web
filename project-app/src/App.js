import React from "react";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {  Routes, Route , Navigate} from "react-router-dom";
const App = () => {
    return (
        <>
        < Navbar />
        <Routes>
            <Route exact path="/" component={Home} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Navigate to ='/'></Navigate>;
        </Routes>
        <Footer />
        </>
    );
};
export default App;