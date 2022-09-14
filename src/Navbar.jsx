import { React } from "react";
import {NavLink} from "react-router-dom";
import './App.css';
const Navbar = () =>{
    return(
       <>
 <nav class="navbar navbar-expand-lg navbar-dark fixed-top ">
<a  href="#">Spectrum Staffing Solutions</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
<section id="navbar">
<ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#aboutus">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact Us</a>
      </li>
      <li class="nav-item">
        <form action="register">
        <button class="btn btn-info">Register</button>
      
        </form>
       
      </li>
      </ul>
</section>  
 </div>
</nav>
       </>
    );
};
export default Navbar;