import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import media1 from "../../assets/images/home/newsmedia/1.webp";
import media2 from "../../assets/images/home/newsmedia/2.webp";
import media3 from "../../assets/images/home/newsmedia/3.jpg";
import media4 from "../../assets/images/home/newsmedia/4.webp";
import csr1 from "../../assets/images/home/newsmedia/csr1.webp";
const PrevArrow = ({ onClick }) => (
  <button className="slick-arrow slick-prev" onClick={onClick}>
    <i className="fa-solid fa-chevron-down fs-14 gray"></i>
  </button>
);

const NextArrow = ({ onClick }) => (
  <button className="slick-arrow slick-next" onClick={onClick}>
    <i className="fa-solid fa-chevron-up fs-14 gray"></i>
  </button>
);
const NewsMedia = () => {
  const csrBox = [
    { img: csr1, imgDec: "ORGANIZED 'MUTHOOT SNEHASANCHARINI'" },
    { img: csr1, imgDec: "ORGANIZED 'MUTHOOT SNEHASANCHARINI'" },
    { img: csr1, imgDec: "ORGANIZED 'MUTHOOT SNEHASANCHARINI'" },
    { img: csr1, imgDec: "ORGANIZED 'MUTHOOT SNEHASANCH ARINI'" },
    { img: csr1, imgDec: "ORGANIZED 'MUTHOOT SNEHASANCH ARINI'" },
    { img: csr1, imgDec: "ORGANIZED 'MUTHOOT SNEHASANCH ARINI'" },
    { img: csr1, imgDec: "ORGANIZED 'MUTHOOT SNEHASANCH ARINI'" },
    { img: csr1, imgDec: "ORGANIZED 'MUTHOOT SNEHASANCH ARINI'" },
    { img: csr1, imgDec: "ORGANIZED 'MUTHOOT SNEHASANCH ARINI'" },
    { img: csr1, imgDec: "ORGANIZED 'MUTHOOT SNEHASANCH ARINI'" },
    { img: csr1, imgDec: "ORGANIZED 'MUTHOOT SNEHASANCH ARINI'" },
    { img: csr1, imgDec: "ORGANIZED 'MUTHOOT SNEHASANCH ARINI'" },
  ];

  const settings = {
    loop: true,
    dots: false,
    nav: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-xl-8">
            <h3 className="fw-bold fs-33">NEWS & MEDIA</h3>
            <div className="row" data-aos="fade-right">
              <div className="col-md-4 mt-3">
                <div className="newsBox position-relative overflow-hidden h-100">
                  <div className="newsBoxImg h-100">
                    <img src={media1} alt={media1} />
                  </div>
                  <div className="position-absolute description px-3">
                    <div className="fs-14 fw-semibold">
                      EXCLUSIVE INTERVIEW OF MR. ALEXANDER GEORGE MUTHOOT,
                      DEPUTY MANAGING DIRECTOR, THE MUTHOOT GROUP; COVERED IN
                      THE ENTREPRENEUR MAGAZINE, TOMORROW INC.
                    </div>
                    <div className="mt-2">
                      <button className="otpGenerateBtn fw-bold mb-2">
                        KNOW MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mt-3">
                <div className="row g-3 h-100">
                  <div className="col-12">
                    <div className="newsBox position-relative overflow-hidden">
                      <div className="newsBoxImg">
                        <img src={media2} alt={media2} />
                      </div>
                      <div className="position-absolute description px-3">
                        <div className="fs-14 fw-semibold">
                          EXCLUSIVE INTERVIEW OF MR. ALEXANDER GEORGE MUTHOOT,
                          DEPUTY MANAGING DIRECTOR, THE MUTHOOT GROUP; COVERED
                          IN THE ENTREPRENEUR MAGAZINE, TOMORROW INC.
                        </div>
                        <div className="mt-2">
                          <button className="otpGenerateBtn fw-bold mb-2">
                            KNOW MORE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="newsBox position-relative overflow-hidden">
                      <div className="newsBoxImg">
                        <img src={media3} alt={media3} />
                      </div>
                      <div className="position-absolute description px-3">
                        <div className="fs-14 fw-semibold">
                          EXCLUSIVE INTERVIEW OF MR. ALEXANDER GEORGE MUTHOOT,
                          DEPUTY MANAGING DIRECTOR, THE MUTHOOT GROUP; COVERED
                          IN THE ENTREPRENEUR MAGAZINE, TOMORROW INC.
                        </div>
                        <div className="mt-2">
                          <button className="otpGenerateBtn fw-bold mb-2">
                            KNOW MORE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="newsBox position-relative overflow-hidden">
                      <div className="newsBoxImg">
                        <img src={media4} alt={media4} />
                      </div>
                      <div className="position-absolute description px-3">
                        <div className="fs-14 fw-semibold">
                          EXCLUSIVE INTERVIEW OF MR. ALEXANDER GEORGE MUTHOOT,
                          DEPUTY MANAGING DIRECTOR, THE MUTHOOT GROUP; COVERED
                          IN THE ENTREPRENEUR MAGAZINE, TOMORROW INC.
                        </div>
                        <div className="mt-2">
                          <button className="otpGenerateBtn fw-bold mb-2">
                            KNOW MORE
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4 csr mt-5 mt-xl-0" data-aos="fade-left">
            <h3 className="fw-bold fs-33">CSR</h3>
            <div
              className="border p-md-3 p-2 csrBox"
              style={{ height: "92%", position: "relative" }}
            >
              <Slider {...settings}>
                {csrBox.map((item, index) => (
                  <div className="item row newsBox p-1 d-flex" key={index}>
                    <div className="col-6 newsBoxImg">
                      <img src={item.img} alt={item.img} />
                    </div>
                    <div className="col-6 fs-13">
                      <div className="fw-medium"> {item.imgDec} </div>
                      <div className="red fw-semibold">Know More</div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsMedia;
