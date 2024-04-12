import React from "react";

function HeroSection() {
  return (
    <>
      <section>
        <div className="container">
          <ul className="d-flex">
            <li className="py-2 px-1 d-flex align-items-center">
              <a className=" active fs-14 black word" href="#">
                Home
              </a>
              <i className="fa-solid fa-angle-right px-2" />
            </li>
            <li className="py-2 px-1 d-flex align-items-center">
              <a className=" fs-14 black word" href="#">
                Contact
              </a>
              <i className="fa-solid fa-angle-right px-2" />
            </li>
          </ul>
        </div>
        <div className="mainHero w-100">
          <div className="mainimage">
            <div className="heroimage">
              <div className="imagedetails">
                <div className="imagebox px-3 d-none d-md-block">
                  <div className="fixBox m-1 ">
                    <h6 className="white fs-18 fw-bolder background">
                      GENERAL QUERIES
                    </h6>
                  </div>
                  <h4 className="lightBlack fs-24 m-0 pt-2">Get</h4>
                  <h2 className="fw-bold red fs-43 m-0">
                    IMMEDIATE ASSISTANCE
                  </h2>
                </div>
              </div>
            </div>
            <div className="responsiveDetails">
              <div className="imagebox p-3 d-block d-md-none">
                <div className="fixBox ">
                  <h6 className=" fs-16 fw-bold red m-0">GENERAL QUERIES</h6>
                </div>
                <h2 className="fw-bold lightBlack fs-22 m-0">
                  GET IMMEDIATE ASSISTANCE
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
