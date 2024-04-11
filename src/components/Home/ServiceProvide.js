import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../assets/style/home.css";
import OwlCarousel from "react-owl-carousel";
import goldloanicon from "../../assets/images/home/goldloanicon.webp";

const ServiceProvide = () => {
  const options = {
    navText: [
      '<i className="fa-solid fa-chevron-left"></i>',
      '<i className="fa-solid fa-chevron-right"></i>',
    ],
    loop: false,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplaytimeout: 3000,
    dots: false,
    responsive: {
      0: {
        items: 2,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      800: {
        items: 4,
        nav: false,
      },
      1000: {
        items: 5,
        nav: false,
      },
      1200: {
        items: 7,
      },
    },
  };

  const ServiceProvideSection = [
    { img: goldloanicon, text: "GOLD LOAN" },
    { img: goldloanicon, text: "GOLD LOAN" },
    { img: goldloanicon, text: "GOLD LOAN" },
    { img: goldloanicon, text: "GOLD LOAN" },
    { img: goldloanicon, text: "GOLD LOAN" },
    { img: goldloanicon, text: "GOLD LOAN" },
    { img: goldloanicon, text: "GOLD LOAN" },
    { img: goldloanicon, text: "GOLD LOAN" },
    { img: goldloanicon, text: "GOLD LOAN" },
    { img: goldloanicon, text: "GOLD LOAN" },
    { img: goldloanicon, text: "GOLD LOAN" },
    { img: goldloanicon, text: "GOLD LOAN" },
  ];
  return (
    <>
      <div className="container">
        <h2 className="fw-bold text-center">Services We Provide</h2>
        <div className="mt-4 serviceProvide d-flex justify-content-between py-4 position-relative my-5">
          <OwlCarousel className="owl-theme" {...options}>
            {ServiceProvideSection.map((item, index) => (
              <div className="item text-center border-end px-4" key={index}>
                <div className="serviceIcon text-center w-100">
                  <img
                    src={item.img}
                    alt={item.img}
                    className="object-fit-contain"
                  />
                </div>
                <div className="fw-bold text-danger">{item.text}</div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};

export default ServiceProvide;
