import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import awardImage from "../../assets/images/about/award-icon.png";
import sliderImg1 from "../../assets/images/about/img1.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Award = () => {
  const awardProps = {
    loop: false,
    margin: 10,
    nav: true,
    dots: true,
    items: 1,
  };

  return (
    <>
      <div className="py-5 mb-5" style={{ backgroundColor: "#F3F3F3" }}>
        <h3 className="text-center mb-4" style={{ fontWeight: "600" }}>
          AWARDS & RECOGNITION
        </h3>
        <div>
          <Container>
            {/* <Row style={{ height: "230px" }}> */}
            <Row style={{ height: "auto" }}>
              <Col xs={12} lg={6} xl={8} data-aos="fade-right">
                <Row>
                  <div
                    data-fs="right"
                    className="d-flex position-static awardMain pb-4 pb-xl-0"
                  >
                    <div
                      style={{ width: "300px" }}
                      className="d-none d-xl-block"
                    >
                      <img
                        src={awardImage}
                        alt="award-icon"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div
                      className="position-static awardTextSection"
                      style={{
                        left: "0px",
                        fontSize: "15px",
                        fontWeight: "500",
                      }}
                    >
                      <h3
                        style={{ fontSize: "80px", color: "#fff" }}
                        className="d-none d-xl-block"
                      >
                        WARDS
                      </h3>
                      <p className="mb-0 ps-0" style={{ paddingLeft: "30px" }}>
                        Working hard towards improving and innovating the way
                      </p>
                      <p className="mb-0 ps-0" style={{ paddingLeft: "40px" }}>
                        the world accesses financial services, and practising
                      </p>
                      <p className="mb-0 ps-0" style={{ paddingLeft: "50px" }}>
                        financial inclusion for more than 800 years, Muthoot
                      </p>
                      <p className="mb-0 ps-0" style={{ paddingLeft: "60px" }}>
                        Finance has time and brgin been recognised for its
                        efforts.
                      </p>
                    </div>
                  </div>
                </Row>
              </Col>
              <Col xs={12} lg={6} xl={4} data-aos="fade-left">
                <OwlCarousel className="owl-theme" {...awardProps}>
                  <div className="item">
                    <div
                      className="p-1 rounded-1"
                      style={{ backgroundColor: "#F46A25" }}
                    >
                      <img src={sliderImg1} alt="slider" />
                    </div>
                  </div>
                </OwlCarousel>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Award;
