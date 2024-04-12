import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/About";
import {Services} from "./pages/services/Services";
import {Header} from "./components/global/Header";
import {Footer} from "./components/global/Footer";
import Contact from "./pages/Contact/Contact";
import Faqs from "./components/Faqs";

function App() {
    return (
        <>
            <Header/>
            <Home/>
            <About/>
            <Services/>
            <Footer/>
            <Contact/>
            {/* <Faqs /> */}
        </>
    );
}

export default App;
