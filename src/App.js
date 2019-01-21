import React, { Component } from 'react';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Shops  from './Shops/Shops';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Shops />
       <Footer />
      </div>
    );
  }
}

export default App;
