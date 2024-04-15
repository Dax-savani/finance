import React from "react";

export const ServicesTabs = () => {
  return (
    <>
      <div className="container " data-aos="fade-up">
        <div className="d-flex justify-content-center align-items-center ">
          <div className="col-12">
            <ul className="nav nav-pills   mb-3" id="pills-tab" role="tablist">
              <div className="row w-100" style={{ marginLeft: "1px" }}>
                <div className="col-sm-6 p-0">
                  <li className="nav-item w-100 " role="presentation">
                    <button
                      className="mx-auto nav-link w-100 active py-3 fw-bold text-black text-nowrap"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      GOLD LOAN INFO
                    </button>
                  </li>
                </div>
                <div className="col-sm-6 p-0">
                  <li className="nav-item" role="presentation">
                    <button
                      className="mx-auto py-3  nav-link w-100 fw-bold text-black text-nowrap"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="true"
                    >
                      INVEST IN GOLD LOAN
                    </button>
                  </li>
                </div>
              </div>
            </ul>
            <div className="row">
              <div className="col-12">
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade show active fw-medium w-100"
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    tabIndex="0"
                  >
                    <div>
                      <div className="p-sm-4 p-2 tab">
                        <div className="fw-bold fs-5 mb-3">
                          What is a Gold Loan?
                        </div>
                        <div className="px-3">
                          <div className="mb-3">
                            <p>
                              Gold loans act as the quickest and easiest way to
                              get funds for business or personal requirements. A
                              gold loan is a secured loan which a borrower takes
                              from the lender in lieu of gold ornaments. The
                              loan amount that lenders sanction is typically a
                              certain percentage of the gold’s value. Like any
                              other loan, you can repay this with the help of
                              monthly instalments and once the loan has been
                              fully repaid, you receive back your gold articles.
                            </p>
                          </div>
                          <div className="mb-3">
                            <p>
                              Factors like the purity of gold used to make the
                              jewellery,{" "}
                              <span className="text-red">rate of gold</span> on
                              the particular date, and many more impact the loan
                              amount that you get against the gold ornaments you
                              pledged with the lender.
                            </p>
                          </div>
                          <div className="mb-3">
                            <p>
                              As opposed to other secured loans like a car loan
                              or home loan, there are zero restrictions on the
                              gold loan’s end use. A gold loan proves to be an
                              effective means to fulfil a sudden requirement of
                              money, be it for a business venture or your kid’s
                              education. You can easily check your
                              <span className="text-red">
                                {" "}
                                gold loan eligibility
                              </span>{" "}
                              on our website if you wish to avail a gold loan.
                            </p>
                          </div>
                          <div className="mb-3">
                            <p>
                              As one of the highly reputed gold loan providers
                              in India, Muthoot Finance has a widespread reach
                              and is a name you can trust. We are known for the
                              different types of services we provide so rest
                              assured as we ensure an amiable experience
                              throughout for our customers.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade fw-medium w-100"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    tabIndex="0"
                  >
                    <div>
                      <div className="p-4 tab">
                        <div className="fw-bold fs-5 mb-3">
                          Why Choose a Gold Loan?
                        </div>
                        <div className="px-3">
                          <div className="mb-3">
                            <p>
                              Here are the top reasons why people choose gold
                              loan:
                            </p>
                          </div>
                        </div>
                        <div>
                          <div className="mb-2 fs-14">
                            <p className="text-secondary">
                              <i className="fa-solid fa-chevron-right me-2 "></i>You
                              get easy and quick financing at attractive
                              interest rates when you avail a gold loan.
                            </p>
                          </div>
                          <div className="mb-2 fs-14">
                            <p className="text-secondary">
                              <i className="fa-solid fa-chevron-right me-2 "></i>
                              Minimum amount of documentation is required.
                            </p>
                          </div>
                          <div className="mb-2 fs-14">
                            <p className="text-secondary">
                              <i className="fa-solid fa-chevron-right me-2 "></i>
                              Quick disbursement of the loan.
                            </p>
                          </div>
                          <div className="mb-2 fs-14">
                            <p className="text-secondary">
                              <i className="fa-solid fa-chevron-right me-2 "></i>
                              When compared to most of the other loan options,
                              gold loans feature an interest rate that is low.
                            </p>
                          </div>
                        </div>
                        <div className="px-3">
                          <div className="mb-3">
                            <p>
                              At Muthoot Finance, you can avail the best
                              interest rates when you avail a gold loan.
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
        </div>
      </div>
    </>
  );
};
