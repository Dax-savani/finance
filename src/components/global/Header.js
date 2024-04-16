import React, { useState } from "react";
import logo from "../../assets/images/header/logo.png";
import '../../assets/style/header.css'
import { NavLink, useNavigate } from "react-router-dom";
export const Header = () => {

  const [toggle,setToggle] = useState("")
const navText = [
  { lable: "HOME", to: "/" },
  { lable: "ABOUT", to: "/about" },
  { lable: "GOLD LOAN", to: "/services" },
  { lable: "POLICY", to: "/policy" },
  { lable: "CONTACT", to: "/contact" },
];
 const navigate = useNavigate()
  return (
    <>
      <div className=" position-fixed top-0 w-100 z-3 bg-orange ">
        <div className="d-flex justify-content-between align-items-center">
          <div className="ms-3 d-xl-block d-none ">
            <a className="p-sm-2 pb-3" href="#">
              <img
                src={logo}
                className="img-fluid"
                onClick={() => navigate("/")}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                }}
              />
            </a>
          </div>
          <div className="w-100">
            <div className="mx-4">
              <div className="d-none d-sm-flex text-end justify-content-end  fw-medium align-items-center pt-1 pb-2">
                <div>
                  <i
                    className="fa-brands fa-whatsapp fs-24 me-1 p-1"
                    style={{ color: "#fff" }}
                  ></i>
                </div>
                <div className="text-white fs-14">WhatsApp: +91-7558077666</div>
              </div>
            </div>
            <nav className="navbar navbar-expand-xl d-xl-flex justify-content-xl-between align-items-xl-center ">
              <button
                className="navbar-toggler border-0 mx-sm-3 fs-2 text-white "
                type="button"
                onClick={() => setToggle("")}
                data-bs-toggle="collapse"
                data-bs-target="#mobileMenu"
              >
                <i class="fa-solid fa-bars"></i>
              </button>
              <div className="d-xl-none ">
                <a className="p-sm-2 pb-3" href="#">
                  <img
                    src={logo}
                    alt="logo"
                    className="img-fluid"
                    style={{ maxWidth: "90px",maxHeight: "90px" }}
                  />
                </a>
              </div>
              <div className="collapse d-none d-xl-block navbar-collapse">
                <div className="ms-auto ">
                  <div>
                    <ul className="navbar-nav ">
                      {navText.map((val, ind) => (
                        <a href="">
                          <NavLink to={val.to} key={ind}>
                            <li key={ind} className="nav-item">
                              <a
                                className="nav-link active px-2 header-hover text-white"
                                aria-current="page"
                                href="#"
                                style={{ borderRight: "2px dotted #BFBFBF" }}
                              >
                                <div>{val.lable}</div>
                              </a>
                            </li>
                          </NavLink>
                        </a>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div
          id="mobileMenu"
          className={`collapse navbar-collapse bg-white d-xl-none ${toggle}`}
        >
          <ul>
            {navText.map((val, ind) => (
              <NavLink to={val.to} key={ind}>
                <li
                  key={ind}
                  onClick={() => setToggle("hide")}
                  className="header-hover p-3 border-bottom fw-bold text-orange"
                >
                  <span>{val.lable}</span>
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
