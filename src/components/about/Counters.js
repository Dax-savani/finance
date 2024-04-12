import React from "react";
import { Col, Row } from "react-bootstrap";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const counterDetails = [
  {
    title: "70 Crore+",
    details: "Satisfied Customers, Including Repeat Customers",
  },
  {
    title: "6100+",
    details: "Branches",
  },
  {
    title: "40,000+",
    details: "Employees Across",
  },
  {
    title: "800",
    details: "Years of Family Business Legacy",
  },
];

const counterProps = {
  loop: false,
  margin: 10,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
};

const Counters = () => {
  return (
    <>
      <div>
        <div className="container py-5 mb-5">
          <Row
            className="py-5 text-center mx-1"
            style={{
              backgroundColor: "#787878",
              color: "#fff",
            }}
          >
            <OwlCarousel className="owl-theme" {...counterProps}>
              {counterDetails.map((detail, index) => (
                <div
                  key={index}
                  className="item"
                  style={{
                    height: "150px",
                    borderRight:
                      index === counterDetails.length - 1
                        ? "none"
                        : "1px solid #979797",
                  }}
                >
                  <Col key={index}>
                    <h3 style={{ fontSize: "40px" }}>{detail.title}</h3>
                    <h4 style={{ fontSize: "20px" }}>{detail.details}</h4>
                  </Col>
                </div>
              ))}
            </OwlCarousel>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Counters;
