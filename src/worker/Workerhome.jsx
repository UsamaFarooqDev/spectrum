import React from 'react';
import "../css/worker.css";
import dp  from "../images/dp.png";
import logo  from "../images/download.png";
const Workerhome  = () => {
    return(
        <>
            <div className="container-fluid">
                <div className="row header">
                    <div className="col-sm-8 col-7 text-left">
                        <h4>Welcome To Spectrum Staffing Solutions</h4>
                    </div>
                    <div className="col-sm-4 col-5 text-right">
                        <div class="dropdown open">
                            <img src={dp} width="70" class="dropdown-toggle rounded-circle"  id="triggerId" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false" />
                            <div class="dropdown-menu" aria-labelledby="triggerId">
                                <a class="dropdown-item" href="#">Profile</a>
                                <a class="dropdown-item " href="/worker">Logout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2 sidebar text-center ">
                        <br/><br/> <br/>
                        <a href="Workerhome"> Dashboard</a> <br /> <br /><br />
                      <a href="invitations"> Invitations </a> <br /><br /><br />
                      <a href="invitations"> Submitted Applications</a> <br /><br /><br />
                      <a href="invitations"> Profile </a>
                    </div>
                    <div className="col-sm-10 rightside">
                        <br/><br/>
                        <div className="row">
                            <div className="col-sm-3">
                                <section className="cardsp text-center my-auto">
                                    <span>
                                    <h3>Submitted Proposals</h3>
                                    <h4>16</h4>
                                    </span>
                                    <input type="submit" id="btns" className="form-control" value="Visit More" />
                                </section>
                            </div>
                            <div className="col-sm-3 text-center">
                            <section className="cardap text-center my-auto">
                                    <span>
                                    <h3>Accepted Proposals</h3>
                                    <h4>10</h4>
                                    </span>
                                    <input type="submit" id="btns"  className="form-control" value="Visit More" />
                                </section>
                            </div>
                            <div className="col-sm-3">
                            <section className="cardrp text-center my-auto">
                                    <span>
                                    <h3>Rejected Proposals</h3>
                                    <h4>06</h4>
                                    </span>
                                    <input type="submit" id="btns"  className="form-control" value="Visit More" />
                                </section>
                            </div>
                            <div className="col-sm-3 cards">
                            <section className="cardrpp text-center my-auto">
                                    <span>
                                    <h3>Remaining Proposals</h3>
                                    <h4>34</h4>
                                    </span>
                                    <input type="submit"  id="btns" className="form-control" value="Visit More" />
                                </section>
                            </div>
                        </div>
                        <br/>
                        <hr/>
                        <div className="row">
                            <div className="col-sm-7 latestjobs">
                                <h1 className="text-center">Latest Jobs Posted</h1> <hr/>
                                <section className="jobs">
                                    <a href="">Needed a Graphics Designer 4 year exprience</a> <br/>
                                    <p>Graphics Designer Needed at ABC Sotfware in Sharjah. 4 years experience
                                        required. Looking for a person skilled in Ilustrator and Photoshop.
                                    </p>
                                </section>
                                <section className="jobs">
                                    <a href="">Needed a Graphics Designer 4 year exprience</a> <br/>
                                    <p>Graphics Designer Needed at ABC Sotfware in Sharjah. 4 years experience
                                        required. Looking for a person skilled in Ilustrator and Photoshop.
                                    </p>
                                </section>
                                <section className="jobs">
                                    <a href="">Needed a Graphics Designer 4 year exprience</a> <br/>
                                    <p>Graphics Designer Needed at ABC Sotfware in Sharjah. 4 years experience
                                        required. Looking for a person skilled in Ilustrator and Photoshop.
                                    </p>
                                </section>
                            </div>
                            <div className="col-sm-4 companies">
                                <section className="">
                                    <h3 className="text-center">Registered Companies</h3>
                                    <a href=""> <img src={logo} alt="" className="img-fluid rounded-circle" width="40"/> ABC Software House</a> <br/>
                                    <a href=""> <img src={logo} alt="" className="img-fluid rounded-circle" width="40"/> XYZ OIL & GAS</a> <br/>
                                    <a href=""> <img src={logo} alt="" className="img-fluid rounded-circle" width="40"/> DEF Petroleum</a> <br/>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Workerhome;
