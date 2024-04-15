import React from "react";
import Hero from "../../components/global/Hero";
import "../../assets/style/about.css";
import AboutSection from "../../components/about/AboutSection";
import OwnReview from "../../components/about/OwnReview";
import MissionVission from "../../components/about/MissionVission";
import Counters from "../../components/about/Counters";
import ProvidedServices from "../../components/global/ProvidedServices";
import Award from "../../components/about/Award";
import Subscribe from "../../components/global/Subscribe";
import fg from "../../assets/images/about/heroAbout.jpg";

const About = () => {
  return (
    <>
      <div style={{ marginTop: "120px" }}>
        <Hero
          line1="ABOUT US"
          line2="A"
          line3="JOURNEY THROUGH TIME"
          line4="ABOUT US"
          line5="A Journey Through Time"
          bGSrc={fg}
        />
        <AboutSection />
        <OwnReview />
        <MissionVission />
        <Counters />
        <ProvidedServices />
        <Award />
        <Subscribe />
      </div>
    </>
  );
};

export default About;
