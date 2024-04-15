import React from "react";

// import gh from "../../assets/images/about/heroAbout.jpg";

// import df from "../../assets/images/about/heroAbout.jpg"

const Hero = ({ line1, line2, line3, line4, line5, bGSrc }) => {
  return (
    <>
      <div className="mainHero">
        <div className="mainimage">
          <div
            className="heroimage"
            style={{ backgroundImage: `url(${bGSrc})` }}
          >
            <div className="imagedetails">
              <div className="imagebox px-3 d-none d-md-block">
                <div className="fixBox m-1 ">
                  <h6 className="white fs-18 fw-bolder background">{line1}</h6>
                </div>
                <h4 className="lightBlack fs-24 m-0 pt-2">{line2}</h4>
                <h2 className="fw-bold red fs-43 m-0">{line3}</h2>
              </div>
            </div>
          </div>
          {/* <div className="responsiveDetails">
            <div className="imagebox p-3 d-block d-md-none">
              <div className="fixBox">
                <h6 className=" fs-16 fw-bold red m-0">{line2}</h6>
              </div>
              <h2 className="fw-bold lightBlack fs-22 m-0">{line3}</h2>
            </div>
          </div> */}
          <div className="responsiveDetails">
            <div className="imagebox p-3 d-block d-md-none">
              <div className="fixBox ">
                <h6 className=" fs-16 fw-bold red m-0">{ line1}</h6>
              </div>
              <h2 className="fw-bold lightBlack fs-22 m-0">
                {line2}{" "}{line3}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

{
  /* <div className="mainHero">
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
              <h2 className="fw-bold red fs-43 m-0">IMMEDIATE ASSISTANCE</h2>
            </div>
          </div>
        </div>
        <div className="responsiveDetails">
          <div className="imagebox p-3 d-block d-md-none">
            <div className="fixBox">
              <h6 className=" fs-16 fw-bold red m-0">GENERAL QUERIES</h6>
            </div>
            <h2 className="fw-bold lightBlack fs-22 m-0">
              GET IMMEDIATE ASSISTANCE
            </h2>
          </div>
        </div>
      </div>
    </div> */
}
