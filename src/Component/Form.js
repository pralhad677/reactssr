import React from 'react';
import ReactDOM from 'react-dom';
import { Formik, Field, Form } from 'formik';
import * as Yup from "yup";
import SignupReq from './signupReq'
import axios from 'axios'
const Schema = Yup.object().shape({ 
    email: Yup.string()
    .email()
    .required("Required"),
 
  password: Yup.string().required("This field is required"),
  
});

const Basic = () => (
  <div>
    <h1>Sign Up</h1>
    <Formik
      initialValues={{
        
        email: '',
        password:'',
      }}
      validationSchema={Schema}
      onSubmit={async (values) => {
          console.log('on submit');
        //  <SignupReq data={values} state={true} />
        try{
          
          console.log('window.location.pathname',window.location.pathname)
         await axios.post(`http://localhost:3006/user/signup`, values)
          
          .then(response => {
            if(response.error){
            console.log('response',response.error)
          }
          console.log('response',response)
        }
              
          ).catch(err=>console.log(err)) 

          
      }
      catch(err){
       throw new Error(err)
                 }
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
    {({ values, errors, handleSubmit, handleChange, handleBlur }) => {
    return(
      <Form>
        


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
            <span style={{ color: "red" }}>
              {errors.password}
            </span>
         
        
        <button type="submit">Submit</button>
      </Form>
    )
    }}
    </Formik>
  </div>
);

export default Basic