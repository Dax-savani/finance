import React from "react";
import footer1 from "../../assets/images/footer/footer-1.webp";
import footer2 from "../../assets/images/footer/footer-2.webp";
import footer3 from "../../assets/images/footer/footer-3.webp";
import logo from "../../assets/images/footer/Asset_3_2x-100-removebg-preview.png";
import "../../assets/style/footer.css";
// import {  NavLink } from "react-router-dom";
// import logo from "../../assets/images/header/logo.webp";
import "../../assets/style/footer.css";
import { Link, NavLink, useNavigate } from "react-router-dom";


export const Footer = () => {
  const navText = [
    { lable: "HOME", to: "/" },
    { lable: "SERVICES", to: "/services" },
    { lable: "ABOUT US", to: "/about" },
    { lable: "POLICY", to: "/policy" },
    { lable: "CONTACT", to: "/contact" },
  ];
  const navigate = useNavigate()
  return (
    <>
      <div className="footer-bg mt-5  py-5">
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="my-auto mx-sm-0 mx-auto">
              <img
                onClick={() => navigate("/")}
                alt="logo"
                style={{height: "200px" }}
                className="img-fluid"
              />
            </div>

            <div className="px-2">
              <div className="fw-bold text-white mb-3">NAVIGATION</div>
              <div>
                {navText.map((val, ind) => (
                  <NavLink to={val.to} key={ind}>
                    <div className="footer-data">{val.lable}</div>
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="px-2">
              <div className="mb-5">
                <div className="fw-bold text-white mb-3">CONTACT</div>
                <div>
                  <Link to={"/contact"}>
                    <div className="footer-data">General Queries</div>
                  </Link>
                  <Link to={"/ncd-queries"}>
                    <div className="footer-data">NCD Queries</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="px-2">
              <div className="fw-bold text-white mb-3">Shemes</div>
              <div>
                <div className="footer-data">MUTHOOT ONE PERCENT LOAN</div>
                <div className="footer-data">MUTHOOT ULTIMATE LOAN (MUL)</div>
                <div className="footer-data">MUTHOOT DELIGHT LOAN</div>
                <div className="footer-data">MUTHOOT MUDRALOAN</div>
                <div className="footer-data">MUTHOOT ADVANTAGE LOAN</div>
                <div className="footer-data">
                  MUTHOOT HIGH VALUE PLUS LOAN (MHP)
                </div>
                <div className="footer-data">MUTHOOT HIGH VALUE LOAN (MHL)</div>
                <div className="footer-data">MUTHOOT BIG BUSINESS LOANS</div>
              </div>
            </div>

            <div className="px-2">
              <div className="fw-bold text-white mb-3 mb-md-4 ">
                FOLLOW US ON
              </div>
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
              <div className="footer-not mt-3 mt-md-3">
                DOWNLOAD FINCORP <br /> MOBILE APP
                <div className="d-flex justify-content-between mt-3 mt-md-2">
                  <div>
                    <img
                      src={logo}
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
                <div className="footer-not mt-3 mt-md-2">
                  ONE APP MANY BENEFITS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
