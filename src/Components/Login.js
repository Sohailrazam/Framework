import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import {  Button } from 'reactstrap';

export const Login = () => {
  return (
    <div className="card">
          <img
            className="logoclass"
            height="30px"
            width="27px"
            src="/instrumentm_framework.svg"
            alt="logo"
          />
      <form>
        {/* <h3> */}
        
        {/* </h3> */}
        {/* <div className="fo" */}

        <div className="form-group text-left">
          <label  style={{color:'yellow'}}>Username</label>
          <input
            type="name"
            className="form-control style_input"
            placeholder="Enter username"
            value="John Doe"
          />
        </div>
        
        <div className="form-group text-left">
          <label style={{color:'yellow'}}>Password</label>
          <input
            type="password"
            className="form-control style_input"
            placeholder="************"
            value="************"
          />    
        </div>
        <p style={{textAlign:'right'}} className="loginmed">
        <Button color="seco ndary"style={{ color:"white",listStyle:'none' , backgroundColor:'#32324d'}} >Login</Button>
        </p>
       
      <h5 style={{marginTop:'-16px',color:'white'}} className="forgot-password forgotpassword text-right ">
        <Link to="/forgetpass" style={{textDecoration:'none', color:'white'}}>
        Forgot Password?
        </Link>
        </h5>
        <p style={{textAlign:'center'}}>
        <Link to="/signup" >
          <Button color="secondary"style={{ color:"white",  backgroundColor:'#32324d'}} className="signup">Signup Here</Button>
          
          </Link>
        </p>
      </form>
    </div>
  );
};