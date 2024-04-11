import React from "react";
import logo from "../../assets/images/header/logo.webp";
import "../../assets/style/header.css";


export const Header = () => {
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
        <div>
          <div className="d-none d-sm-flex text-end justify-content-end fw-medium align-items-center">
            <span>
              <i
                class="fa-brands fa-whatsapp fs-3"
                style={{ color: "#44b706" }}
              ></i>
              <span className="text-secondary ">WhatsApp: +91-7558077666</span>
            </span>

            <span className="mx-3">
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
            </span>
          </div>
        </div>
        <nav className="navbar navbar-expand-xl shadow-sm">
          <button
            className="navbar-toggler mx-sm-3 border-0 fs-2 text-danger "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobileMenu"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
          <a className="p-sm-2 pb-3" href="#">
            <img
              src={logo}
              alt=""
              style={{ height: "40px", width: "165px", objectFit: "contain" }}
            />
          </a>
          <div className="collapse navbar-collapse">
            <div className="ms-auto ">
              <div>
                <ul className="navbar-nav ">
                  <li className="nav-item">
                    <a
                      className="nav-link active px-2  header-hover"
                      aria-current="page"
                      href="#"
                      style={{ borderRight: "2px dotted #bfbfbf" }}
                    >
                      <div>HOME</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active px-2  header-hover"
                      aria-current="page"
                      href="#"
                      style={{ borderRight: "2px dotted #bfbfbf" }}
                    >
                      <div>SERVICES</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active px-2  header-hover"
                      aria-current="page"
                      href="#"
                      style={{ borderRight: "2px dotted #bfbfbf" }}
                    >
                      <div>CORPORATE</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active px-2  header-hover"
                      aria-current="page"
                      href="#"
                      style={{ borderRight: "2px dotted #bfbfbf" }}
                    >
                      <div>INVESTORS</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active px-2  header-hover"
                      aria-current="page"
                      href="#"
                      style={{ borderRight: "2px dotted #bfbfbf" }}
                    >
                      <div>POLICY</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active px-2  header-hover"
                      aria-current="page"
                      href="#"
                      style={{ borderRight: "2px dotted #bfbfbf" }}
                    >
                      <div>DIGITAL INITIATIVES</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active px-2  header-hover"
                      aria-current="page"
                      href="#"
                      style={{ borderRight: "2px dotted #bfbfbf" }}
                    >
                      <div>CAREERS</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active px-2  header-hover"
                      aria-current="page"
                      href="#"
                      style={{ borderRight: "2px dotted #bfbfbf" }}
                    >
                      <div>CSR</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active px-2  header-hover"
                      aria-current="page"
                      href="#"
                      style={{ borderRight: "2px dotted #bfbfbf" }}
                    >
                      <div>MEDIA</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active px-2  header-hover"
                      aria-current="page"
                      href="#"
                      style={{ borderRight: "2px dotted #bfbfbf" }}
                    >
                      <div>NEWS</div>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link active px-2  header-hover"
                      aria-current="page"
                      href="#"
                      style={{ borderRight: "2px dotted #bfbfbf" }}
                    >
                      <div>CONTACT</div>
                    </a>
                  </li>
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
        <div id="mobileMenu" className="collapse navbar-collapse d-xl-none">
          <ul style={{ height: "509px", overflow: "auto" }}>
            <li className=" header-hover p-3 border-bottom fw-bold">
              <span>HOME</span>
            </li>
            <li className=" header-hover p-3 border-bottom fw-bold">
              <span>SERVICES</span>
            </li>
            <li className=" header-hover p-3 border-bottom fw-bold">
              <span>CORPORATE</span>
            </li>
            <li className=" header-hover p-3 border-bottom fw-bold">
              <span>INVESTORS</span>
            </li>
            <li className=" header-hover p-3 border-bottom fw-bold">
              <span>POLICY</span>
            </li>
            <li className=" header-hover p-3 border-bottom fw-bold">
              <span>DIGITAL INITIATIVES</span>
            </li>
            <li className=" header-hover p-3 border-bottom fw-bold">
              <span>CAREERS</span>
            </li>
            <li className=" header-hover p-3 border-bottom fw-bold">
              <span>CSR</span>
            </li>
            <li className=" header-hover p-3 border-bottom fw-bold">
              <span>MEDIA</span>
            </li>
            <li className=" header-hover p-3 border-bottom fw-bold">
              <span>NEWS</span>
            </li>
            <li className=" header-hover p-3 border-bottom fw-bold">
              <span>CONTACT</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
