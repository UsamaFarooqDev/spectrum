import React from 'react';
const Footer = () => {
    return(
        <>
         <section id="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-4 text-center">
                        <h4>Quick Links:</h4>
                        <a href="">Services</a> <br/>
                        <a href="">About Us</a> <br/> 
                        <a href="">Contact Us</a> <br/> 
                        <a href="">Register</a>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h4>Follow Us:</h4>
                        <i class="fa fa-facebook-square fa-2x" aria-hidden="true"></i>
                        <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                        <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                    </div>
                    <div className="col-sm-4 text-center">
                        <h4>Contact Us</h4>
                       <i class="fa fa-envelope fa-1x" aria-hidden="true"><font>info@spectrumstaffingsolution.com</font></i> <br/>
                       <i class="fa fa-phone-square fa-1x" aria-hidden="true"><font>+92 312 574 98 28</font></i> <br/>
                       <i class="fa fa-phone-square fa-1x" aria-hidden="true"><font>+92 317 800 05 69</font></i> <br/>
                    </div>
                </div>
            </div>

        </section>
        </>
    );
};
export default Footer;
