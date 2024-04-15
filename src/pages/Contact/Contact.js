import React from "react";
import "../../assets/style/contact.css";
import GeneralQueries from "../../components/contact/GeneralQueries";
import FormSection from "../../components/contact/FormSection";
import ContactUs from "../../components/contact/ContactUs";
import Location from "../../components/contact/Location";
import Hero from "../../components/global/Hero";
import contactBackImg from "../../assets/images/Contact/hero-background.jpg";
import ProvidedServices from "../../components/global/ProvidedServices";
import Subscribe from "../../components/global/Subscribe";

function Contact() {
  return (
    <>
      <div style={{ marginTop: "120px" }}>
        <Hero
          bGSrc={contactBackImg}
          line1={"GENERAL QUERIES"}
          line2={"Get"}
          line3={"IMMEDIATE ASSISTANCE"}
        />
        <GeneralQueries />
        <FormSection />
        <ContactUs />
        <Location />
        <ProvidedServices />
        <Subscribe />
      </div>
    </>
  );
}

export default Contact;
