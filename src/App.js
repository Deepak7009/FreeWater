import { Route, Routes } from "react-router-dom";
import "./App.css";
import Advertise from "./components/Advertise";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Accordion from "./components/Accordion";
//import HallFame from "./components/HallFame";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import DistributeHome from "./components/DistributeHome";
import DistributeSecond from "./components/DistributeSecond";
import DistributeInfo from "./components/DistributeInfo";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        {/*<Route path="/hall-of-fame" element={<HallFame />}></Route>*/}
        <Route path="/faq" element={<Accordion />}></Route>
        <Route path="/advertise" element={<Advertise />}></Route>
        <Route
          path="/distribute"
          element={
            <>
              <DistributeHome /> <DistributeSecond /> <DistributeInfo />
            </>
          }></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
