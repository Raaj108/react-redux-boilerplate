import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/"><b>React-Redux-Boilerplate</b></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">            
            <li className="nav-item active">
              <Link className="nav-link" to="/">Docs</Link>
            </li>   
            <li className="nav-item">
              <Link className="nav-link" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/component1">Component1</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/component2">Component2</Link>
            </li>
          </ul>        
        </div>
      </div>
    </nav>
  )
}

export default Navbar;