import React from "react";
import sponserImg from "../../assets/images/global/amitji.webp";
import sponserImg1 from "../../assets/images/global/amitji-mobile.png";

const GoldCalc = () => {
  return (
    <div>
      <div className="container">
        <div className="py-5">
          <h3 className="text-center fw-bold mt-4 mb-1">
            GOLD LOAN Calculator
          </h3>
          <div className="text-center fw-medium">
            Calculate your eligibility for a gold loan by Muthoot Finance.
          </div>
          <div className="row mt-3">
            <div className="col-xl-7">
              <div className="row align-items-center justify-content-center">
                <div className="col-4">
                  <img
                    src={sponserImg}
                    alt={sponserImg}
                    className="d-md-block d-none"
                  />
                  <img
                    src={sponserImg1}
                    alt={sponserImg1}
                    className="d-md-none d-block"
                  />
                </div>
                <div
                  className="col-md-8 text-center"
                  style={{ maxWidth: "550px" }}
                >
                  <video
                    loop={true}
                    autoPlay="autoplay"
                    muted
                    playsInline
                    className="w-100"
                  >
                    <source
                      src="https://cdn.muthootfinance.com/themes/bartik/images/images/gold-stone-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className="col-xl-5 d-flex flex-column justify-content-center">
              <div className="row align-items-center">
                <div className="col-6">
                  <div className="my-4">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100"
                    />
                  </div>
                  <div className="my-4">
                    <input
                      type="text"
                      placeholder="Contact No.*"
                      className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100"
                    />
                  </div>
                  <div className="my-4">
                    <input
                      type="text"
                      placeholder="Pin Code*"
                      className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100"
                    />
                  </div>
                  <div className="my-4">
                    <input
                      type="text"
                      placeholder="Amount you require (INR)"
                      className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="my-4">
                    <input
                      type="text"
                      placeholder="Email ID*"
                      className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100"
                    />
                  </div>
                  <div className="my-4">
                    <select
                      id="countrySelect"
                      name="Country"
                      className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100 gray"
                    >
                      <option value="Select State">Select State</option>
                      <option value="USA">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <select
                      id="countrySelect"
                      name="Country"
                      className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100 gray"
                    >
                      <option disabled hidden>
                        Gold Type
                      </option>
                      <option value="USA">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="Canada">Canada</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <input
                      type="text"
                      placeholder="Weight Of Gold (gm)"
                      className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100"
                    />
                  </div>
                </div>
              </div>
              <div className="text-center mt-3">
                <button className="otpGenerateBtn fw-bold">GENERATE OTP</button>
              </div>
              <div className="fs-12 text-center px-4 mt-3 fw-medium">
                #Note: This is an approximate value. The final value depends on
                the gold valuation done at the branch.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldCalc;
