import React from "react";
import { Form } from "react-bootstrap";

function FormSection() {
  return (
    <section className="pt-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="formSection col-md-9 col-12">
            <div className="FormBox">
              <div className="formHeading text-center">
                <h1 className="fs-33 fw-semibold pb-4 mb-1">WRITE TO US</h1>
              </div>
              <div className="mainform">
                <Form>
                  <div className="row">
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3 ">
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name*"
                          className="inputbox w-100"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3 ">
                      <div>
                        <input
                          type="text"
                          name="LastName"
                          placeholder="Last Name*"
                          className="inputbox w-100"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3 ">
                      <div>
                        <input
                          type="text"
                          name="Email"
                          placeholder="Email*"
                          className="inputbox w-100"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3 ">
                      <div>
                        <input
                          type="text"
                          name="PhoneNo"
                          placeholder="Phone No*"
                          className="inputbox w-100"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3">
                      <div>
                        <select
                          id="countrySelect"
                          name="Country"
                          className=" w-100 inputbox gray"
                        >
                          <option value="" disabled  hidden>
                            Select Country
                          </option>
                          <option value="USA">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="Canada">Canada</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3 ">
                      <div>
                        <input
                          type="text"
                          name="Pincode"
                          placeholder="Pincode"
                          className="inputbox w-100"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3">
                      <div>
                        <select
                          id="countrySelect"
                          name="Country"
                          className=" w-100 inputbox gray"
                        >
                          <option value="" disabled  hidden>
                            Select Country
                          </option>
                          <option value="USA">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="Canada">Canada</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3">
                      <div>
                        <select
                          id="countrySelect"
                          name="Country"
                          className=" w-100 inputbox gray"
                        >
                          <option value="" disabled  hidden>
                            Select Country
                          </option>
                          <option value="USA">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="Canada">Canada</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-9 col-sm-12 form-group mb-3 ">
                      <div>
                        <input
                          type="text"
                          name="address"
                          placeholder="address"
                          className="inputbox w-100"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-3 col-sm-12 form-group mb-3">
                      <div>
                        <select
                          id="countrySelect"
                          name="Country"
                          className=" w-100 inputbox gray"
                        >
                          <option value="" disabled  hidden>
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
                          {/* <option value="Muthoot iWill">Muthoot iWill</option> */}
                          <option value="NCD">NCD</option>
                          <option value="Micro Finance">Micro Finance</option>
                        </select>
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
                        />
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
