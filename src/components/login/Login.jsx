import React, { useState } from "react";
import "./login.css";

import { FaAngry, FaEye, FaEyeSlash } from "react-icons/fa";
import {  Link, useNavigate } from "react-router-dom";
import { Field, Formik,Form } from "formik";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  
const navigate=useNavigate()
  const togglePassword = (e) => {
    e.preventDefault();
    setPasswordVisible((prevVisible) => !prevVisible);
  };
  const userIdhandler=(e)=>{
    setUsername(e.target.value.trim())
  }

  const validateForm = (values) => {
    const errors = {};
    if (!username.trim()) {
      errors.Username = "Username is required";
    }
    if (!password.trim()) {
      errors.Password = "Password is required";
    }
    return errors
  };
  const submitFunction = () => {
    const formData = {
        username: username,
      password: password
    };
  
    console.log("Form Data:", formData);
    navigate("/companyname");
  };
  return (
    <Formik
      initialValues={{
        Username: "",
        Password: "",
      }}
      validate={validateForm}
      onSubmit={submitFunction}
    >
      {(formik) => (
        <Form className="maindiv" >
       
       <div className="seconddiv">
          <label>User Name</label>
          <Field type="id" name="Username" className="input"  placeholder="Enter your username" onChange={userIdhandler} value={username} />
          {!username ? (
            <div className="validate">{formik.errors.Username}</div>
          ) : null}
          <label>Password</label>

          <div className="password-input-container">
            <Field
              type={passwordVisible ? "text" : "password"}
              name="Password" 
              className="input1"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value.trim())}
            />
            <div className="eye-icon" onClick={togglePassword}>
              {passwordVisible ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          {!password ? (
            <div className="validate">{formik.errors.Password}</div>
          ) : null}
          <div className="second">
            <a className="forgot">Forget your password?</a>
          </div>
          <div onClick={(e) => formik.handleSubmit(username && password ?submitFunction():null)}>
            <button className="button5"  type="submit" >Login</button>
          </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
