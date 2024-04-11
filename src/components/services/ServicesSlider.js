import React from 'react'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import OwlCarousel from "react-owl-carousel";
import serviceImg1 from '../../assets/images/services/1.jpg';
import serviceImg2 from '../../assets/images/services/2.jpg';
import serviceImg3 from '../../assets/images/services/3.jpg';
import serviceImg4 from '../../assets/images/services/4.jpg';
import serviceImg5 from '../../assets/images/services/5.jpg';
import serviceImg6 from '../../assets/images/services/6.jpg';
import serviceImg7 from '../../assets/images/services/7.jpg';
import serviceImg8 from '../../assets/images/services/8.jpg';
import serviceImg9 from '../../assets/images/services/9.jpg';
import serviceImg10 from '../../assets/images/services/10.png';
import serviceImg11 from '../../assets/images/services/11.png';
import serviceImg12 from '../../assets/images/services/12.png';
export const ServicesSlider = () => {
    const options = {
      navText: [
        '<i className="fa-solid fa-chevron-left "></i>',
        '<i className="fa-solid fa-chevron-right "></i>',
      ],
      loop: true,
      margin: 10,
      nav: true,
      autoplay: true,
      autoplaytimeout: 3000,
      dots: false,
      responsive: {
        0: {
          items: 2,
        //   nav: false,
        },
        600: {
          items: 3,
        //   nav: false,
        },
        800: {
          items: 4,
        //   nav: false,
        },
        1000: {
          items: 4,
        //   nav: false,
        },
        1200: {
          items: 4,
        },
      },
    };
    const ServiceProvideSection = [
      { img: serviceImg1 },
      { img: serviceImg2 },
      { img: serviceImg3 },
      { img: serviceImg4 },
      { img: serviceImg5 },
      { img: serviceImg6 },
      { img: serviceImg7 },
      { img: serviceImg8 },
      { img: serviceImg9 },
      { img: serviceImg10 },
      { img: serviceImg11},
      { img: serviceImg12},
    ];

  return (
    <>
      <div className="container">
        <h2 className="fw-bold text-center mt-5">Our Partners</h2>
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
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
    </>
  );
}
