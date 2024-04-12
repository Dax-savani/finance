import React from "react";

const AboutSection = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className=" py-5 my-5">
            <h1
              className="text-uppercase text-center fw-semibold mb-4"
              style={{ fontSize: "33px" }}
            >
              about us
            </h1>
            <p
              style={{ textAlign: "justify", fontWeight: "500" }}
              className="fs-16 mb-4"
            >
              Even before the word "ethos" had found a place in the corporate
              lexicon, Muthoot Finance Ltd. had imbibed a work culture that was
              based on conscience. Ever since its inception, the company has
              nurtured trust as its most prominent value. We are committed to
              keeping this heritage alive throughout the generations to come. At
              Muthoot Finance Ltd. we are committed to creating a balance. We
              believe in a simple yet profound theory of "from excess or scanty,
              to appropriateness".
            </p>
            <p
              style={{ textAlign: "justify", fontWeight: "500" }}
              className="fs-16"
            >
              A prominent example of this is our financial inclusion policy. The
              company provides gold loans on extremely easy terms and conditions
              to people of each segment of the society. Our gold loan range
              begins from ₹ 1500 and there is no maximum limit. Driven by the
              invaluable trust and commitment that people have shown in us
              through centuries, we have created a reputable market image.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
