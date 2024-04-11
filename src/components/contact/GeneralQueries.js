import React from "react";
import logoimage from "../../assets/images/Contact/general-image.png";

function GeneralQueries() {
  return (
    <>
      <section>
        <div className="GeneralQueries">
          <div className="container">
            <div className="generalBox pt-5">
              <div className="generalHeading text-center">
                <h1 className="fs-33 fw-semibold pm-1">GENERAL QUERIES</h1>
              </div>
              <div className="mainBox row justify-content-center">
                <div className="backgroundColorBox col-md-10 col-12">
                  <div className="mainquestion row bg-white p-3 m-1  justify-content-center">
                    <div className="iconsimage col-12 my-3 my-md-0 col-md-2 d-flex justify-content-center align-items-center">
                      <div className="Imagesize ">
                        <img src={logoimage} alt={logoimage} />
                      </div>
                    </div>
                    <div className="details col-10 ">
                      <h4 className="fs-20 lightGray fw-bold m-0 text-md-start text-center">
                        Sales Enquiry
                      </h4>
                      <p className="fs-17 lightGray mb-2 text-md-start text-center generalP">
                        You can reach us for any query through any of our access
                        channels mentioned below
                      </p>
                      <ul className="d-md-flex w-100 text-md-start text-center">
                        <li className="w-md-50 w-100">
                          <p className="fs-17 lightGray fw-bold generalP">
                            North, East & West India Toll-free No
                          </p>
                          <span>
                            <a
                              href="#"
                              className="fs-24 gray fw-medium generalA"
                            >
                              1800 313 1212
                            </a>
                          </span>
                        </li>
                        <li className="w-md-50 w-100">
                          <p className="fs-17 lightGray fw-bold generalP">
                            South India Toll-free No
                          </p>
                          <span>
                            <a
                              href="#"
                              className="fs-24 gray fw-medium generalA"
                            >
                              99469 01212
                            </a>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GeneralQueries;
