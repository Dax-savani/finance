import React from "react";

function ContactUs() {
  return (
    <>
      <section>
        <div className="contactUs pt-5">
          <div className="px-md-5 px-3 ">
            <div className="contactUsBox row justify-content-center">
              <div className="backgroundColorBox col-lg-10 col-12">
                <div className="contactUsBoxPadding ">
                  <ul className="row justify-content-between align-items-center">
                    <li className="col-xl-4 col-12 text-center">
                      <h4 className="fs-33 black m-0">Connect with us</h4>
                    </li>
                    <li className="col-xl-8 col-12 py-3 text-center">
                      <ul className="d-flex justify-content-center">
                        <li data-aos="fade-down" data-aos-duration="800">
                          <div className="socialBox d-flex justify-content-center align-items-center">
                            <a href="#">
                              <span>
                                <i className="fa-brands fa-facebook-f white"></i>
                              </span>
                            </a>
                          </div>
                        </li>
                        <li data-aos="fade-down" data-aos-duration="1000">
                          <div className="socialBox d-flex justify-content-center align-items-center">
                            <a href="#">
                              <span>
                                <i className="fa-brands fa-twitter white"></i>
                              </span>
                            </a>
                          </div>
                        </li>
                        <li data-aos="fade-down" data-aos-duration="1200">
                          <div className="socialBox d-flex justify-content-center align-items-center">
                            <a href="#">
                              <span>
                                <i className="fa-brands fa-youtube white"></i>
                              </span>
                            </a>
                          </div>
                        </li>
                        <li data-aos="fade-down" data-aos-duration="1400">
                          <div className="socialBox d-flex justify-content-center align-items-center">
                            <a href="#">
                              <span>
                                <i className="fa-brands fa-linkedin-in white"></i>
                              </span>
                            </a>
                          </div>
                        </li>
                        <li data-aos="fade-down" data-aos-duration="1600">
                          <div className="socialBox d-flex justify-content-center align-items-center">
                            <a href="#">
                              <span>
                                <i className="fa-brands fa-android white"></i>
                              </span>
                            </a>
                          </div>
                        </li>
                        <li data-aos="fade-down" data-aos-duration="1800">
                          <div className="socialBox d-flex justify-content-center align-items-center">
                            <a href="#">
                              <span>
                                <i className="fa-brands fa-apple white"></i>
                              </span>
                            </a>
                          </div>
                        </li>
                        <li data-aos="fade-down" data-aos-duration="2000">
                          <div className="socialBox d-flex justify-content-center align-items-center">
                            <a href="#">
                              <span>
                                <i className="fa-brands fa-instagram white"></i>
                              </span>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
