import React from "react";
import { Services } from "./pages/services/Services";
import { Header } from "./components/global/Header";
import { Footer } from "./components/global/Footer";

function App() {
  return (
    <>
      <Header />
        <Services />
      <Footer />
    </>
  );
}

export default App;
