import React, { Component } from 'react';
import './Footer.css'; 
import { FaFacebookSquare,FaGooglePlusSquare,FaLinkedin,FaTwitterSquare } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
<div className="Footer">
<div class="row abc" id="row1">
  <div class="col-8">
  <h3 id="Contact">Contact us</h3>
  </div>
  <div class="col-4">
  <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#"><FaFacebookSquare size={30}/></a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#"><FaTwitterSquare size={30}/></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><FaLinkedin size={30}/></a>
  </li>
  
  <li class="nav-item">
    <a class="nav-link " href="#"><FaGooglePlusSquare size={30}/></a>
  </li>
</ul>
  
  </div>
</div>

 {/* First Row End*/ }   
 <div class="row" id="row2">
  <div class="col" >
   <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col"><h5>Shops</h5></th>
    </tr>
  </thead>
  <tbody className="tbody">
    <tr>
      <td><a href="#" >Primary</a></td>
    </tr>
    <tr>
     <td><a href="#" >Primary</a></td>
    </tr>
    <tr>
      <td><a href="#" >Primary</a></td>
    </tr>
  </tbody>
</table>
  </div>{/* end col 1*/}
  <div class="col">
  <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col"><h5>Brands</h5></th>
    </tr>
  </thead>
  <tbody  className="tbody">
    <tr>
      <td><a href="#" >Secondary</a></td>
    </tr>
    <tr>
     <td><a href="#" >Secondary</a></td>
    </tr>
    <tr>
      <td><a href="#" >econdary</a></td>
    </tr>
  </tbody>
</table>
  </div> {/* end col 2*/}
 <div class="col">
  <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col"><h5>Brands</h5></th>
    </tr>
  </thead>
  <tbody  className="tbody">
    <tr>
      <td><a href="#" >Secondary</a></td>
    </tr>
    <tr>
     <td><a href="#" >Secondary</a></td>
    </tr>
    <tr>
      <td><a href="#" >econdary</a></td>
    </tr>
  </tbody>
</table>
  </div> {/* end col 2*/}
  <div class="col">
  <table class="table table-borderless">
  <thead>
    <tr>
      <th scope="col"><h5>Sitelinks</h5></th>
    </tr>
  </thead>
  <tbody  className="tbody">
    <tr>
      <td><a href="#" >Contact</a></td>
    </tr>
    <tr>
     <td><a href="#" >Privacy Policy</a></td>
    </tr>
    <tr>
      <td><a href="#" >Term And Condition</a></td>
    </tr>
  </tbody>
</table>
    </div>{/* end col 4*/}
</div>
 <div class="row abc">
<div class="col-12" id="copy-right"> 
Copyright &copy; by<a href="#"> Shafi Shah</a> All Right Reserved From 2016-2019.
</div>
</div>

</div>
      
  
    );
  }
}

export default Footer;
