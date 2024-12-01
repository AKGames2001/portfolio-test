import React from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sidebar/Sidebar";
import Hero from "../components/hero/Hero";
import AboutMe from "../components/aboutme/AboutMe";
import Projects from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

function HomePage() {
    return <>
        <div className="home">
            <Navbar />
            <Sidebar />
            <Hero />
            <AboutMe />
            <Projects />
            <Contact />
        </div>
    </>
}

export default HomePage;