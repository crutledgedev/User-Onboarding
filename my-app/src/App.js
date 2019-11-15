import React from 'react';
// import logo from './logo.svg';
import {Formik, Form, Field, ErrorMessage} from "formik";
import './App.css';




const validate = ({name, email, password}) => {
  const errors = {};
  if (!name){
    errors.name = "Please Enter Your Name"
  } 
  else if(name.length <2){
    errors.name = "No Initials Please"
  }
  if (!email){
    errors.email = "Please Enter Your Email"
  } 
  if (password.length < 6){
    errors.password = "Passwords require at least 6 characters"
  }
  return errors;

}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Formik
        validate={validate}
        initialValues={{name: "", email: "", password: ""}}
        onSubmit={(values, tools) =>{
          console.log(values, tools);
          tools.resetForm();
          alert(`${values.name} at ${values.email} has registered`)
        }}
        render={props =>{
          return(
            <Form>
              <Field name="name" type="text" placeholder="Name"/>
              <ErrorMessage name="name" component="div" className="red"/>
              <Field name="email"type="text" placeholder="Email"/>
              <ErrorMessage name="email" component="div" className="red"/>
              <Field name="password"type="text" placeholder="Password"/>
              <ErrorMessage name="password" component="div" className="red"/>
              <Field name="TOS" type="checkbox"/>
              <input type="submit"/>



            </Form>
          )
        }}
        />


      </header>  

    </div>
  );
}

export default App;
