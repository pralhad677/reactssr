import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";


const Schema = Yup.object().shape({ 
    email: Yup.string()
    .email()
    .required("Required"),
    name: Yup.string()
    .required("Required"),
  password: Yup.string().required("This field is required"),
  changepassword: Yup.string().when("password", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    )
  })
});

function Form() {
  return (
    <Formik
      initialValues={{
        password: "",
        changepassword: "",
        name:"",
        email:""
      }}
      validationSchema={Schema}
      onSubmit={async values => {
        await new Promise(resolve => setTimeout(resolve, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      {props => {
        props.submitCount > 0 && (props.validateOnChange = true);
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
              <label for="name" style={{display:"block"}}>Name</label>
            <input
              type="name"
              name="name"
             
            />
            <span class="error" style={{ color: "red" }}>
              {errors.password}
            </span>
               <label htmlFor="email" style={{ display: "block" }}>
              Email
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div >{errors.email}</div>
            )}
            <label for="passowrd" style={{display:"block"}}>Password</label>
            <input
              type="password"
              name="password"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.password}
            />
            <span class="error" style={{ color: "red" }}>
              {errors.password}
            </span>

            <label for="passowrd" style={{display:"block"}}>Confirm Password</label>
            <input
              type="password"
              name="changepassword"
              onBlur={handleBlur}
              onChange={handleChange}
              value={values.changepassword}
            />
            <span class="error" style={{ color: "red" }}>
              {errors.changepassword}
            </span>
            <button type="submit"  style={{display:"block"}} >
              Submit
            </button>
          </form>
        );
      }}
    </Formik>
  );
}



export default Form