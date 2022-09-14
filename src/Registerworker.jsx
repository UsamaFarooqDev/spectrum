import React from 'react';
import Footer from './Footer';
import banner from '../src/images/2s.jpg';
import Navbar from './Navbar';
const Registerworker  = () => {
    return (
        <>
        <Navbar/>
            <div className="container-fluid">
                <div className="row">
                    <img src={banner} className="img-fluid" alt="" width="100%"/>
                </div>
            </div>
            <div className="container">
                <br/>
                <div className="row">
                    <div className="offset-sm-3 col-sm-6 offset-sm-3 text-center">
                        <h1><strong>Register As Worker Below</strong></h1>
                    </div>
                </div>
                <div className="row">
                   <div className="col-sm-12">
                       <br/>
                   <form action="" method="post">
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Name:</b></label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Father Name:</b></label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Email:</b></label>
                                <input type="email" className="form-control"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Country:</b></label>
                                <input type="text" className="form-control"/>
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
                                <label htmlFor=""><b>Education:</b></label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Phone Number:</b></label>
                                <input type="text" className="form-control"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Picture:</b></label>
                                <input type="file" className="form-control"/>
                            </div>
                            <div className="col-sm-6">
                                <label htmlFor=""><b>Password:</b></label>
                                <input type="password" className="form-control"/>
                            </div>
                        </div> <br/>
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <form action="worker">
                                <input type="submit" value="Register" className="btn btn-outline-warning"/>
                                <a href="../../../panels/user/index.html">Test</a>
                                </form>
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
export default Registerworker;