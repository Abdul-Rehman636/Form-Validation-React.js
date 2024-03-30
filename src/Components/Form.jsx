import React from "react";
import "./form.css";
import { useFormik } from "formik";
import { registerSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

function Form() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: registerSchema,
      onSubmit: (values) => {
        console.log(values);
      },
    });
  console.log(errors);
  return (
    <>
      <div id="form-1">
        <div id="form-2">
          <form action="" id="form-main" onSubmit={handleSubmit}>
            <div id="form-3">
              <label htmlFor="name" id="label-text">
                Name
              </label>
              <input
                autoComplete="off"
                name="name"
                type="text"
                placeholder="Name"
                id="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p id="error-text">{errors.name}</p>
              ) : null}
            </div>
            <div id="form-4">
              <label htmlFor="email" id="label-text">
                Email
              </label>
              <input
                autoComplete="off"
                name="email"
                type="email"
                placeholder="Email"
                id="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p id="error-text">{errors.email}</p>
              ) : null}
            </div>
            <div id="form-5">
              <label htmlFor="password" id="label-text">
                Password
              </label>
              <input
                autoComplete="off"
                name="password"
                type="password"
                placeholder="Password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password && touched.password ? (
                <p id="error-text">{errors.password}</p>
              ) : null}
            </div>
            <div id="form-6">
              <label htmlFor="confirm_password" id="label-text">
                Confirm Password
              </label>
              <input
                autoComplete="off"
                name="confirm_password"
                type="password"
                placeholder="Confirm Password"
                id="confirm_password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p id="error-text">{errors.confirm_password}</p>
              ) : null}
            </div>
            <div id="form-7">
              <button type="submit" id="button">
                Register Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
