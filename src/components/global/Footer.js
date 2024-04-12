import React from "react";
import footer1 from "../../assets/images/footer/footer-1.webp";
import footer2 from "../../assets/images/footer/footer-2.webp";
import footer3 from "../../assets/images/footer/footer-3.webp";
import logo from "../../assets/images/header/logo.webp";
import "../../assets/style/footer.css";


export const Footer = () => {
  return (
    <>
      <div className="footer-bg mt-5">
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="my-auto">
              <img src={logo} alt="logo" style={{width:"274px", height:"81px",objectFit:"contain"}} className="img-fluid" />
            </div>

            <div className="px-2 m-md-0 mt-md-5 mt-4 ">
              <div className="fw-bold text-white mb-1">NAVIGATION</div>
              <div>
                <div className="footer-data">HOME</div>
                <div className="footer-data">SERVICES</div>
                <div className="footer-data">CORPORATE</div>
                <div className="footer-data">INVESTORS</div>
                <div className="footer-data">POLICY</div>
                <div className="footer-data">DIGITAL INITIATIVES</div>
                <div className="footer-data">CAREERS</div>
                <div className="footer-data">CSR</div>
                <div className="footer-data">MEDIA</div>
                <div className="footer-data">NEWS</div>
                <div className="footer-data">CONTACT</div>
              </div>
            </div>

            <div className="px-2 m-md-0 mt-md-5 mt-4">
              <div className="fw-bold text-white mb-1">CONTACT</div>
              <div>
                <div className="footer-data">General Queries</div>
                <div className="footer-data">NCD Queries</div>
                <div className="footer-data">Branch Locator</div>
              </div>
              <div className="fw-bold text-white mb-1 mt-3">MEDIA</div>
              <div>
                <div className="footer-data">Video Gallery</div>
                <div className="footer-data">Image Gallery</div>
                <div className="footer-data">Downloads</div>
                <div className="footer-data">Awards & Recognition</div>
              </div>
            </div>

            <div className="px-2 m-md-0 mt-md-5 mt-4">
              <div className="fw-bold text-white mb-3 mb-md-2 ">FOLLOW US ON</div>
              <div
                className="d-flex justify-content-between"
                style={{ width: "150px" }}
              >
                <div className="footer-icon">
                  <i class="fa-brands fa-facebook-f"></i>
                </div>
                <div className="footer-icon">
                  <i class="fa-brands fa-twitter"></i>
                </div>
                <div className="footer-icon">
                  <i class="fa-brands fa-youtube"></i>
                </div>
                <div className="footer-icon">
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
              <div className="footer-not mt-3 mt-md-2">
                DOWNLOAD iMUTHOOT <br /> MOBILE APP
                <div className="d-flex justify-content-between mt-3 mt-md-2">
                  <div>
                    <img
                      src={footer1}
                      alt="footer"
                      className="img-fluid rounded"
                      style={{ height: "64.44px", width: "64.44px" }}
                    />
                  </div>
                  <div className="d-flex flex-column ms-1">
                    <div>
                      <img
                        src={footer2}
                        alt="footer"
                        className="img-fluid rounded"
                        style={{ width: "94.5px", height: "32.38px" }}
                      />
                    </div>
                    <div className="mt-1">
                      <img
                        src={footer3}
                        alt="footer"
                        className="img-fluid rounded"
                        style={{ width: "94.5px", height: "32.38px" }}
                      />
                    </div>
                  </div>
                </div>
                <div className="footer-not mt-3 mt-md-2">ONE APP MANY BENEFITS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
