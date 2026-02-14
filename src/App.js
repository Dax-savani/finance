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
import NcdQueries from "./pages/NCDQueries/NcdQueries";
import Policy from "./pages/policy/Policy";
//ttttest
function App() {
  useEffect(() => {
    Aos.init({
      once: false,
      duration: 1200,
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
        <Route path="/ncd-Queries" element={<NcdQueries />} />
        <Route path="/policy" element={<Policy />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
