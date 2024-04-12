import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import goldIcon from "../../assets/images/about/goldicon.png";
import homeIcon from "../../assets/images/about/homeicon.png";
import homegearIcon from "../../assets/images/about/homegearicon.png";
import moneybagIcon from "../../assets/images/about/moneybagicon.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const ProvidedServices = () => {
  const servicesSliderProps = {
    loop: true,
    margin: 20,
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      780: {
        items: 3,
      },
      1200: {
        items: 4,
      },
    },
  };

  const serviceInfo = [
    {
      image: goldIcon,
      title: "GOLD LOAN",
      details: "We have the largest gold loan portfolio in India.",
    },
    {
      image: homeIcon,
      title: "GOLD LOAN@HOME",
      details: "Get a gold loan at the ease of your home",
    },
    {
      image: homegearIcon,
      title: "HOUSING FINANCE",
      details: "We provide home loans at attractive rates.",
    },
    {
      image: moneybagIcon,
      title: "PERSONAL LOAN",
      details: "Find the right personal loan for your needs.",
    },
  ];

  return (
    <>
      <div className="mb-5 mx-5">
        <div className="py-5 px-3" style={{ backgroundColor: "#F3F3F3" }}>
          <h3 className="text-center pb-3" style={{ fontWeight: "600" }}>
            Services We Provide
          </h3>
          <div>
            <Container style={{ height: "100%" }}>
              <Row style={{ height: "100%" }}>
                <OwlCarousel
                  className="owl-theme"
                  {...servicesSliderProps}
                  style={{ height: "100%" }}
                >
                  {serviceInfo.map((single, index) => (
                    <div className="item" key={index}>
                      <Col
                        className="rounded-4 py-4 px-4 bg-white"
                        key={index}
                        style={{ height: "230px" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                          }}
                        >
                          <div>
                            <div className="d-flex mb-2">
                              <img
                                src={single.image}
                                alt={single}
                                style={{ width: "50px" }}
                              />
                              <h4
                                className="red"
                                style={{
                                  fontSize: "17px",
                                  fontWeight: "600",
                                  paddingLeft: "10px",
                                }}
                              >
                                {single.title}
                              </h4>
                            </div>
                            <div>
                              <p>{single.details}</p>
                            </div>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="red text-decoration-underline link-underline-offset-3 fw-semibold"
                              style={{ fontSize: "14px" }}
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </Col>
                    </div>
                  ))}
                </OwlCarousel>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProvidedServices;
