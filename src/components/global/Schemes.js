import React from "react";
import schemesImg from "../../assets/images/services/schemes1.webp";

const ServicesGoldLoanSchemes = () => {
  const SchemesBoxes = [
    {
      img: schemesImg,
      boxTitle: "MUTHOOT ONE PERCENT LOAN",
      scheme1: "Small loans at low interest rates.",
      scheme2: "Loan Amount: ₹1,500 to ₹50,000",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT ULTIMATE LOAN (MUL)",
      scheme1: "Maximum loan value and discounts on timely interest payments.",
      scheme2: "Loan Amount: Starting at ₹1,500",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT DELIGHT LOAN",
      scheme1: "Loan Amount: ₹50,000 to ₹5 crores",
      scheme2: "Tenure: 12 months",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT MUDRA LOAN",
      scheme1:
        "Special loan scheme for women that’s available at South India branches.",
      scheme2: "Loan Amount: ₹1,500 to ₹1 lakhs",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT ADVANTAGE LOAN",
      scheme1: "Competitive per gram and interest rates.",
      scheme2: "Loan Amount: ₹50,000 to ₹5 Crores",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT HIGH VALUE PLUS LOAN (MHP)",
      scheme1: "Loans curated for the business community.",
      scheme2: "Loan Amount: ₹1,90,000 to ₹5 crores",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT HIGH VALUE LOAN (MHL)",
      scheme1: "Loans which are ideal for longer periods.",
      scheme2: "Loan starting from ₹50,000 and no maximum limit",
    },
    {
      img: schemesImg,
      boxTitle: "MUTHOOT BIG BUSINESS LOANS",
      scheme1: "Low rates of interest with maximum LTV",
      scheme2: "Tenure: 12 months ",
    },
    {
      img: schemesImg,
      boxTitle: "BEST VALUE SCHEME (BVS)  ",
      scheme1: "Offered at South India branches only",
      scheme2: "Loan Amount: ₹50,000 to ₹5 Crores",
    },
    {
      img: schemesImg,
      boxTitle: "HIGH VALUE RETENTION (HVR)",
      scheme1: "Offered at South India branches only",
      scheme2: "Loan Amount: ₹10 Lakh to ₹5 crores",
    },
  ];
  return (
    <>
      <div className="bg-light">
        <div className="container py-5">
          <div>
            <h3 className="fw-bold text-center">GOLD LOAN SCHEMES</h3>
          </div>
          <div className="row g-4 py-3">
            {SchemesBoxes.map((item, index) => (
              <div
                className="col-xl-3 col-lg-4 col-sm-6  col-12 mt-5"
                key={index}
                data-aos="fade-up"
              >
                <div className="schemesBox h-100 bg-white p-4 d-flex flex-column justify-content-between">
                  <div
                    style={{
                      width: "70px",
                      height: "65px",
                      transform: "translate(-10%,-70%)",
                    }}
                    className="bg-white  p-2"
                  >
                    <img src={item.img} alt={item.img} />
                  </div>
                  <div
                    className="fw-semibold schemeBoxTitle"
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
                    className="fs-13 red fw-semibold learnMore"
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
    </>
  );
};

export default ServicesGoldLoanSchemes;
