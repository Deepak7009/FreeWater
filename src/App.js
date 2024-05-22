import { Route, Routes } from "react-router-dom";
import "./App.css";
import Advertise from "./components/Advertise";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Accordion from "./components/Accordion";
import HallFame from "./components/HallFame";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/advertise"
          element={
            <>
              <Navbar />
              <Advertise />
            </>
          }
        />
        <Route
          path="/hall-of-fame"
          element={
            <>
              <Navbar />
              <HallFame />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <Navbar />
              <Accordion />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
