import React, { Component } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Shops  from './Shops/Shops';
import ContactUs  from './ContactUs/ContactUs';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       {/* <Shops /> */}
       <ContactUs/>
       <Footer />
      </div>
    );
  }
}

export default App;
