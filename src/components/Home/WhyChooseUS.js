import React from "react";
import logo_1 from "../../assets/images/home/whychooseUs/logo-1.png";
import logo_2 from "../../assets/images/home/whychooseUs/logo-2.png";
import logo_3 from "../../assets/images/home/whychooseUs/logo-3.png";
import logo_4 from "../../assets/images/home/whychooseUs/logo-4.png";
import logo_5 from "../../assets/images/home/whychooseUs/logo-5.png";
import logo_6 from "../../assets/images/home/whychooseUs/logo-6.png";
const WhyChooseUS = () => {
  const whyChooseUsboxes = [
    {
      img: logo_1,
      title: "No extra processing charges",
      text: "We do not charge any extra hidden processing fees.",
    },
    {
      img: logo_2,
      title: "Maximum loan amount per gram",
      text: "The gold loan rate per gram offered by Manappuram is the highest in this segment.",
    },
    {
      img: logo_3,
      title: "Day wise interest",
      text: "We let users know of the day-wise interest rates",
    },
    {
      img: logo_4,
      title: "Wide range of schemes",
      text: "Manappuram offers a wide range of schemes to cater to the varied needs and financial goals of different users",
    },
    {
      img: logo_5,
      title: "Less documentation for loans",
      text: "A straightforward process doesn’t require any in-depth knowledge. The debtor has to carry the gold to be mortgaged and identity/ address proof",
    },
    {
      img: logo_6,
      title: "Instant loan at doorstep. No bureau check",
      text: "Our service executives will directly disburse the loan at your doorstep, following the latest public health protocol.",
    },
  ];
  return (
    <>
      <div className="whyChooseUs my-5">
        <div className="container">
          <h2 className="fw-bold text-center">Why Choose Us</h2>
          <div className="row my-4 g-4">
            {whyChooseUsboxes.map((item, index) => (
              <div className="col-lg-4 col-sm-6" key={index}>
                <div className="h-100 py-4 px-2 rounded ">
                  <div className="text-center">
                    <div className="whyChooseUsImg d-inline-block">
                      <img src={item.img} alt={item.img} />
                    </div>
                  </div>
                  <h4 className="text-center fw-bold my-4">{item.title}</h4>
                  <div
                    style={{ color: "#707070", letterSpacing: "1.1px" }}
                    className="px-2 fw-medium"
                  >
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUS;
