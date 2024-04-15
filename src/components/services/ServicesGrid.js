import React from "react";
import media1 from "../../assets/images/services/grid-1.jpg";
import media2 from "../../assets/images/services/grid-2.jpg";
import media3 from "../../assets/images/services/grid-3.png";
import media4 from "../../assets/images/services/grid-4.jpg";

export const ServicesGrid = () => {
  return (
    <>
      <div className="container">
        <h3 className="fw-bold fs-33">BLOG</h3>
        <div className="row h-100  ">
          <div className="col-lg-8 col-12" data-aos="fade-right">
            <div className="row">
              <div className="col-md-6 mt-3">
                <div className="newsBox position-relative overflow-hidden h-100">
                  <div className="newsBoxImg h-100">
                    <img src={media1} alt={media1} />
                  </div>
                  <div className="position-absolute description px-3">
                    <div className="fs-14 fw-semibold">
                      Know About The Gold Rate Today for Gold Loan Per Gram
                    </div>
                    <div className="mt-2">
                      <button className="otpGenerateBtn fw-bold mb-2">
                        KNOW MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-3">
                <div className="row g-3 h-100">
                  <div className="col-12">
                    <div className="newsBox position-relative overflow-hidden p-5 pt-0">
                      <div className="newsBoxImg ">
                        <img src={media2} alt={media2} />
                      </div>
                      <div className="position-absolute description px-3 w-100">
                        <div className="fs-14 fw-semibold">
                          How Are Gold Loan Eligibility and Amount Calculated?
                        </div>
                        <div className="mt-2">
                          <button className="otpGenerateBtn fw-bold mb-2">
                            KNOW MORE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="border p-2">
                      <div>
                        <p className="fw-bold fs-14">
                          A Complete Guide About Gold Loan Process and
                          Eligibility
                        </p>
                      </div>
                      <div>
                        <p className="fw-medium mt-2 fs-14">
                          What is a Gold Loan? A gold loan is a type of secured
                          loan where the borrower
                        </p>
                      </div>
                      <div className=" fw-bold fs-14 mt-2">
                        <a href="#" className="text-danger">
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="border p-2">
                      <div>
                        <p className="fw-bold fs-14">
                          <div>
                            <div>
                              <p className="fw-bold fs-14">
                                A Complete Guide About Gold Loan Process and
                                Eligibility
                              </p>
                            </div>
                            <div>
                              <p className="fw-medium mt-2 fs-14">
                                In India, gold is considered not just a precious
                                metal, but it represents prospe
                              </p>
                            </div>
                            <div className=" fw-bold fs-14 mt-2">
                              <a href="#" className="text-danger">
                                Read More
                              </a>
                            </div>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12 mt-lg-0 mt-3" data-aos="fade-left">
            <div className="row h-100">
              <div className="col-lg-12 col-6">
                <div className="newsBox position-relative overflow-hidden h-100">
                  <div className="newsBoxImg h-100">
                    <img src={media3} alt={media3} className="h-100" />
                  </div>
                 
                </div>
              </div>
              <div className="col-lg-12 col-6 mt-lg-3">
                <div className="newsBox position-relative overflow-hidden h-100">
                  <div className="newsBoxImg h-100">
                    <img src={media4} alt={media4} className="h-100" />
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
