import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import penSmall from "../../assets/images/about/pen-small.png";

import founder0 from "../../assets/images/about/founder_0.jpg";

const OwnReview = () => {
  return (
    <>
      <section>
        <Container className="px-5">
          <div className="p-5 border border-2" style={{ position: "relative" }}>
            <Row>
              <Col
                xs={12}
                lg={3}
                className="pb-4 pb-lg-0"
                data-aos="fade-right"
              >
                <div className="ownReview">
                  <img
                    src={founder0}
                    alt="founder"
                    className="rounded-circle"
                  />
                </div>
              </Col>
              <Col xs={12} lg={8} data-aos="fade-left">
                <figure className="px-lg-4">
                  <blockquote className="blockquote">
                    <p
                      style={{
                        fontSize: "16px",
                        letterSpacing: "1px",
                        lineHeight: "1.4",
                        fontWeight: "400",
                        marginBottom: "23px",
                      }}
                      className="reviewText"
                    >
                      Let us not judge ourselves by the profit we make but by
                      the trust and the confidence that people have in us. Let
                      us{" "}
                      <span className="fw-bold">
                        cherish and nurture that trust and ensure
                      </span>{" "}
                      that every person who deals with us deals with the
                      confidence that he will not be misguided but his interests
                      will be{" "}
                      <span className="fw-bold">carefully protected.</span>{" "}
                    </p>
                  </blockquote>
                  <figcaption className="blockquote-footer">
                    <strong className="fw-bold">Shri M. George Muthoot</strong>
                    <br />
                    <span className="fw-500">
                      Founder Chairman - Banking
                      <br />
                      (1911-1993)
                    </span>
                  </figcaption>
                </figure>
              </Col>
            </Row>
            <div
              style={{
                height: "100%",
                position: "absolute",
                right: "-1%",
                bottom: "-5%",
              }}
              className="d-lg-block d-none"
            >
              <img
                src={penSmall}
                alt="pen"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default OwnReview;
