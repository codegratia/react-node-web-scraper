import React, { Component } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Shops from './Shops/Shops';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Shops /> */}
        <h3>main component placeholder</h3>
        <Footer />
      </div>
    );
  }
}

export default App;
