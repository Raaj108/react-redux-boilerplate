import React from 'react';
import { connect } from 'react-redux';

const Home = (props) =>{
  
  const noteStyle= {
    "background-color": "#555555",
    color:"#eeeeee",
    "margin-top": "10px",
    padding: "10px"   
  };
  
  return (
    <div className="" id="documentation">
      <h1 className="page-title">Documentation</h1>
      <hr></hr>
      <section className="paragraph" id="intro">
        <h5 className="paragraph-title">Introduction: </h5>
        <p className="paragraph-text">
          The React-Redux-Boilerplate is ready to serve, React Project template. The React-Redux-Boilerplate is an enhancement to the single-page React applications setup created by "Create React App" with state management and interaction with data.
        </p>
      </section>
      <section className="paragraph" id="features">
        <h5 className="paragraph-title">Features: </h5>
        <hr></hr>
        <p className="paragraph-text">
          The React-Redux-Boilerplate is packed with all the latest industry tools, namely:
          <ul className="features-list">
            <li className="features-list-item">React 16+ with React Router 5+.</li>
            <li className="features-list-item">Redux 4+ & Redux Thunk for State Management and basic Redux side effects management.</li>
            <li className="features-list-item">Axios for Promise based XMLHttpRequests to Intercept request, response and transform request, response data.</li>
            <li className="features-list-item">Bootstrap 4 to create Responsive Design.</li>
            <li className="features-list-item">SCSS for Styling</li>
            <li className="features-list-item">Gulp for automating front end tasks</li>            
          </ul>
        </p>
      </section>
      <section className="paragraph" id="getStarted">
        <h5 className="paragraph-title">Get Started: </h5>
        <hr></hr>
        <ul className="quickstart-list">
          <li className="quickstart-list-item">Clone this repo using: </li>
          <li className="quickstart-list-item">Navigate to "react-redux-boilerplate" directory.</li>
          <li className="quickstart-list-item">In command Prompt, run <code>yarn</code> or <code>npm install</code> command to install dependencies.</li>
          <li className="quickstart-list-item">Run <code>npm start</code> command to run the application.  </li>
          <li className="quickstart-list-item">Open your favorite browser and see the application running at <code>http://localhost:3000</code>.</li>
          <div className="note" style={noteStyle}>
            <b>Note</b>: Delete this documentation page from <code>/components/pages</code> directory, and remove its refrence from the <code>App.js</code> file before begining to write your code. 
          </div>
        </ul>
      </section>
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    state
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);