import React from 'react';
import './App.css';
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from"./components/footer"

function App() {
    return (
        <div className="App" id="page-container">
            <div id="content-wrap">
                <header className="App-header">
                    <Header/>
                </header>
                <Routes>
                    <Route path="/Home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
}

export default App;
