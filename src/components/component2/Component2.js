import React from 'react';
import { connect } from 'react-redux';

const Component2 = (props) =>{
  return (
    <div className="container" id="component2">
      <h1 className="page-title">Component2 Page</h1>
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

export default connect(mapStateToProps, mapDispatchToProps)(Component2);