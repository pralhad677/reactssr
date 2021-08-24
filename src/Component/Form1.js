import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
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

const Basic = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        name:'',
        email: '',
        password:'',
        changepassword:''
      }}
      validationSchema={Schema}
      onSubmit={async (values) => {
        
         
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
    {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
    return(
      <Form>
        <label htmlFor="name" style={{display:"block"}}> Name</label>
        <Field id="name" name="name" placeholder="Jane" />


        <label htmlFor="email" style={{display:"block"}}>Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label for="password" style={{display:"block"}}>Password</label>
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
         <label for="password" style={{display:"block"}}>Confirm Password</label>
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
        
        <button type="submit">Submit</button>
      </Form>
    )
    }}
    </Formik>
  </div>
);

export default Basic