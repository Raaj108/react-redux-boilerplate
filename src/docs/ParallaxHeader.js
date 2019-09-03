import React from 'react';
import logo from './logo.svg';


const ParallaxHeader = () => {
  return (
    <header className="parallax-header-container">
      <div className="parallax-header-content">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="title">React-Redux-Boilerplate</h1>  
      </div>
    </header>
  )
}

export default ParallaxHeader;