import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NavbarTransparent from "./componentElement/Navbar/navbar";
const Apps = () => {
  return (
    <Router>
      <NavbarTransparent /> {/* module navbar  */}
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </Router>
  );
};
export default Apps;
