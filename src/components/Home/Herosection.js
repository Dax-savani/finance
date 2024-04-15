import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../../assets/style/home.css";
import sliderImg1 from "../../assets/images/home/sliderImg1.webp";
import sliderImg2 from "../../assets/images/home/sliderImg2.webp";
import sliderImg3 from "../../assets/images/home/sliderImg3.webp";
import sliderImg4 from "../../assets/images/home/sliderImg4.webp";
import sliderImg6 from "../../assets/images/home/sliderImg6.webp";
import sliderImg7 from "../../assets/images/home/sliderImg7.webp";
import sliderImg8 from "../../assets/images/home/sliderImg8.webp";

const Herosection = () => {
  const options = {
    loop: true,
    stagePadding: 140,
    margin: 20,
    nav: false,
    autoplay: true,
    autoplaytimeout: 3000,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };

  const sliderArray = [
    sliderImg1,
    sliderImg2,
    sliderImg3,
    sliderImg4,
    sliderImg4,
    sliderImg6,
    sliderImg7,
    sliderImg8,
  ];
  return (
    <>
      <section id="heroSection" className="py-5">
        <OwlCarousel className="owl-theme" {...options}>
          {sliderArray.map((data, index) => (
            <div className="item sliderImg" key={index}>
              <img className="rounded" src={data} alt={data} />
            </div>
          ))}
        </OwlCarousel>
      </section>
    </>
  );
};

export default Herosection;
