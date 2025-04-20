import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./pages/Home";
import React from "react";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";

const App = () => {
  return (
    <main className="main-container">
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
  );
};

export default App;

  // "homepage": "https://Cudjoe-Francis.github.io/my-portfolio/",
