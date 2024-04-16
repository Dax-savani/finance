import React from "react";

function Faqs({ itemData, title, data }) {
  return (
    <>
      <section>
        <div className="faqs pt-5">
          <div className="container">
            <div className="FaqsHeading">
              <div className="formHeading text-center">
                <h1 className="fs-33 fw-semibold pb-4 pt-5 pt-sm-5 mb-1">{title}</h1>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="accordion accordion-flush border border-1 rounded-3 p-md-5 p-sm-3  mx-sm-5 
              accordionBox"
              id="accordionFlushExample"
            >
              {data}
              {itemData?.map((value, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button collapsed fs-16 fw-semibold accordionhead px-3"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${index}`}
                      aria-expanded="false"
                      aria-controls="flush-collapseSixteen"
                    >
                      {value.title}
                    </button>
                  </h2>
                  <div
                    id={index}
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body fs-16 black">
                      {value.descripition}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faqs;
