import React from 'react';
import banner from "../src/images/2s.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
const Register = () => {
return(
    <>
      <Navbar />
<div className="container-fluid reg_header">
    <div className="row">
        <div className="col-sm-12">
        <h1 className="text-center"><marquee behavior="" direction="left">Register</marquee></h1>
        </div>
    </div>
</div>
<div className="container-fluid reg">
    <div className="row">
        <div className="offset-sm-3 col-sm-6 offset-sm-3 text-center">
            <h4><b>Register your details below to be considered for current and future jobs.</b></h4>
            <p>We will only contact you with job related correspondence and your details will not be passed onto any third parties.</p>
        </div>
    </div>
</div> <hr/>
<div className="container">
    <br/><br/>
    <div className="row">
        <div className="col-sm-6 text-center">
            <a href="registerworker" className="btn_reg">Register As Worker</a>
           
        </div>
        <div className="col-sm-6 text-center">
            <a href="registercompany" className="btn_reg">Register As Company</a>
        </div>
    </div>
    
    <br/><br/>
</div>
       <Footer  />
    </>
);
};
export default Register;