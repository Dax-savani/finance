import React, { useState } from "react";
import logo from "../../assets/images/header/logo.webp";
import '../../assets/style/header.css'
import { NavLink } from "react-router-dom";
export const Header = () => {

  const [toggle,setToggle] = useState("")
const navText = [
  { lable: "HOME", to: "/" },
  { lable: "SERVICES", to: "/services" },
  { lable: "CORPORATE", to: "/about" },
  { lable: "INVESTORS", to: "/" },
  { lable: "POLICY", to: "" },
  { lable: "DIGITAL INITIATIVES", to: "/" },
  { lable: "CAREERS", to: "/" },
  { lable: "CSR", to: "/" },
  { lable: "MEDIA", to: "/" },
  { lable: "NEWS", to: "/" },
  { lable: "CONTACT", to: "/contact" },
];
  const language = [
    "Bengali",
    "Telugu",
    "Tamil",
    "Sindhi",
    "Punjabi",
    "Odia (Oriya)",
    "Marathi",
    "Malayalam",
    "Kannada",
    "Hindi",
    "Gujarati",
    "Bengali",
  ];
  return (
    <>
      <div className=" position-fixed top-0 w-100 z-3 bg-white">
        <div className="d-flex justify-content-between shadow-sm">
          <div className="ms-3 d-xl-block d-none ">
            <a className="p-sm-2 pb-3" href="#">
              <img
                src={logo}
                alt=""
                style={{ width: "165px", objectFit: "contain" }}
              />
            </a>
          </div>
          <div className="w-100">
            <div>
              <div className="d-none d-sm-flex text-end justify-content-end fw-medium align-items-center pt-1 pb-2">
                <div>
                  <i
                    className="fa-brands fa-whatsapp fs-24 me-1 p-1"
                    style={{ color: "#44B706" }}
                  ></i>
                </div>
                <div className="text-secondary fs-14">
                  WhatsApp: +91-7558077666
                </div>
                <div className="mx-3">
                  <select
                    class="form-select form-select-sm"
                    style={{ backgroundColor: "#E9E9E9" }}
                    aria-label="Default select example"
                  >
                    <option selected>Select Language</option>
                    {language.map((val, ind) => (
                      <option value={val} key={ind}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <nav className="navbar navbar-expand-xl ">
              <button
                className="navbar-toggler mx-sm-3 border-0 fs-2 text-danger "
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
                    style={{ maxWidth: "165px", objectFit: "contain" }}
                  />
                </a>
              </div>
              <div className="collapse navbar-collapse">
                <div className="ms-auto ">
                  <div>
                    <ul className="navbar-nav ">
                      {navText.map((val, ind) => (
                        <NavLink to={val.to} key={ind}>
                          <li key={ind} className="nav-item">
                            <a
                              className="nav-link active px-2 header-hover"
                              aria-current="page"
                              href="#"
                              style={{ borderRight: "2px dotted #BFBFBF" }}
                            >
                              <div>{val.lable}</div>
                            </a>
                          </li>
                        </NavLink>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="">
                <span>
                  <button className="btn py-0">
                    <i class="fa-solid fa-magnifying-glass fs-5 text-danger"></i>
                  </button>
                </span>
              </div>
            </nav>
          </div>
        </div>

        <div
          id="mobileMenu"
          className={`collapse navbar-collapse d-xl-none ${toggle}`}
        >
          <ul style={{ height: "509px", overflow: "auto" }}>
            {navText.map((val, ind) => (
              <NavLink to={val.to} key={ind}>
                <li
                  key={ind}
                  onClick={() => setToggle("hide")}
                  className="header-hover p-3 border-bottom fw-bold"
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
