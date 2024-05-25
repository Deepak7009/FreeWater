import React from "react";
import "./App.css";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import {Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
