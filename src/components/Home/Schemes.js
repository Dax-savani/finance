import React from "react";
import schemesImg from "../../assets/images/home/schemes/schemes1.webp";

const Schemes = () => {
  const SchemesBoxes = [
    {
      img: schemesImg,
      boxTitle: "MUTHOOT ONE PERCENT LOAN",
      scheme1: "Small loans at low interest rates.",
      scheme2: "Loan Amount : ₹1500 to ₹50,000",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT ONE PERCENT LOAN",
      scheme1: "Small loans at low interest rates.",
      scheme2: "Loan Amount : ₹1500 to ₹50,000",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT ONE PERCENT LOAN",
      scheme1: "Small loans at low interest rates.",
      scheme2: "Loan Amount : ₹1500 to ₹50,000",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT ONE PERCENT LOAN",
      scheme1: "Small loans at low interest rates.",
      scheme2: "Loan Amount : ₹1500 to ₹50,000",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT ONE PERCENT LOAN",
      scheme1: "Small loans at low interest rates.",
      scheme2: "Loan Amount : ₹1500 to ₹50,000",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT ONE PERCENT LOAN",
      scheme1: "Small loans at low interest rates.",
      scheme2: "Loan Amount : ₹1500 to ₹50,000",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT ONE PERCENT LOAN",
      scheme1: "Small loans at low interest rates.",
      scheme2: "Loan Amount : ₹1500 to ₹50,000",
    },
  ];

  return (
    <div className="schemesMain py-5">
      <div className="container py-4">
        <div className="row">
          <div className="col-3 d-lg-block d-none">
            <h3 className="fw-bold text-center">GOLD LOAN SCHEMES</h3>
            <div className="my-3">
              <div className="fw-bold border-bottom p-2 schemes">
                MUTHOOT ONE PERCENT LOAN
              </div>
              <div className="fw-bold border-bottom p-2 schemes">
                MUTHOOT ULTIMATE LOAN (MUL)
              </div>
              <div className="fw-bold border-bottom p-2 schemes">
                MUTHOOT DELIGHT LOAN
              </div>
              <div className="fw-bold border-bottom p-2 schemes">
                MUTHOOT MUDRA LOAN
              </div>
              <div className="fw-bold border-bottom p-2 schemes">
                MUTHOOT ADVANTAGE LOAN
              </div>
              <div className="fw-bold border-bottom p-2 schemes">
                MUTHOOT HIGH VALUE PLUS LOAN (MHP)
              </div>
              <div className="fw-bold border-bottom p-2 schemes">
                MUTHOOT HIGH VALUE LOAN (MHL)
              </div>
              <div className="fw-bold border-bottom p-2 schemes">
                MUTHOOT BIG BUSINESS LOAN
              </div>
              <div className="fw-bold border-bottom p-2 schemes">
                BEST VALUE SCHEME (BVS)
              </div>
              <div className="fw-bold p-2 schemes">
                HIGH VALUE RETENTION (HVR)
              </div>
            </div>
          </div>
          <div
            className="col-lg-9 schemeRightSide"
            style={{ maxHeight: "710px", overflowY: "scroll" }}
          >
            <div className="row g-4 py-3">
              {SchemesBoxes.map((item, index) => (
                <div className="col-md-4 col-sm-6 col-12 mt-5" key={index}>
                  <div className="schemesBox h-100 bg-light p-4">
                    <div
                      style={{
                        width: "70px",
                        height: "65px",
                        transform: "translate(-10%,-70%)",
                      }}
                      className="bg-light p-2"
                    >
                      <img src={item.img} alt={item.img} />
                    </div>
                    <div
                      className="fw-semibold mb-3 schemeBoxTitle"
                      style={{ marginTop: "-20px" }}
                    >
                      {" "}
                      {item.boxTitle}
                    </div>
                    <div className="d-flex justify-content-start fw-medium fs-15">
                      <span
                        className="red fs-13"
                        style={{ marginRight: "10px", display: "block" }}
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                      {item.scheme1}
                    </div>
                    <div className="d-flex justify-content-start fw-medium fs-15">
                      <span
                        className="red fs-13"
                        style={{ marginRight: "10px", display: "block" }}
                      >
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                      {item.scheme2}
                    </div>
                    <div
                      className="fs-13 mb-1 red fw-semibold learnMore"
                      style={{ marginTop: "35px" }}
                    >
                      Learn More
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schemes;
