
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import PluginAPIs from "./pages/PluginAPIs";
import CloudAPIs from "./pages/CloudAPIs";
import "./App.css";

function App() {
  
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plugin-apis" element={<PluginAPIs />} />
        <Route path="/cloud-apis" element={<CloudAPIs />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
