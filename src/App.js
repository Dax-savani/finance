import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { Services } from "./pages/services/Services";
import { Header } from "./components/global/Header";
import { Footer } from "./components/global/Footer";
import Contact from "./pages/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1800,
      easing: "ease",
    });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
