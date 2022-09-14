import React from 'react';
import "../css/worker.css";
import dp  from "../images/dp.png";
import logo  from "../images/download.png";
import speclogo from "../images/logo.png";
const Workerindex  = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="row header">
                    <div className="col-sm-12 col-10 text-left">
                        <h4>Welcome To Spectrum Staffing Solutions</h4>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                        <img src={speclogo} className="img-fluid animated" width="620" alt=""/>
                    </div>
                    <div className="col-sm-4 login">
                        <form action="Workerhome">
                            <h1 className="text-center">Worker Login</h1>
                            <label htmlFor=""><b>Email:</b></label>
                            <input type="text" className="form-control"/>
                            <label htmlFor=""><b>Password:</b></label>
                            <input type="password" className="form-control"/> <br/>
                            <input type="submit" value="Login" className="form-control btn btn-success"/>
                            <center><a href="registerworker" >Not Register? Click Here</a></center>
                        </form>
                    </div>
                </div>
            </div>
        </>
    ); 
};
export default Workerindex;