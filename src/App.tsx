import React from 'react';
import './App.css';
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from"./components/footer"
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Services from "./pages/Services";
import FAQs from "./pages/FAQs";
function App() {
    return (
        <div className="App" id="page-container">
            <div id="content-wrap">
                <header className="App-header">
                    <Header/>
                </header>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/FAQs" element={<FAQs />} />
                </Routes>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
