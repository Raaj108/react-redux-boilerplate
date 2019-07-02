import React from 'react';
import { connect } from 'react-redux';

const Home = (props) =>{
  return (
    <div className="" id="home">
      <h1 className="page-title">Home Page</h1>
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