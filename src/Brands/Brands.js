import React, { Component } from 'react';
import './Brands.css';

class Brands extends Component {
    render(){
        return(
            <div>
                <div class="row logos">
                        <div class="col-md-3">
                           <a href="#"><img src={'./images/apple-logo.png'} /></a>
                        </div>
                        <div class="col-md-3">
                           <a href="#"><img src={'./images/dell.png'} /></a>
                        </div>
                        <div class="col-md-3">
                           <a href="#"><img src={'./images/hp.png'} /></a>
                        </div>
                        <div class="col-md-3">
                           <a href="#"><img src={'./images/lenovo.png'} /></a>
                        </div>
                </div>
                <div class="row logos">
                        <div class="col-md-3">
                           <a href="#"><img src={'./images/samsung.png'} /></a>
                        </div>
                        <div class="col-md-3">
                           <a href="#"><img src={'./images/haier.png'} /></a>
                        </div>
                        <div class="col-md-3">
                           <a href="#"><img src={'./images/sony.png'} /></a>
                        </div>
                        <div class="col-md-3">
                           <a href="#"><img src={'./images/toshiba.png'} /></a>
                        </div>
                </div>
            </div>
        );
    }
}
export default Brands;
