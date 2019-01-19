import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import  './bootstrap.svg';
import './Header.css';
import {FaSistrix}from 'react-icons/fa';
import Product from '../Product/Product';
import card from '../Cards/card';
import Category from '../Category/Category';
import Brands from '../Brands/Brands';

class Header extends React.Component {
  render() {
    return (
      <Router>
      <div >
        <div class ="container">
      <div class="row">
        <div class="col-6">
        {/* <!-- Image and text --> */}
<nav class="navbar navbar-light ">
  <a class="navbar-brand" href="#">
    <img src={require('./bootstrap.svg')} width="30" height="30" class="d-inline-block align-top" alt=""/>
    Bootstrap
  </a>
</nav>
  </div>
        <div class="col-6">
        <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link9" href="#">Contact us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link9" href="#">Privacy Policy</a>
  </li>
  <li class="nav-item">
    <a class="nav-link9" href="#">Terms and condition</a>
  </li>
  
</ul>
  </div></div>
      </div>
      
      
      <div class="row-2">
        <div class="container">
        <ul class="nav">
  <li class="nav-item">
    <Link class="nav-link " to="/">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Category/Category">Mobiles</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Category/Category">Laptops</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="/Category/Category">Accessories</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="Brands/Brands">Brands</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link " to="#">Shops</Link>
  </li></ul>
     <div class="form">
    <input type="text" placeholder="Search" />
    <button id="btn">Go</button>
     </div>

  
        </div>
        
      </div>
      <Route exact path="/" component={card} />
      <Route  path="/Category/Category" component={Category} />
      <Route  path="/Brands/Brands" component={Brands} />

    </div>
    </Router>
    )
  }
}

export default Header;