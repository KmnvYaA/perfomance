import React from "react";
import './App.css'
// import styled from "styled-components";
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/sections/main/Main.tsx";
import {AboutMe} from "./layout/sections/about/AboutMe.tsx";
import {Skills} from "./layout/sections/skills/Skills.tsx";
import {Resume} from "./layout/sections/resume/Resume.tsx";
import {Portfolio} from "./layout/sections/portfolio/Portfolio.tsx";
import {Contact} from "./layout/sections/contact/Contact.tsx";
import {Footer} from "./layout/sections/footer/Footer.tsx";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Resume/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default App

