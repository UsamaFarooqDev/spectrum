import React from 'react';
import banner from '../src/images/4s.jpg';
import Footer from './Footer';
import Navbar from './Navbar';
const Registercompany = () => {
return(
<>
<Navbar/>
<div className="container-fluid">
                <div className="row">
                    <img src={banner} className="img-fluid" alt=""/>
                    
                </div>
            </div>
<div className="container">
                <br/>
                <div className="row">
                    <div className="offset-sm-3 col-sm-6 offset-sm-3 text-center">
                        <h1><strong>Register As Company Below</strong></h1>
                    </div>
                </div>
                <div className="row">
                   <div className="col-sm-12">
                       <br/>
                   <form action="" method="post">
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Owner Name:</b></label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Company Name:</b></label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Company Email:</b></label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Owner Email:</b></label>
                                <input type="email" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor=""><b>City:</b></label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Zipcode:</b></label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Country:</b></label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Phone Number:</b></label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Logo:</b></label>
                                <input type="file" className="form-control"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Password:</b></label>
                                <input type="password" className="form-control"/>
                            </div>
                        </div> <br/>
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <input type="submit" value="Register" className="btn btn-outline-warning"/>
                            </div>
                        </div>
                    </form>
                   </div>
                </div>
            </div>
            <Footer />
</>
);
};
export default Registercompany;