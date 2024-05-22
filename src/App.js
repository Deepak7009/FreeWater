import { Route, Routes } from "react-router-dom";
import "./App.css";
import Advertise from "./components/Advertise";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Accordion from "./components/Accordion";
import HallFame from "./components/HallFame";
import ContactUs from "./components/ContactUs";
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
