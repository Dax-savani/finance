import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import { Form } from "react-bootstrap";

function FormSection() {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    PhoneNo: Yup.string().required("Contact is required").max(10).min(10),
    country: Yup.string().required("country is required"),
    pincode: Yup.string().required("pincode is required").max(6).min(6),
    State: Yup.string().required("State is required"),
    city: Yup.string().required("city is required"),
    address: Yup.string().required("address is required"),
    service: Yup.string().required("service is required"),
    message: Yup.string().required("Message is required"),
  });

  const Formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      PhoneNo: "",
      country: "",
      pincode: "",
      State: "",
      city: "",
      address: "",
      service: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });

  return (
    <section className="pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="formSection col-md-9 col-12">
            <div className="FormBox">
              <div className="formHeading text-center">
                <h1 className="fs-33 fw-semibold pb-4 mb-1">WRITE TO US</h1>
              </div>
              <div className="mainform" data-aos="fade-down">
                <Form
                  onSubmit={Formik.handleSubmit}
                  onReset={Formik.handleReset}
                >
                  <div className="row">
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3 ">
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name*"
                          className="inputbox w-100"
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
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3 ">
                      <div>
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name*"
                          className="inputbox w-100"
                          value={Formik.values.lastName}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {Formik.errors.lastName && Formik.touched.lastName ? (
                          <div className="text-danger">
                            {Formik.errors.lastName}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3 ">
                      <div>
                        <input
                          type="text"
                          name="email"
                          placeholder="Email*"
                          className="inputbox w-100"
                          value={Formik.values.email}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {Formik.errors.email && Formik.touched.email ? (
                          <div className="text-danger">
                            {Formik.errors.email}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3 ">
                      <div>
                        <input
                          type="text"
                          name="PhoneNo"
                          placeholder="Phone No*"
                          className="inputbox w-100"
                          value={Formik.values.PhoneNo}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {Formik.errors.PhoneNo && Formik.touched.PhoneNo ? (
                          <div className="text-danger">
                            {Formik.errors.PhoneNo}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3">
                      <div>
                        <select
                          id="countrySelect"
                          name="country"
                          className=" w-100 inputbox gray"
                          value={Formik.values.country}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        >
                          <option value="" disabled hidden>
                            Select Country
                          </option>
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
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3 ">
                      <div>
                        <input
                          type="text"
                          name="pincode"
                          placeholder="Pincode"
                          className="inputbox w-100"
                          value={Formik.values.pincode}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {Formik.errors.pincode && Formik.touched.pincode ? (
                          <div className="text-danger">
                            {Formik.errors.pincode}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3">
                      <div>
                        <select
                          id="countrySelect"
                          name="State"
                          className=" w-100 inputbox gray"
                          value={Formik.values.State}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        >
                          <option value="" disabled hidden>
                            Select State
                          </option>
                          <option value="USA">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="Canada">Canada</option>
                        </select>
                        {Formik.errors.State && Formik.touched.State ? (
                          <div className="text-danger">
                            {Formik.errors.State}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3">
                      <div>
                        <select
                          id="countrySelect"
                          name="city"
                          className=" w-100 inputbox gray"
                          value={Formik.values.city}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        >
                          <option value="" disabled hidden>
                            Select city
                          </option>
                          <option value="USA">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="Canada">Canada</option>
                        </select>
                        {Formik.errors.city && Formik.touched.city ? (
                          <div className="text-danger">
                            {Formik.errors.city}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-9 col-sm-12 form-group mb-3 ">
                      <div>
                        <input
                          type="text"
                          name="address"
                          placeholder="address"
                          className="inputbox w-100"
                          value={Formik.values.address}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {Formik.errors.address && Formik.touched.address ? (
                          <div className="text-danger">
                            {Formik.errors.address}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3">
                      <div>
                        <select
                          id="countrySelect"
                          name="service"
                          className=" w-100 inputbox gray"
                          value={Formik.values.service}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        >
                          <option value="" disabled hidden>
                            Select Service
                          </option>
                          <option value="Gold Loan">gold loan</option>
                          <option value="Housing Finance">
                            Housing Finance
                          </option>
                          <option value="Personal Loan">Personal Loan</option>
                          <option value="Insurance">Insurance</option>
                          <option value="Gold Coin">Gold Coin</option>
                          <option value="Mutual Fund">Mutual Fund</option>
                          <option value="Money Transfer">Money Transfer</option>
                          <option value="PAN Card">PAN Card</option>
                          <option value="NCD">NCD</option>
                          <option value="Micro Finance">Micro Finance</option>
                        </select>
                        {Formik.errors.service && Formik.touched.service ? (
                          <div className="text-danger">
                            {Formik.errors.service}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="form-group mb-3 ">
                      <div>
                        <textarea
                          type="text"
                          name="message"
                          placeholder="message"
                          className="message w-100 mt-1"
                          rows={7}
                          cols={60}
                          value={Formik.values.message}
                          onChange={Formik.handleChange}
                          onBlur={Formik.handleBlur}
                        />
                        {Formik.errors.message && Formik.touched.message ? (
                          <div className="text-danger">
                            {Formik.errors.message}
                          </div>
                        ) : null}{" "}
                      </div>
                    </div>
                    <div className="d-flex align-item-start">
                      <input type="checkbox" className="mx-2 my-1 checkbox" />
                      <label className="fs-17 black labeldata">
                        I hereby authorise and allow representatives of Muthoot
                        Finance Ltd to Call/SMS/Contact me for marketing and
                        promotional purposes.
                      </label>
                    </div>
                    <div className="text-center my-3">
                      <button type="submit" className="btn button fw-bold">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
