import React from "react";
import map from "../../assets/images/Contact/map.png";

function Location() {
  const adresses = [
    {
      state: "Registered Office (South)",
      adress:
        "Muthoot Chambers, Opp Saritha Theatre Complex, Banerji Road, Kochi 682 018",
      contact: "Tel: +91 - 484 - 2396 478 / 2394 712",
    },
    {
      state: "Head Office (South)",
      adress:
        "Muthoot Chambers,Opp. Sarita Theater Complex Banerji Road Kochi - 682018",
      contact:
        "Tel: +91 - 484 - 2396 478/ +91 - 484 - 2394 712 Fax: 91 - 468 - 2213417",
    },
    {
      state: "Corporate Office (North)",
      adress:
        "The Muthoot Group, M. G. George Muthoot Towers, Alaknanda New Delhi - 110019",
      contact: "Tel: +91-11-4669 7777",
    },
  ];
  const LocationDeatsils = [
    {
      countryName: "india",
      Loction: adresses,
    },
    {
      countryName: "india",
      Loction: adresses,
    },
    {
      countryName: "india",
      Loction: adresses,
    },
    {
      countryName: "india",
      Loction: adresses,
    },
  ];
  return (
    <>
      <section>
        <div className="loaction pt-5">
          <div className="LocationBackgroundImage">
            <div className="container">
              <div className="loactionBox py-5">
                <div className="LoactionHeading text-center mb-5">
                  <h1 className="fs-30 fw-semibold pm-1">
                    GET IN TOUCH WITH OUR GLOBAL PRESENCE
                  </h1>
                </div>
                <div className="loactions row justify-content-center">
                  <div className="loactionImage col-10 position-relative">
                    <img src={map} alt={map} />
                    <div className="LogoLoctionImage position-absolute"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="branchloction py-5">
            <div className="row justify-content-center">
              {LocationDeatsils.map((e, index) => (
                <div className="col-md-5 col-sm-10 col-xs-10 my-3 " key={index}>
                  <div className="branchbox border rounded-2 h-100">
                    <div className="head rounded-2">
                      <h3 className="m-0 fs-18 fw-bold white">
                        {e.countryName}
                      </h3>
                    </div>
                    <div className="loactiondetails ">
                      {e.Loction.map((e, index) => (
                        <ul className="mb-4" key={index}>
                          <li>
                            <h6 className="fs-18 lightGray fw-bold m-0">
                              {e.state}
                            </h6>
                          </li>
                          <li>
                            <p className="fs-17 lightGray fw-medium">
                              {e.adress}
                            </p>
                          </li>
                          <li>
                            <a href="#" className="fs-17 gray fw-medium">
                              {e.contact}
                            </a>
                          </li>
                        </ul>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Location;
