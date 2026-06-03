import { BrowserRouter, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";

import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";

import GeminiDetails from "./pages/GeminiDetails";
import QuantumDetails from "./pages/QuantumDetails";
import Computing from "./pages/Computing";

import CyberDetails from "./pages/CyberDetails";
import HackingDetails from "./pages/HackingDetails";
import BigDataDetails from "./pages/BigDataDetails";

import RoboticsDetails from "./pages/RoboticsDetails";
import ProgrammingDetails from "./pages/ProgrammingDetails";
import WebDevDetails from "./pages/WebDevDetails";

import "./App.css";

function App() {
  return (
    <BrowserRouter>

     <ScrollToTop />

      <Navbar />

      <Routes>

        <Route
          path="/" element={<Home />} />

        <Route
          path="/blogdetails" element={<BlogDetails />}/>

        <Route path="/Services" element={<Services/>} />

        <Route
          path="/contact" element={<Contact />}/>

        <Route
          path="/about" element={<About />}/>

        <Route path="/GeminiDetails" element={<GeminiDetails />} />
        <Route path="/QuantumDetails" element={<QuantumDetails />} />
        <Route path="/ComputingDetails" element={<Computing />} />
        <Route path="/CyberDetails" element={<CyberDetails />} />
        <Route path="/HackingDetails" element={<HackingDetails />} />
        <Route path="/ProgrammingDetails" element={<ProgrammingDetails />} />
        <Route path="/RoboticsDetails" element={<RoboticsDetails />} />
        <Route path="/BigDataDetails" element={<BigDataDetails />} />
        <Route path="/WebDevDetails" element={<WebDevDetails/>} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;