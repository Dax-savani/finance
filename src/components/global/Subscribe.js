import { useFormik } from "formik";
import React from "react";
import * as Yup from "yup";

const Subscribe = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Email is required"),
  });

  const Formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      action.resetForm();
    },
  });
  return (
    <>
      <div className="container p-2 mb-5">
        <form onSubmit={Formik.handleSubmit}>
          <div className="text-center">
            <h3
              className="mb-4"
              style={{ fontWeight: "600", letterSpacing: "-1px" }}
              data-aos="zoom-in"
            >
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <div className="subscribe" data-aos="fade-down">
              <input
                type="text"
                name="email"
                className="subscribeInput"
                placeholder="E-Mail"
                value={Formik.values.email}
                onChange={Formik.handleChange}
                onBlur={Formik.handleBlur}
              />
              <button className="btn subscribeBtn" type="submit">SUBMIT</button>
            </div>
            <div>
              {Formik.errors.email && Formik.touched.email ? (
                <div className="text-danger">{Formik.errors.email}</div>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Subscribe;
