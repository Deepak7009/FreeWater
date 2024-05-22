import { Route, Routes } from "react-router-dom";
import "./App.css";
import Advertise from "./components/Advertise";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Accordion from "./components/Accordion";

function App() {
  return (
    <>
    <Accordion/>
      {/* <Navbar /> */}
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
      </Routes>
      {/* <Advertise /> */}
    </>
  );
}

export default App;
