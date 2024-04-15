import React from "react";

const Hero = ({ line1, line2, line3, line4, line5, bGSrc }) => {
  return (
    <>
      <section>
        <div className="mainHero">
          <div className="mainimage">
            <div
              className="heroimage"
              style={{ backgroundImage: `url(${bGSrc})` }}
            >
              <div className="imagedetails">
                <div className="imagebox px-3 d-none d-md-block">
                  <div className="fixBox m-1 ">
                    <h6 className="white fs-18 fw-bolder background">
                      {line1}
                    </h6>
                  </div>
                  <h4 className="lightBlack fs-24 m-0 pt-2">{line2}</h4>
                  <h2 className="fw-bold red fs-43 m-0">{line3}</h2>
                </div>
              </div>
            </div>
            <div className="responsiveDetails">
              <div className="imagebox p-3 d-block d-md-none">
                <div className="fixBox">
                  <h6 className=" fs-16 fw-bold red m-0">{line4}</h6>
                </div>
                <h2 className="fw-bold lightBlack fs-22 m-0">{line5}</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
