import React from "react";
import contactBackImg from "../../assets/images/Contact/hero-background.jpg";
import Hero from "../../components/global/Hero";
import WriteToUs from "../../components/global/WriteToUs";
import Subscribe from "../../components/global/Subscribe";

const NcdQueries = () => {
  return (
    <div style={{ marginTop: "88px" }}>
      <Hero
        bGSrc={contactBackImg}
        line1={"NCD QUERIES"}
        line2={"WE ARE HERE"}
        line3={"To assist"}
      />
      <section className="mb-5">
        <WriteToUs />
      </section>
      <Subscribe />
    </div>
  );
};

export default NcdQueries;
