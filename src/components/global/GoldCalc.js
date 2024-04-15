import React from "react";
import sponserImg from "../../assets/images/global/amitji.webp";
import * as Yup from "yup";
import sponserImg1 from "../../assets/images/global/amitji-mobile.png";
import { useFormik } from "formik";

const   GoldCalc = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    PhoneNo: Yup.string().required("Contact is required").max(10).min(10),
    country: Yup.string().required("country is required"),
    pincode: Yup.string().required("pincode is required").max(6).min(6),
    state: Yup.string().required("State is required"),
    amount: Yup.string().required("amount is required"),
    goldWeight: Yup.string().required("goldWeight is required"),
  });

  const Formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      PhoneNo: "",
      country: "",
      pincode: "",
      state: "",
      amount: "",
      goldWeight: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <div>
      <div className="container">
        <div className="py-5">
          <h3 className="text-center fw-bold mt-4 mb-1">
            GOLD LOAN Calculator
          </h3>
          <div className="text-center fw-medium">
            Calculate your eligibility for a gold loan by Muthoot Finance.
          </div>
          <div className="row mt-3">
            <div className="col-xl-7">
              <div className="row align-items-center justify-content-center">
                <div className="col-4" data-aos="fade-down">
                  <img
                    src={sponserImg}
                    alt={sponserImg}
                    className="d-md-block d-none"
                  />
                  <img
                    src={sponserImg1}
                    alt={sponserImg1}
                    className="d-md-none d-block"
                  />
                </div>
                <div
                  data-aos="fade-up"
                  className="col-md-8 text-center"
                  style={{ maxWidth: "550px" }}
                >
                  <video
                    loop={true}
                    autoPlay="autoplay"
                    muted
                    playsInline
                    className="w-100"
                  >
                    <source
                      src="https://cdn.muthootfinance.com/themes/bartik/images/images/gold-stone-video.mp4"
                      type="video/mp4"
                    />
                  </video>
                </div>
              </div>
            </div>
            <div className="col-xl-5 d-flex flex-column justify-content-center">
              <form
                data-aos="fade-down"
                onSubmit={Formik.handleSubmit}
                onReset={Formik.handleReset}
              >
                <div className="row align-items-center">
                  <div className="col-6">
                    <div className="my-4">
                      <input
                        type="text"
                        placeholder="Name*"
                        className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100"
                        name="firstName"
                        value={Formik.values.firstName}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                      />
                      {Formik.errors.firstName && Formik.touched.firstName ? (
                        <div className="text-danger">
                          {Formik.errors.firstName}
                        </div>
                      ) : null}
                    </div>
                    <div className="my-4">
                      <input
                        type="text"
                        name="PhoneNo"
                        value={Formik.values.PhoneNo}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="Contact No.*"
                        className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100"
                      />
                      {Formik.errors.PhoneNo && Formik.touched.PhoneNo ? (
                        <div className="text-danger">
                          {Formik.errors.PhoneNo}
                        </div>
                      ) : null}
                    </div>
                    <div className="my-4">
                      <input
                        type="text"
                        name="pincode"
                        value={Formik.values.pincode}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="Pin Code*"
                        className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100"
                      />
                      {Formik.errors.pincode && Formik.touched.pincode ? (
                        <div className="text-danger">
                          {Formik.errors.pincode}
                        </div>
                      ) : null}
                    </div>
                    <div className="my-4">
                      <input
                        type="text"
                        name="amount"
                        value={Formik.values.amount}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="Amount you require (INR)"
                        className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100"
                      />
                      {Formik.errors.amount && Formik.touched.amount ? (
                        <div className="text-danger">
                          {Formik.errors.amount}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="my-4">
                      <input
                        type="text"
                        name="email"
                        value={Formik.values.email}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="Email ID*"
                        className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100"
                      />
                      {Formik.errors.email && Formik.touched.email ? (
                        <div className="text-danger">{Formik.errors.email}</div>
                      ) : null}
                    </div>
                    <div className="my-4">
                      <select
                        id="countrySelect"
                        value={Formik.values.country}
                        onChange={Formik.handleChange}
                        name="country"
                        onBlur={Formik.handleBlur}
                        className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100 gray"
                      >
                        <option value="Select State">Select State</option>
                        <option value="USA">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Canada">Canada</option>
                      </select>
                      {Formik.errors.country && Formik.touched.country ? (
                        <div className="text-danger">
                          {Formik.errors.country}
                        </div>
                      ) : null}
                    </div>
                    <div className="my-4">
                      <select
                        id="countrySelect"
                        name="state"
                        value={Formik.values.state}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100 gray"
                      >
                        <option disabled hidden>
                          Gold Type
                        </option>
                        <option value="USA">United States</option>
                        <option value="UK">United Kingdom</option>
                        <option value="Canada">Canada</option>
                      </select>
                      {Formik.errors.state && Formik.touched.state ? (
                        <div className="text-danger">{Formik.errors.state}</div>
                      ) : null}
                    </div>
                    <div className="my-4">
                      <input
                        type="text"
                        name="goldWeight"
                        value={Formik.values.goldWeight}
                        onChange={Formik.handleChange}
                        onBlur={Formik.handleBlur}
                        placeholder="Weight Of Gold (gm)"
                        className="outline-none p-2 border-0 border-bottom border-dark-subtle fw-medium w-100"
                      />
                      {Formik.errors.goldWeight && Formik.touched.goldWeight ? (
                        <div className="text-danger">
                          {Formik.errors.goldWeight}
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="text-center mt-3">
                  <button className="otpGenerateBtn fw-bold">
                    GENERATE OTP
                  </button>
                </div>
              </form>
              <div
                data-aos="fade-up"
                className="fs-12 text-center px-4 mt-3 fw-medium"
              >
                #Note: This is an approximate value. The final value depends on
                the gold valuation done at the branch.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldCalc;
