
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import slider from "../src/images/3s.jpg";
import health from "../src/images/icons/healthcare.svg";
import education from "../src/images/icons/teaching.svg";
import it from "../src/images/icons/settings.svg";
import gas from "../src/images/icons/natural-gas.svg";
import banking from "../src/images/icons/finance.svg";
import worker from "../src/images/icons/engineer.svg";
import contact from "../src/images/contact.jpg";
import './App.css';
import Footer from "./Footer";
import Navbar from "./Navbar";
const Home = () => {
    return(
        <>
          <Navbar  />
        <div className="container-fluid">
            <div className="row">
            <img src={slider} className="banner img-fluid" alt="header img"/>
            <section  className="buttons animated">
                <a href="/" >Get Started</a>
                <a href="/" >Contact Us</a>
            </section>
            </div>
        </div> <br/><br/>
        <section id="services">
       <div className="container">
           <h1 className="text-center">Our Business Offering </h1>
           <br/>
            <div className="row">
                <div className="col-sm-4 mx-auto d-block text-center">
                <div class="card">
                    <center><img class="card-img-top img-fluid animated" src={health} alt="Card image cap img-fluid" /></center>
                        <div class="card-body">
                            <h5 className="text-center">Health And Care</h5>
                        </div>
                </div>
                </div>
                <div className="col-sm-4 mx-auto">
                <div class="card">
                    <center><img class="card-img-top img-fluid animated" src={education} alt="Card image cap " /></center>
                        <div class="card-body">
                            <h5 className="text-center">Education Sector</h5>
                        </div>
                </div>
                </div>
                <div className="col-sm-4 mx-auto">
                <div class="card">
                   <center> <img class="card-img-top img-fluid animated" src={it} alt="Card image cap img-fluid" /></center>
                        <div class="card-body">
                            <h5 className="text-center">It Industry</h5>
                        </div>
                </div>
                </div>
            </div> <br/>
            <div className="row">
                <div className="col-sm-4 mx-auto">
                <div class="card">
                    <center><img class="card-img-top img-fluid animated" src={gas} alt="Card image cap img-fluid" /></center>
                        <div class="card-body">
                            <h5 className="text-center">Oil & Gas</h5>
                        </div>
                </div>
                </div>
                <div className="col-sm-4 mx-auto">
                <div class="card">
                    <center><img class="card-img-top img-fluid animated" src={banking} alt="Card image cap img-fluid" /></center>
                        <div class="card-body">
                            <h5 className="text-center">Banking and Financial Sector</h5>
                        </div>
                </div>
                </div>
                <div className="col-sm-4 mx-auto">
                <div class="card">
                    <center><img class="card-img-top img-fluid animated" src={worker} alt="Card image cap img-fluid" /></center>
                        <div class="card-body">
                            <h5 className="text-center">Workers & Guards</h5>
                        </div>
                </div>
                </div>
            </div>
        </div>
       </section> <span id="aboutus"></span><br /><br /><br /><br />
        <div className="container">
            <div className="row">
                <div className="col-sm-12 col-10 mx-auto">
                   <section >
                   <h1 className="text-center  mt-3">About Us</h1>
                    <p>
                    Spectrum Staffing Solutions will be an International staffing agency that will be 
                    located in Islamabad, Pakistan and UAE. The company will operate as a standard human 
                    resources consulting firm with bias in overseas recruitment and candidates training and development.
                    Spectrum Staffing Solutions is going to offer varieties of related staffing and training services within 
                    the scope of the consulting industry in primarily in the Gulf region. 
                    </p>
                    <p>
                    We have to create job opportunities for our people based on their talent rather than their ability to 
                    pay agency fee and provide our clients with skilled staffing consulting and training solutions in a 
                    timely and efficient manner. We will strive to handle each client with accountability and responsiveness,
                     as if we were recruiting and training staff for our own business.
                    </p>
                    <p>
                    We will focus our attention on the providing workable business solutions as it relates to staffing for our 
                    clients so that our clients can focus their attention on the success of their business. Our vision reflects 
                    our values: integrity, service, excellence and teamwork. 
                    </p>
                   </section>
                </div>
            </div>
        </div>
        <section id="contact">
            <br/>
            <h1 className="text-center">Contact Us</h1>
           <div className="container-fluid">
           <div class="row">
                <div className="offset-sm-3 col-sm-6 offset-sm-3 col-12 mx-auto">
                    <form action="">
                        <div class="row">
                            <div className="col-sm-6">
                                <label htmlFor="">Name:</label>
                                <input type="text" placeholder="Name" className="form-control" required/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor="">Email:</label>
                                <input type="email" placeholder="Email" className="form-control" required/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-12">
                            <label htmlFor="">Message:</label>
                            <textarea name="" id="" cols="30" rows="5" className="form-control"></textarea> <br/>
                            <input type="submit"  className="btun form-control"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
           </div>
        </section>
       <Footer  />
        </>
    );
};
export default Home;