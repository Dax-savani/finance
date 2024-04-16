import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

function FormPolicy() {
  const validationSchema = Yup.object({
    name: Yup.string().required("First Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    contact: Yup.string().required("Contact is required").max(10).min(10),
    feedback: Yup.string().required("feedback is required"),
  });

  const Formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact: "",
      feedback: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <>
      <section className="pt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="formSection col-md-9 col-12">
              <div className="FormBox">
                <div className="formHeading text-center">
                  <h1 className="fs-33 fw-semibold pb-4 mb-1">WRITE TO US</h1>
                </div>
                <div className="mainform">
                  <form
                    data-aos="fade-down"
                    onSubmit={Formik.handleSubmit}
                    onReset={Formik.handleReset}
                  >
                    <div className="row">
                      <div className="col-md-6 col-lg-4 col-sm-12 form-group mb-3 ">
                        <div>
                          <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            className="inputbox w-100"
                            value={Formik.values.name}
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                          />
                          {Formik.errors.name && Formik.touched.name ? (
                            <div className="text-danger">
                              {Formik.errors.name}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-sm-12 form-group mb-3 ">
                        <div>
                          <input
                            type="text"
                            name="contact"
                            placeholder="contact*"
                            className="inputbox w-100"
                            value={Formik.values.contact}
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                          />
                          {Formik.errors.contact && Formik.touched.contact ? (
                            <div className="text-danger">
                              {Formik.errors.contact}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-sm-12 form-group mb-3 ">
                        <div>
                          <input
                            type="text"
                            name="email"
                            placeholder="Phone No*"
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
                      <div className="col-md-12 col-lg-12 col-sm-12 form-group mb-3 ">
                        <div>
                          <input
                            type="text"
                            name="feedback"
                            placeholder="feedback*"
                            className="inputbox w-100"
                            value={Formik.values.feedback}
                            onChange={Formik.handleChange}
                            onBlur={Formik.handleBlur}
                          />
                          {Formik.errors.feedback && Formik.touched.feedback ? (
                            <div className="text-danger">
                              {Formik.errors.feedback}
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="text-center my-3">
                        <button
                          type="submit"
                          className="btn otpGenerateBtn fw-bold"
                        >
                          SUBMIT
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FormPolicy;
