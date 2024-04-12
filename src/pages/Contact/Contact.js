import React from "react";
import HeroSection from "../../components/contact/HeroSection";
import "../../assets/style/contact.css";
import GeneralQueries from "../../components/contact/GeneralQueries";
import FormSection from "../../components/contact/FormSection";
import ContactUs from "../../components/contact/ContactUs";
import Location from "../../components/contact/Location";

function Contact() {
  return (
    <>
      <HeroSection />
      <GeneralQueries />
      <FormSection />
      <ContactUs />
      <Location />
    </>
  );
}

export default Contact;
