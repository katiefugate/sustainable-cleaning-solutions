import React from 'react';
import './App.css';
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Header/>
            </header>
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
    );
}

export default App;
