import React from "react";
import card1 from "../../assets/images/services/icon-1.png";
import card2 from "../../assets/images/services/icon-2.png";
import card3 from "../../assets/images/services/icon-3.png";
import card4 from "../../assets/images/services/icon-4.png";
import card5 from "../../assets/images/services/icon-5.png";

export const ServicesCard = () => {
  const cardData = [
    {
      image: card1,
      des1: "Quick",
      des2: "Loan Disbursal",
    },
    {
      image: card2,
      des1: "Minimum Loan Amount of ",
      des2: "₹1500 with No Max Limit",
    },
    {
      image: card3,
      des1: "Gold",
      des2: "Loan@Home",
    },
    {
      image: card4,
      des1: "Minimal",
      des2: "Documentation",
    },
    {
      image: card5,
      des1: "Pre and Part Payment",
      des2: "Options",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="justify-content-lg-between justify-content-sm-around justify-content-center align-items-center fs-14 row">
          {cardData.map((value, index) => (
            <div
              key={index}
              className="col-xl col-lg-4 mt-lg-4 col-sm-5 mt-4 col-10"
            >
              <div
                className="card d-flex justify-content-center align-items-center text-center p-2 pt-4 border-0 position-relative overflow-hidden"
                style={{
                  borderRadius: "10px",
                  boxShadow: "3px 0 16px rgba(0,0,0,.19)",
                }}
              >
                <div className="my-2">
                  <img
                    src={value.image}
                    alt="card-1"
                    style={{ height: "60px", width: "53px" }}
                  />
                </div>
                <div className="fw-medium text-nowrap">
                  <p>
                    <div>{value.des1}</div>
                    <div>{value.des2}</div>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
