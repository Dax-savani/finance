import React from "react";
import gold from "../../assets/images/services/Gold-loan-icon.png";
import offerImg from "../../assets/images/services/offer-img2.png";
import bottle from "../../assets/images/services/Bottle.png";
export const ServicesGoldLoan = () => {
  const selectData = [
    "Muthoot Ulimate Loan (MUL)",
    "Muthoot Delight Loan",
    "Muthoot High Value Loan Plus (MHP)",
    "Muthoot Advantage Loan",
    "Muthoot Super Loan (MSL)",
    "Muthoot Mahila Loan (MML)",
    "Muthoot High Value Loan (MHL)",
    "Muthoot One Percent Loan (MOL)",
    "High Networth Individual (HNI)",
    ];
  return (
    <>
      <div className="container">
        <div className="my-5">
          <div>
            <div className=" fs-3 fw-bold my-2">Calculator for Gold Loan</div>
            <div>
              <p className="fs-14 fw-medium">
                You can calculate your eligibility for availing a gold loan by
                Muthoot Finance by using the Gold Loan Calculator. All you are
                required to do is enter details such as name, email-id, contact
                number, gold type, the amount you require, and few other
                details.
              </p>
            </div>
          </div>

          <div className="mt-4 ">
            <div style={{ backgroundColor: "#F3F3F3" }} className="rounded">
              <div className="tab py-4 pb-5 px-3 bg-white">
                <div>
                  <div className=" fs-2 fw-bold my-2 text-center">
                    GOLD LOAN CALCULATOR
                  </div>
                  <div>
                    <div className="d-flex justify-content-center ">
                      <div className="col0-xl-3 col-lg-5 ">
                        <select
                          className=" outline-none py-1 w-100 px-0 fs-14 rounded-0 border-0 border-bottom border-dark-subtle fw-medium"
                          aria-label="Default select example"
                        >
                          <option className="fw-medium" >
                            Select Scheme
                          </option>
                          {selectData.map((value, index) => (
                            <option
                              key={index}
                              className="fw-medium my-2"
                              value={value}
                            >
                              {value}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="row mt-5">
                    <div className="col-lg-5 col-12 border-end d-flex justify-content-center">
                      <div>
                        <div>
                          <img
                            src={gold}
                            alt="gold image"
                            style={{ height: "140px", objectFit: "contain" }}
                          />
                        </div>
                        <div className="mt-5">
                          <div className="text-danger fs-5 text-center fw-bold">
                            Loan Tenure
                          </div>
                          <div className="fw-bold text-center">12</div>
                          <div className="text-danger fs-5 text-center fw-bold">
                            Monthly Loan
                          </div>
                          <div className="fw-bold text-center">₹ 2,665.46</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7 col-12 mt-lg-0 mt-4">
                      <div>
                        <div className="px-lg-5">
                          <div>
                            <div>
                              <input
                                type="range"
                                className="form-range m-0 text-danger"
                                id="customRange1"
                              />
                              <div>
                                <label
                                  htmlFor="customRange1 "
                                  className="form-label w-50 fw-bold"
                                >
                                  ₹ 0
                                </label>
                                <label
                                  htmlFor="customRange1"
                                  className="form-label w-50 text-end fw-bold"
                                >
                                  ₹ 100000
                                </label>
                              </div>
                            </div>
                            <div className="mt-lg-5 mt-1">
                              <input
                                type="range"
                                className="form-range m-0 text-danger"
                                id="customRange1"
                              />
                              <div>
                                <label
                                  htmlFor="customRange1 "
                                  className="form-label w-50 fw-bold"
                                >
                                  1 Day
                                </label>
                                <label
                                  htmlFor="customRange1"
                                  className="form-label w-50 text-end fw-bold"
                                >
                                  365 Day
                                </label>
                              </div>
                              <div className="mt-5">
                                <p className="fw-medium">
                                  These are the estimated values and are
                                  directional, please contact us or visit our
                                  nearest branch for more details.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center py-4">
                <p className="fw-medium">
                  Check status of your Gold Loan
                  <button className="btn ms-1 fw-medium download">
                    CHECK NOW
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="row" style={{ minHeight: "314px" }}>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div className="border  rounded p-4 d-flex flex-sm-row flex-column-reverse h-100 justify-content-between">
                <div className="d-flex flex-column justify-content-between">
                  <div className="text-danger fw-bold">REFER A FRIEND*</div>
                  <div>
                    <p className="fw-bold fs-14">
                      Refer a friend & get a Chance to Win Exciting Muthoot
                      Group Merchandise
                    </p>
                  </div>
                  <div>
                    <button className="btn ms-1 fw-medium download">
                      REFER NOW
                    </button>
                  </div>
                  <div>
                    <p className="text-secondary fs-12 mt-3"> *T&C apply</p>
                  </div>
                </div>
                <div className="align-self-center">
                  <div>
                    <img
                      src={bottle}
                      alt="bottle image"
                      className="img-fluid"
                      style={{ height: "200px", width: "200px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-lg-0 mt-4">
              <div className="border  rounded p-4 d-flex flex-sm-row flex-column-reverse h-100 justify-content-between">
                <div className="d-flex flex-column justify-content-between">
                  <div className="text-danger fw-bold">ASK AN EXPERT</div>
                  <div>
                    <div>
                      <p className="fw-bold fs-14">
                        NORTH, EAST & WEST INDIA TOLL-FREE NO.:
                      </p>
                      <div>
                        <p className="fs-12 fw-medium">1800 313 1212</p>
                      </div>
                    </div>
                    <div>
                      <p className="fw-bold fs-14">
                        SOUTH INDIA CALL CENTER NO.:
                      </p>
                      <div>
                        <p className="fs-12 fw-medium">99469 01212</p>
                        <div>
                          <p className="fs-12 fw-medium">
                            (Mon-Sat, 9:30 AM to 6 PM)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="fw-bold fs-14">WRITE TO US:</p>
                    <div>
                      <p className="fs-12 fw-medium">mails@muthootgroup.com</p>
                    </div>
                  </div>
                  <div>
                    <p className="fw-bold fs-14">BRANCH TIMINGS:</p>
                    <div>
                      <p className="fs-12 fw-medium">
                        Mon-Sat, 9:30 AM to 6 PM
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-secondary fs-12"> *T&C apply</p>
                  </div>
                </div>
                <div className="align-self-center">
                  <div>
                    <img
                      src={offerImg}
                      alt="bottle image"
                      className="img-fluid"
                      style={{
                        maxHeight: "200px",
                        maxWidth: "200px",
                      }}
                    />
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

